import cython
from disk import *
import errno
import time
import z3


class LFS(object):
    # hzy: the block address of the superblock on the disk
    SUPERBLOCK = 0

    # hzy: address (i.e. offset) in the superblock; number on this address
    # keeps track of the disk address of the next free block on the disk
    SB_OFF_BALLOC = 0
    # hzy: address (i.e. offset) in the superblock; number on this address
    # keeps track of the disk address of the next free inode block
    SB_OFF_IALLOC = 1
    # hzy: offset inside the superblock that stores the disk address
    # of the latest imap block
    SB_OFF_IMAP = 2

    # hzy: offset of the block that contains "mtime" field of the inode
    I_OFF_MTIME = 0
    # hzy: offset of the block that contains "mode" field of the inode
    I_OFF_MODE = 1
    I_OFF_DATA = 4
    
    def __init__(self, disk):
        self._disk = disk

        self._sb = None
        self._imap = None

    def read(self, ino):
        """Given a inode number, read the corresponding inode block from the
        disk.

        Args:
            ino: inode number

        Returns:
            block we read from the disk

        """
        self._begin()
        # hzy: we get the disk address of the given inode number `ino`
        bid = self._imap[ino]
        # hzy: we fetch the block indicated by the address `bid`
        r = self._disk.read(bid)
        # hzy: we reset self._imap and self._sb to None
        self._commit(False)
        return r

    def _begin(self):
        assert self._sb is None
        assert self._imap is None

        # hzy: _sb is the superblock. We read the block from disk with
        # address self.SUPERBLOCK
        self._sb = self._disk.read(self.SUPERBLOCK)
        # hzy: _imap: a structure that takes an inode number as
        # input and produces the disk address of the most recent version of the inode.
        self._imap = self._disk.read(self._sb[self.SB_OFF_IMAP])

    def _balloc(self):
        """Get the disk address of the next free block.

        Returns:
            the disk address of the next free block.

        """
        a = self._sb[self.SB_OFF_BALLOC]
        self._sb[self.SB_OFF_BALLOC] += 1

        # Allocator returned a new block
        assertion(0 < (a + 1))

        return a

    def _ialloc(self):
        """Get the disk address of the next free inode block

        Returns:
            the disk address of the next free inode block

        """
        a = self._sb[self.SB_OFF_IALLOC]
        self._sb[self.SB_OFF_IALLOC] += 1

        # we have a free inode..
        assertion(a < 512)

        return a

    def _commit(self, write=True):
        """
        We perform a series of actions when write=True.
        When write=False, we simply set the in-memory superblock and imap to None

        Args:
            write: whether we write (True) or read (False)

        Returns:
            None

        """
        assert self._sb is not None
        assert self._imap is not None

        if write:
            # hzy: we get the disk address of the next free block
            a = self._balloc()
            # hzy: we write current imap to the free block
            self._disk.write(a, self._imap)
            # hzy: we flush the previous write to the disk
            self._disk.flush()
            # hzy: we update the disk address of the latest imap block inside the superblock
            self._sb[self.SB_OFF_IMAP] = a
            # hzy: we write the superblock back to the disk
            self._disk.write(self.SUPERBLOCK, self._sb)
            # hzy: we flush the previous write to the disk
            self._disk.flush()

        self._sb = None
        self._imap = None

    def _set_map(self, ino, bid):
        """add ino - bid relation into imap

        Args:
            ino: inode number
            bid: disk address

        Returns:
            None

        """
        self._imap[Extract(8, 0, ino)] = bid

    def _get_map(self, ino):
        """Get the disk address of the inode block for the given ino

        Args:
            ino: inode number

        Returns:
            disk address of the inode block

        """
        return self._imap[Extract(8, 0, ino)]

    ########

    def dir_lookup(self, blk, name):
        """Lookup the inode number given the blk and the name

        Args:
            blk: the block
            name: the name

        Returns:
            inode number

        """
        # hzy: ENOENT means "Error NO ENTry"
        res = -errno.ENOENT
        # TODO: hzy: why 2?
        for i in range(2):
            oname = blk[self.I_OFF_DATA + i * 2]
            oino = blk[self.I_OFF_DATA + i * 2 + 1]

            res = If(And(oname == name, 0 < oino), oino, res)
        return res

    def dir_find_empty(self, blk):
        # hzy: ENOSPC means "No space left on device"
        res = BitVecVal(-errno.ENOSPC, 64)
        for i in range(2):
            res = If(blk[self.I_OFF_DATA + i * 2] == 0, i, res)
        return res

    def get_attr(self, ino):
        """Get the attributes of the inode

        Args:
            ino: inode number

        Returns:
            attributes

        """
        s = Stat(0, 0, 0)

        self._begin()

        blk = self._get_map(ino)
        blk = self._disk.read(blk)
        # hzy: as mentioned in the paper, files are zero-sized (no read, write, or unlink)
        s.bsize = 0
        s.mode = blk[self.I_OFF_MODE]
        s.mtime = blk[self.I_OFF_MTIME]

        self._commit(False)

        return s

    def lookup(self, parent, name):
        """Look up the inode number of the name, which should be under the parent

        Args:
            parent: the parent name
            name: the name which its inode number we are interested in

        Returns:
            the inode number

        """
        self._begin()

        parent_blkno = self._get_map(parent)
        parent_blk = self._disk.read(parent_blkno)

        ino = self.dir_lookup(parent_blk, name)
        self._commit(False)
        return ino

    def exists(self, parent, name):
        """Check if name is under parent

        Args:
            parent: the parent name
            name: the name

        Returns:
            bool

        """
        return 0 < self.lookup(parent, name)

    def mknod(self, parent, name, mode, mtime):
        """Add a file to a directory

        Described in paper section 2.2

        Args:
            parent: parent directory
            name: name of the file
            mode: mode of the file
            mtime: modified time of the file

        Returns:
            inode number if everything works fine.

        """
        # check if the file exists
        if self.exists(parent, name):
            assertion(False)
            return BitVecVal(-errno.EEXIST, 64)

        self._begin()

        parent_blkno = self._get_map(parent)
        parent_blk = self._disk.read(parent_blkno)

        ino = self._ialloc()
        blkno = self._balloc()

        eoff = self.dir_find_empty(parent_blk)

        if eoff < 0:
            self._commit(False)
            return eoff

        # write new inode
        inodeblk = ConstBlock(0)

        inodeblk[self.I_OFF_MTIME] = mtime
        inodeblk[self.I_OFF_MODE] = mode
        self._disk.write(blkno, inodeblk)

        # update parent directory
        parent_blk[self.I_OFF_DATA + 2 * Extract(8, 0, eoff)] = name
        parent_blk[self.I_OFF_DATA + 2 * Extract(8, 0, eoff) + 1] = ino

        new_parent_blkno = self._balloc()

        self._disk.write(new_parent_blkno, parent_blk)

        # update the imap
        self._set_map(ino, blkno)
        self._set_map(parent, new_parent_blkno)

        self._commit()

        return ino

    def crash(self, mach):
        # TODO: hzy: how does this function work?
        return self.__class__(self._disk.crash(mach))


def mkfs(disk):
    """Initialize the disk into a state that contains an empty root directory
    (Figure 2.a of the paper)

    Args:
        disk: the disk

    Returns:
        None

    """
    # hzy: as shown in "lfs.pxd", `cdef AsyncDisk _disk`. Thus
    # here `_disk` type is `AsyncDisk` from "diskimpl.pyx"
    # We read the first block (indicated by 0) from the disk and treat it as the superblock
    sb = disk._disk.read(LFS.SUPERBLOCK)
    if sb[LFS.SB_OFF_BALLOC] == 0:
        # hzy: we allocate 3 blocks when initialize the file system:
        # superblock, inode, and imap. Thus, the disk address of the next free block is 3
        sb[LFS.SB_OFF_BALLOC] = 3
        # hzy: disk address of the next free inode block (i.e. disk address 2)
        # TODO: from the code here, figure 2.a seems incorrect: b1 should contain imap block, b2 should contain inode block
        sb[LFS.SB_OFF_IALLOC] = 2
        # hzy: disk address of the 1st imap block (i.e. disk address 1)
        sb[LFS.SB_OFF_IMAP] = 1
        # hzy: write superblock to the disk at the address 0
        disk._disk.write(0, sb)

        imap = ConstBlock(0)
        # hzy: imap is a structure that takes an inode number as input and
        # produces the disk address of the most recent version of the inode.
        # Here, `1` means the inode number 1, `2` means inode 1 resides inside block 2 of the disk.
        imap[1] = 2
        disk._disk.write(1, imap)


def create_lfs(*args):
    disk = AsyncDisk('/tmp/foo.img')
    lfs = LFS(disk)
    mkfs(lfs)

    return lfs

if __name__ == '__main__':
    lfs = create_lfs()

    print lfs.lookup(1, 16)
    print lfs.get_attr(4)
    print lfs.mknod(1, 20, 2000, 2000)
    print lfs.lookup(1, 20)
    print lfs.get_attr(4)
