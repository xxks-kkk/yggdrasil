Search.setIndex({docnames:["ast-rewrite","bitmap","dirinode","dirspec","disk","diskimpl","index","inodepack","kvimpl","kvspec","lfs","lfs_fuse","lfs_fuse_main","logspec","modules","partition","symbolicmap","test_bitmap","test_cp","test_dirspec","test_diskspec","test_fsck","test_fsck_run","test_inode","test_inodepack","test_kv","test_lfs","test_partition","test_tenaciousd","test_ufarray","test_waldisk","test_xv6inode","verify","waldisk","xv6inode","yav_dirimpl_fuse","yav_xv6_main","yggdrasil"],envversion:52,filenames:["ast-rewrite.rst","bitmap.rst","dirinode.rst","dirspec.rst","disk.rst","diskimpl.rst","index.rst","inodepack.rst","kvimpl.rst","kvspec.rst","lfs.rst","lfs_fuse.rst","lfs_fuse_main.rst","logspec.rst","modules.rst","partition.rst","symbolicmap.rst","test_bitmap.rst","test_cp.rst","test_dirspec.rst","test_diskspec.rst","test_fsck.rst","test_fsck_run.rst","test_inode.rst","test_inodepack.rst","test_kv.rst","test_lfs.rst","test_partition.rst","test_tenaciousd.rst","test_ufarray.rst","test_waldisk.rst","test_xv6inode.rst","verify.rst","waldisk.rst","xv6inode.rst","yav_dirimpl_fuse.rst","yav_xv6_main.rst","yggdrasil.rst"],objects:{"":{bitmap:[1,0,0,"-"],dirinode:[2,0,0,"-"],dirspec:[3,0,0,"-"],disk:[4,0,0,"-"],diskimpl:[5,0,0,"-"],inodepack:[7,0,0,"-"],kvimpl:[8,0,0,"-"],kvspec:[9,0,0,"-"],lfs:[10,0,0,"-"],logspec:[13,0,0,"-"],partition:[15,0,0,"-"],symbolicmap:[16,0,0,"-"],test_bitmap:[17,0,0,"-"],test_cp:[18,0,0,"-"],test_dirspec:[19,0,0,"-"],test_diskspec:[20,0,0,"-"],test_inodepack:[24,0,0,"-"],test_kv:[25,0,0,"-"],test_lfs:[26,0,0,"-"],test_partition:[27,0,0,"-"],test_ufarray:[29,0,0,"-"],test_waldisk:[30,0,0,"-"],test_xv6inode:[31,0,0,"-"],waldisk:[33,0,0,"-"],xv6inode:[34,0,0,"-"],yav_dirimpl_fuse:[35,0,0,"-"],yav_xv6_main:[36,0,0,"-"],yggdrasil:[37,0,0,"-"]},"bitmap.BitmapDisk":{crash:[1,2,1,""],is_set:[1,2,1,""],set_bit:[1,2,1,""],unset_bit:[1,2,1,""]},"dirinode.DirImpl":{IFREEDISK:[2,3,1,""],NBLOCKS:[2,3,1,""],ORPHANS:[2,3,1,""],crash:[2,2,1,""],forget:[2,2,1,""],fsync:[2,2,1,""],gc1:[2,2,1,""],gc2:[2,2,1,""],gc3:[2,2,1,""],get_iattr:[2,2,1,""],ialloc:[2,2,1,""],is_dir:[2,2,1,""],is_gcable:[2,2,1,""],is_ifree:[2,2,1,""],is_regular:[2,2,1,""],is_valid:[2,2,1,""],read:[2,2,1,""],set_iattr:[2,2,1,""],truncate:[2,2,1,""],write:[2,2,1,""]},"dirinode.Orphans":{append:[2,2,1,""],clear:[2,2,1,""],index:[2,2,1,""],reset:[2,2,1,""],size:[2,2,1,""]},"dirspec.Attributes":{bsize:[3,2,1,""],fsize:[3,2,1,""],mode:[3,2,1,""],mtime:[3,2,1,""],nlink:[3,2,1,""],set_bsize:[3,2,1,""],set_fsize:[3,2,1,""],set_mode:[3,2,1,""],set_mtime:[3,2,1,""],set_nlink:[3,2,1,""],to_stat:[3,2,1,""]},"dirspec.DirLook":{locate_dentry:[3,2,1,""],locate_dentry_ino:[3,2,1,""],locate_empty_slot:[3,2,1,""],locate_empty_slot_ino:[3,2,1,""]},"dirspec.DirSpec":{crash:[3,2,1,""],forget:[3,2,1,""],get_iattr:[3,2,1,""],ialloc:[3,2,1,""],is_dir:[3,2,1,""],is_ifree:[3,2,1,""],is_regular:[3,2,1,""],is_valid:[3,2,1,""],lookup:[3,2,1,""],mknod:[3,2,1,""],read:[3,2,1,""],rename:[3,2,1,""],rmdir:[3,2,1,""],truncate:[3,2,1,""],unlink:[3,2,1,""],write:[3,2,1,""]},"diskimpl.Allocator":{alloc:[5,2,1,""]},"diskimpl.AsyncDisk":{flush:[5,2,1,""],read:[5,2,1,""],write:[5,2,1,""]},"diskimpl.Block":{copy:[5,2,1,""],size:[5,3,1,""]},"diskimpl.Dict":{get:[5,2,1,""],has_key:[5,2,1,""]},"diskimpl.PartitionAsyncDisk":{flush:[5,2,1,""],read:[5,2,1,""],write:[5,2,1,""]},"diskimpl.Stat":{bsize:[5,3,1,""],fsize:[5,3,1,""],mode:[5,3,1,""],mtime:[5,3,1,""],nlink:[5,3,1,""],size:[5,3,1,""]},"inodepack.InodePackDisk":{MODE:[7,3,1,""],MTIME:[7,3,1,""],NLINK:[7,3,1,""],OFF:[7,3,1,""],SIZE:[7,3,1,""],crash:[7,2,1,""],get_iattr:[7,2,1,""],get_mapping:[7,2,1,""],read:[7,2,1,""],set_iattr:[7,2,1,""],set_mapping:[7,2,1,""]},"kvimpl.KVImpl":{"delete":[8,2,1,""],KEY_SIZE:[8,3,1,""],OFF_VALUE_DATA:[8,3,1,""],OFF_VALUE_SIZE:[8,3,1,""],VALUE_SIZE_LIMIT:[8,3,1,""],crash:[8,2,1,""],get:[8,2,1,""],put:[8,2,1,""]},"kvspec.KVSpec":{crash:[9,2,1,""],get:[9,2,1,""],put:[9,2,1,""]},"lfs.LFS":{I_OFF_DATA:[10,3,1,""],I_OFF_MODE:[10,3,1,""],I_OFF_MTIME:[10,3,1,""],SB_OFF_BALLOC:[10,3,1,""],SB_OFF_IALLOC:[10,3,1,""],SB_OFF_IMAP:[10,3,1,""],SUPERBLOCK:[10,3,1,""],_balloc:[10,2,1,""],_commit:[10,2,1,""],_get_map:[10,2,1,""],_ialloc:[10,2,1,""],_set_map:[10,2,1,""],crash:[10,2,1,""],dir_find_empty:[10,2,1,""],dir_lookup:[10,2,1,""],exists:[10,2,1,""],get_attr:[10,2,1,""],lookup:[10,2,1,""],mknod:[10,2,1,""],read:[10,2,1,""]},"logspec.LogSpec":{append:[13,2,1,""],crash:[13,2,1,""],tail:[13,3,1,""]},"logspec.LogSpecEntry":{size:[13,3,1,""]},"partition.Partition":{crash:[15,2,1,""],flush:[15,2,1,""],read:[15,2,1,""],valid:[15,2,1,""],write:[15,2,1,""]},"symbolicmap.SymbolicMap":{get:[16,2,1,""],has_key:[16,2,1,""]},"test_bitmap.TestBitmapDisk":{create_impl:[17,2,1,""],create_spec:[17,2,1,""],equivalence:[17,2,1,""],match_set_bit:[17,2,1,""],match_unset_bit:[17,2,1,""],test_match_set_bit:[17,2,1,""],test_match_set_bit_crash:[17,2,1,""],test_match_set_bit_pre:[17,2,1,""],test_match_unset_bit:[17,2,1,""],test_match_unset_bit_crash:[17,2,1,""],test_match_unset_bit_pre:[17,2,1,""]},"test_cp.CPImpl":{cp:[18,2,1,""]},"test_cp.CPRefinement":{create_impl:[18,2,1,""],create_spec:[18,2,1,""],test_cp:[18,2,1,""]},"test_cp.CPSpec":{cp:[18,2,1,""]},"test_dirspec.DirRefinement":{create_impl:[19,2,1,""],create_spec:[19,2,1,""],test_match_write:[19,2,1,""]},"test_dirspec.DirRefinementTest":{call_mknod:[19,2,1,""],call_rmdir:[19,2,1,""],call_unlink:[19,2,1,""],create_impl:[19,2,1,""],create_spec:[19,2,1,""],equivalence:[19,2,1,""],match_forget:[19,2,1,""],match_mknod:[19,2,1,""],match_rename:[19,2,1,""],match_rmdir:[19,2,1,""],match_unlink:[19,2,1,""],nop_gc1:[19,2,1,""],nop_gc2:[19,2,1,""],nop_gc3:[19,2,1,""],test_match_forget:[19,2,1,""],test_match_forget_crash:[19,2,1,""],test_match_forget_pre:[19,2,1,""],test_match_mknod:[19,2,1,""],test_match_mknod_crash:[19,2,1,""],test_match_mknod_pre:[19,2,1,""],test_match_rename:[19,2,1,""],test_match_rename_crash:[19,2,1,""],test_match_rename_pre:[19,2,1,""],test_match_rmdir:[19,2,1,""],test_match_rmdir_crash:[19,2,1,""],test_match_rmdir_pre:[19,2,1,""],test_match_unlink:[19,2,1,""],test_match_unlink_crash:[19,2,1,""],test_match_unlink_pre:[19,2,1,""],test_nop_nop_gc1:[19,2,1,""],test_nop_nop_gc2:[19,2,1,""],test_nop_nop_gc3:[19,2,1,""]},"test_diskspec.AsyncDiskTest":{setUp:[20,2,1,""],test_flush:[20,2,1,""],test_nocrash:[20,2,1,""],test_prefix:[20,2,1,""],test_reorder:[20,2,1,""],test_write_two:[20,2,1,""]},"test_diskspec.FlushingDisk":{crash:[20,2,1,""],flush:[20,2,1,""],read:[20,2,1,""],write:[20,2,1,""]},"test_diskspec.InodeSpecTest":{setUp:[20,2,1,""],test_bmap:[20,2,1,""],test_bunmap:[20,2,1,""],test_compare_to_async:[20,2,1,""]},"test_diskspec.SyncDiskTest":{test_flushingdisk_is_sync:[20,2,1,""],test_syncdisk_is_async:[20,2,1,""]},"test_diskspec.VirtualAsyncDiskTest":{create_impl:[20,2,1,""],create_spec:[20,2,1,""],equivalence:[20,2,1,""],match_write:[20,2,1,""],test_match_write:[20,2,1,""],test_match_write_crash:[20,2,1,""],test_match_write_pre:[20,2,1,""]},"test_inodepack.InodePackDiskRefinement":{create_impl:[24,2,1,""],create_spec:[24,2,1,""],equivalence:[24,2,1,""],match_set_iattr:[24,2,1,""],match_set_mapping:[24,2,1,""],test_match_set_iattr:[24,2,1,""],test_match_set_iattr_crash:[24,2,1,""],test_match_set_iattr_pre:[24,2,1,""],test_match_set_mapping:[24,2,1,""],test_match_set_mapping_crash:[24,2,1,""],test_match_set_mapping_pre:[24,2,1,""]},"test_kv.KVTest":{setUp:[25,2,1,""],test_kvimpl:[25,2,1,""],test_kvspec:[25,2,1,""]},"test_lfs.LFSRefinement":{create_impl:[26,2,1,""],create_spec:[26,2,1,""],match_mknod:[26,2,1,""],pre_post:[26,2,1,""],test_match_mknod:[26,2,1,""],test_match_mknod_crash:[26,2,1,""],test_match_mknod_pre:[26,2,1,""]},"test_lfs.LFSSpec":{crash:[26,2,1,""],get_attr:[26,2,1,""],lookup:[26,2,1,""],mknod:[26,2,1,""]},"test_partition.PartitionRefinement":{call_write:[27,2,1,""],crash:[27,2,1,""],crash_impl:[27,2,1,""],crash_spec:[27,2,1,""],create_impl:[27,2,1,""],create_spec:[27,2,1,""],equivalence:[27,2,1,""],match_write:[27,2,1,""],test_match_write:[27,2,1,""],test_match_write_crash:[27,2,1,""],test_match_write_pre:[27,2,1,""]},"test_ufarray.ArrayTest":{setUp:[29,2,1,""],test_array_update:[29,2,1,""],test_block_update:[29,2,1,""]},"test_waldisk.WALDiskTestRefinement":{call_write_tx:[30,2,1,""],call_write_tx_nocommit:[30,2,1,""],create_impl:[30,2,1,""],create_spec:[30,2,1,""],equivalence:[30,2,1,""],equivalence_durable:[30,2,1,""],equivalence_volatile:[30,2,1,""],match_write_tx:[30,2,1,""],match_write_tx_nocommit:[30,2,1,""],match_writev:[30,2,1,""],test_atomic:[30,2,1,""],test_idempotent_recovery:[30,2,1,""],test_match_write_tx:[30,2,1,""],test_match_write_tx_crash:[30,2,1,""],test_match_write_tx_nocommit:[30,2,1,""],test_match_write_tx_nocommit_pre:[30,2,1,""],test_match_write_tx_pre:[30,2,1,""],test_match_writev:[30,2,1,""],test_match_writev_crash:[30,2,1,""],test_match_writev_pre:[30,2,1,""]},"test_xv6inode.IndirectInodeDiskRefinement":{create_impl:[31,2,1,""],create_spec:[31,2,1,""],match_bmap:[31,2,1,""],match_bunmap:[31,2,1,""],match_set_iattr:[31,2,1,""],pre_post:[31,2,1,""],test_match_bmap:[31,2,1,""],test_match_bmap_crash:[31,2,1,""],test_match_bmap_pre:[31,2,1,""],test_match_bunmap:[31,2,1,""],test_match_bunmap_crash:[31,2,1,""],test_match_bunmap_pre:[31,2,1,""],test_match_set_iattr:[31,2,1,""],test_match_set_iattr_crash:[31,2,1,""],test_match_set_iattr_pre:[31,2,1,""]},"test_xv6inode.InodeDiskRefinement":{create_impl:[31,2,1,""],create_spec:[31,2,1,""],match_bmap:[31,2,1,""],match_bunmap:[31,2,1,""],match_set_iattr:[31,2,1,""],pre_post:[31,2,1,""],test_bmap:[31,2,1,""],test_bunmap:[31,2,1,""],test_match_bmap:[31,2,1,""],test_match_bmap_crash:[31,2,1,""],test_match_bmap_pre:[31,2,1,""],test_match_bunmap:[31,2,1,""],test_match_bunmap_crash:[31,2,1,""],test_match_bunmap_pre:[31,2,1,""],test_match_set_iattr:[31,2,1,""],test_match_set_iattr_crash:[31,2,1,""],test_match_set_iattr_pre:[31,2,1,""]},"waldisk.WALDisk":{LOG_BID_HEADER_BLOCK:[33,3,1,""],LOG_DEV_HEADER_BLOCK:[33,3,1,""],LOG_HEADER_BLOCK:[33,3,1,""],LOG_MAX_ENTRIES:[33,3,1,""],PER_BLOCK:[33,3,1,""],begin_tx:[33,2,1,""],commit_tx:[33,2,1,""],crash:[33,2,1,""],flush:[33,2,1,""],read:[33,2,1,""],write:[33,2,1,""],write_tx:[33,2,1,""],writev:[33,2,1,""]},"xv6inode.IndirectInodeDisk":{NINDIRECT:[34,3,1,""],crash:[34,2,1,""],write:[34,2,1,""]},"xv6inode.InodeDisk":{DATADISK:[34,3,1,""],FREEDISK:[34,3,1,""],INODEDATADISK:[34,3,1,""],INODEMETADISK:[34,3,1,""],NDIRECT:[34,3,1,""],crash:[34,2,1,""],mkfs:[34,2,1,""],write:[34,2,1,""]},"yggdrasil.diskspec":{Allocator32:[37,1,1,""],Allocator64:[37,1,1,""],AsyncDisk:[37,1,1,""],BitmapSpec:[37,1,1,""],InodePackSpec:[37,1,1,""],InodeSpec:[37,1,1,""],Machine:[37,1,1,""],MultiTxnDisk:[37,1,1,""],RangeVirtualTxnDisk:[37,1,1,""],Stat:[37,1,1,""],SyncDisk:[37,1,1,""],TxnDisk:[37,1,1,""],VirtualAsyncDisk:[37,1,1,""]},"yggdrasil.diskspec.Allocator32":{alloc:[37,2,1,""]},"yggdrasil.diskspec.Allocator64":{alloc:[37,2,1,""]},"yggdrasil.diskspec.AsyncDisk":{crash:[37,2,1,""],domain:[37,2,1,""],flush:[37,2,1,""],read:[37,2,1,""],write:[37,2,1,""]},"yggdrasil.diskspec.BitmapSpec":{crash:[37,2,1,""],is_set:[37,2,1,""],set_bit:[37,2,1,""],unset_bit:[37,2,1,""]},"yggdrasil.diskspec.InodePackSpec":{crash:[37,2,1,""],get_iattr:[37,2,1,""],get_mapping:[37,2,1,""],read:[37,2,1,""],set_iattr:[37,2,1,""],set_mapping:[37,2,1,""]},"yggdrasil.diskspec.InodeSpec":{ATTRS:[37,3,1,""],DATA:[37,3,1,""],MAPPED:[37,3,1,""],bmap:[37,2,1,""],bunmap:[37,2,1,""],get_iattr:[37,2,1,""],is_mapped:[37,2,1,""],mappingi:[37,2,1,""],read:[37,2,1,""],set_iattr:[37,2,1,""],write:[37,2,1,""]},"yggdrasil.diskspec.Machine":{add_control:[37,2,1,""],assumption:[37,3,1,""],control:[37,3,1,""],create_on:[37,2,1,""],create_synced:[37,2,1,""],explain:[37,2,1,""],on:[37,3,1,""]},"yggdrasil.diskspec.MultiTxnDisk":{begin_tx:[37,2,1,""],commit_tx:[37,2,1,""],crash:[37,2,1,""],domain:[37,2,1,""],range:[37,2,1,""],read:[37,2,1,""],write_tx:[37,2,1,""],writev:[37,2,1,""]},"yggdrasil.diskspec.RangeVirtualTxnDisk":{DATA:[37,3,1,""],MAPPED:[37,3,1,""],bmap:[37,2,1,""],bunmap:[37,2,1,""],crash:[37,2,1,""],is_mapped:[37,2,1,""],readm:[37,2,1,""],writem:[37,2,1,""]},"yggdrasil.diskspec.Stat":{bsize:[37,3,1,""],fsize:[37,3,1,""]},"yggdrasil.diskspec.SyncDisk":{crash:[37,2,1,""],flush:[37,2,1,""],read:[37,2,1,""],write:[37,2,1,""]},"yggdrasil.diskspec.TxnDisk":{begin_tx:[37,2,1,""],commit_tx:[37,2,1,""],crash:[37,2,1,""],domain:[37,2,1,""],read:[37,2,1,""],write_tx:[37,2,1,""],writev:[37,2,1,""]},"yggdrasil.diskspec.VirtualAsyncDisk":{bmap:[37,2,1,""],bunmap:[37,2,1,""],crash:[37,2,1,""],is_mapped:[37,2,1,""],read:[37,2,1,""]},"yggdrasil.server":{Server:[37,1,1,""]},"yggdrasil.server.Server":{add:[37,2,1,""],check:[37,2,1,""],handle_cmd:[37,2,1,""],model:[37,2,1,""],model_evaluate:[37,2,1,""],pop:[37,2,1,""],push:[37,2,1,""],run:[37,2,1,""],set:[37,2,1,""]},"yggdrasil.solver":{ModelProxy:[37,1,1,""],Solver:[37,1,1,""],to_smt2:[37,4,1,""]},"yggdrasil.solver.ModelProxy":{eval:[37,2,1,""],evaluate:[37,2,1,""]},"yggdrasil.solver.Solver":{add:[37,2,1,""],check:[37,2,1,""],model:[37,2,1,""],pop:[37,2,1,""],push:[37,2,1,""],set:[37,2,1,""]},"yggdrasil.solver_utils":{read:[37,4,1,""],read_cmd:[37,4,1,""],write_cmd:[37,4,1,""]},"yggdrasil.test":{DiskTest:[37,1,1,""],RefinementMeta:[37,1,1,""],RefinementTest:[37,1,1,""],fork_bool:[37,4,1,""],main:[37,4,1,""],z3_option:[37,4,1,""]},"yggdrasil.test.DiskTest":{enable_symbolic_execution:[37,2,1,""],pprove:[37,2,1,""],prove:[37,2,1,""],psolve:[37,2,1,""],run:[37,2,1,""],setUp:[37,2,1,""],show:[37,2,1,""],solve:[37,2,1,""]},"yggdrasil.test.RefinementTest":{DEBUG:[37,3,1,""],assumption:[37,2,1,""],post:[37,2,1,""],pre:[37,2,1,""],pre_post:[37,2,1,""],setUp:[37,2,1,""]},"yggdrasil.ufarray":{Block:[37,1,1,""],ConstBlock:[37,4,1,""],ConstDiskArray:[37,4,1,""],ConstString:[37,4,1,""],DiskArray:[37,1,1,""],EmptyString:[37,4,1,""],FreshBlock:[37,4,1,""],FreshDiskArray:[37,4,1,""],FreshSize:[37,4,1,""],FreshString:[37,4,1,""],FreshUFunction:[37,4,1,""],String:[37,1,1,""],UFunction:[37,1,1,""],tup_eq:[37,4,1,""]},"yggdrasil.ufarray.Block":{get:[37,2,1,""],getrange:[37,2,1,""],ite:[37,2,1,""],set:[37,2,1,""],setrange:[37,2,1,""],size:[37,3,1,""]},"yggdrasil.ufarray.DiskArray":{domain:[37,2,1,""],ite:[37,2,1,""],update:[37,2,1,""]},"yggdrasil.ufarray.String":{ite:[37,2,1,""],size:[37,2,1,""]},"yggdrasil.ufarray.UFunction":{update:[37,2,1,""]},"yggdrasil.util":{BitwiseBitField:[37,4,1,""],Extend:[37,4,1,""],FreshBitVec:[37,4,1,""],FreshBool:[37,4,1,""],If:[37,4,1,""],UMax:[37,4,1,""],UMin:[37,4,1,""],bbf:[37,4,1,""],block_extend:[37,4,1,""],fresh_name:[37,4,1,""],nop:[37,4,1,""],pack_list:[37,4,1,""],solve:[37,4,1,""],unpack_list:[37,4,1,""]},bitmap:{BitmapDisk:[1,1,1,""]},dirinode:{DirImpl:[2,1,1,""],Orphans:[2,1,1,""]},dirspec:{Attributes:[3,1,1,""],DirLook:[3,1,1,""],DirSpec:[3,1,1,""],FreshAttributes:[3,4,1,""],FreshIno:[3,4,1,""],FreshName:[3,4,1,""]},disk:{Allocator32:[4,4,1,""],Allocator64:[4,4,1,""],And:[4,4,1,""],AsyncDisk:[4,4,1,""],AsyncDiskWrap:[4,4,1,""],BitVecVal:[4,4,1,""],Concat32:[4,4,1,""],ConstBlock:[4,4,1,""],Dict:[4,4,1,""],Extend:[4,4,1,""],Extract:[4,4,1,""],If:[4,4,1,""],LShR:[4,4,1,""],Not:[4,4,1,""],Or:[4,4,1,""],Stat:[4,4,1,""],UDiv:[4,4,1,""],UGE:[4,4,1,""],UGT:[4,4,1,""],ULE:[4,4,1,""],ULT:[4,4,1,""],UMax:[4,4,1,""],URem:[4,4,1,""],USub:[4,4,1,""],ZConcat32:[4,4,1,""],assertion:[4,4,1,""],debug:[4,4,1,""]},diskimpl:{Allocator:[5,1,1,""],And:[5,4,1,""],AsyncDisk:[5,1,1,""],BitVecVal:[5,4,1,""],Block:[5,1,1,""],Concat32:[5,4,1,""],ConstBlock:[5,4,1,""],DentryLookup:[5,1,1,""],Dict:[5,1,1,""],Extend:[5,4,1,""],Extract:[5,4,1,""],If:[5,4,1,""],LShR:[5,4,1,""],Not:[5,4,1,""],Or:[5,4,1,""],PartitionAsyncDisk:[5,1,1,""],Stat:[5,1,1,""],UDiv:[5,4,1,""],UGE:[5,4,1,""],UGT:[5,4,1,""],ULE:[5,4,1,""],ULT:[5,4,1,""],URem:[5,4,1,""],USub:[5,4,1,""],assertion:[5,4,1,""]},inodepack:{InodePackDisk:[7,1,1,""]},kvimpl:{KVImpl:[8,1,1,""]},kvspec:{FreshKey:[9,4,1,""],KVSpec:[9,1,1,""]},lfs:{LFS:[10,1,1,""],create_lfs:[10,4,1,""],mkfs:[10,4,1,""]},logspec:{LogSpec:[13,1,1,""],LogSpecEntry:[13,1,1,""]},partition:{Partition:[15,1,1,""]},symbolicmap:{SymbolicMap:[16,1,1,""]},test_bitmap:{TestBitmapDisk:[17,1,1,""]},test_cp:{CPImpl:[18,1,1,""],CPRefinement:[18,1,1,""],CPSpec:[18,1,1,""]},test_dirspec:{DirRefinement:[19,1,1,""],DirRefinementTest:[19,1,1,""]},test_diskspec:{AsyncDiskTest:[20,1,1,""],FlushingDisk:[20,1,1,""],InodeSpecTest:[20,1,1,""],SyncDiskTest:[20,1,1,""],VirtualAsyncDiskTest:[20,1,1,""]},test_inodepack:{FreshAttr:[24,4,1,""],InodePackDiskRefinement:[24,1,1,""]},test_kv:{KVTest:[25,1,1,""]},test_lfs:{LFSRefinement:[26,1,1,""],LFSSpec:[26,1,1,""]},test_partition:{PartitionRefinement:[27,1,1,""]},test_ufarray:{ArrayTest:[29,1,1,""],StoreIn:[29,4,1,""],UpdateIn:[29,4,1,""]},test_waldisk:{WALDiskTestRefinement:[30,1,1,""]},test_xv6inode:{FreshAttr:[31,4,1,""],IndirectInodeDiskRefinement:[31,1,1,""],InodeDiskRefinement:[31,1,1,""],attr_eq:[31,4,1,""]},waldisk:{WALDisk:[33,1,1,""]},xv6inode:{IndirectInodeDisk:[34,1,1,""],InodeDisk:[34,1,1,""]},yav_dirimpl_fuse:{main:[35,4,1,""]},yav_xv6_main:{profile:[36,4,1,""],run:[36,4,1,""]},yggdrasil:{diskspec:[37,0,0,"-"],server:[37,0,0,"-"],solver:[37,0,0,"-"],solver_utils:[37,0,0,"-"],test:[37,0,0,"-"],ufarray:[37,0,0,"-"],util:[37,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"4096l":[],"case":37,"char":11,"class":[1,2,3,5,7,8,9,10,13,15,16,17,18,19,20,24,25,26,27,29,30,31,33,34,37],"function":[3,5,11,12,17,19,20,24,26,27,30,31,32],"int":[3,5,11],"new":[],"return":[3,5,10,37],"true":[3,10,37],"var":4,"void":11,And:[4,5],For:11,LFS:[10,12],Not:[4,5,11],The:[11,32],UGE:[4,5],ULE:[4,5],_asdict:[],_balloc:10,_commit:10,_create_bid:31,_end:37,_gen_iov:30,_get_map:10,_ialloc:10,_readfn:37,_replac:[],_set_map:10,_start:37,action:10,actual:12,add:[10,37],add_control:37,address:10,after:37,alia:[],all:37,alloc:[5,37],allocator32:[4,37],allocator64:[4,37],ani:37,api:11,append:[2,13],applic:11,arg1:[3,5],arg2:[3,5],arg:[4,10,17,18,19,20,24,25,26,27,29,30,31,37],argc:11,argv:11,arr:29,arraytest:29,asid:37,assert:[4,5],assumpt:37,ast:[6,14],asyncdisk:[4,5,37],asyncdisktest:20,asyncdiskwrap:4,attr:[2,3,7,37],attr_eq:31,attribut:[3,10],barrier:37,barrier_:37,base:[1,2,3,5,7,8,9,10,13,15,16,17,18,19,20,24,25,26,27,29,30,31,33,34,37],bbf:37,befor:[20,25,29,37],begin_tx:[33,37],bid:[10,15,20,29,33,37],bit:[1,37],bitmap:[6,14],bitmapdisk:1,bitmapspec:37,bitvec:37,bitvecv:[4,5],bitwisebitfield:37,blk:[10,37],blknum:5,block:[3,5,7,10,15,37],block_extend:37,blocknum:[2,3],bmap:[31,37],bool:[3,5,10],bsize:[3,5,37],bsizefn:3,bunmap:[31,37],cach:37,call_mknod:19,call_rmdir:19,call_unlink:19,call_writ:27,call_write_tx:30,call_write_tx_nocommit:30,cdef:11,chapter:37,check:[10,37],claim:37,clear:2,clear_dentri:[],cmain:11,come:11,command:37,commit_tx:[33,37],common:37,complet:37,comput:37,computer_sci:37,concat32:[4,5],concept:37,cond:[4,5,37],constblock:[4,5,37],constdiskarrai:37,conststr:37,contain:10,content:[6,14],control:37,copi:5,correspond:[10,11],count:37,cpimpl:18,cprefin:18,cpspec:18,crash:[1,2,3,7,8,9,10,13,15,20,26,27,33,34,37],crash_impl:27,crash_spec:27,create_impl:[17,18,19,20,24,26,27,30,31],create_lf:10,create_on:37,create_spec:[17,18,19,20,24,26,27,30,31],create_sync:37,data:[13,20,33,34,37],datadisk:[34,37],datafn:[3,13],debug:[4,37],delet:8,dentrylookup:5,describ:10,descript:[3,5],detail:11,dev:[33,37],dict:[4,5],dir_find_empti:10,dir_lookup:10,directori:10,direxist:3,dirfn:[3,26],dirimpl:2,dirinod:[6,14],dirlook:3,dirlookup:[],dirrefin:19,dirrefinementtest:19,dirspec:[6,14],disk:[6,8,10,14,15,20,37],diskarrai:37,diskimpl:[6,14],diskspec:14,disktest:[20,25,29,37],dname:18,domain:37,doxygen:[],dparent:18,dresult:[5,16],empti:10,emptystr:37,enable_symbolic_execut:37,end:[15,37],entranc:12,equival:[17,19,20,24,27,30],equivalence_dur:30,equivalence_volatil:30,eval:37,evalu:37,everyth:10,exampl:11,exercis:[20,25,29,37],exist:10,explain:37,extend:[3,4,5,37],extract:[4,5],fals:[10,37],field:29,figur:10,file:[10,11],fine:10,fixtur:[20,25,29,37],flush:[5,15,20,33,37],flushingdisk:20,fn_data:9,fn_size:9,fname:[17,19,20,24,26,27,30,31],fnarg:31,forc:[33,37],forget:[2,3,19],fork_bool:37,free:10,freedisk:34,fresh_nam:37,freshattr:[24,31],freshattribut:3,freshbitvec:37,freshblock:37,freshbool:37,freshdiskarrai:37,freshino:3,freshkei:9,freshnam:3,freshsiz:37,freshstr:37,freshufunct:37,from:[10,11],fsize:[2,3,5,37],fsizefn:3,fsync:2,full:37,fuse:11,fuse_file_info:11,fuse_ino_t:11,fuse_lowlevel_op:11,fuse_req_t:11,gc1:[2,19],gc2:[2,19],gc3:[2,19],get:[5,8,9,10,16,37],get_attr:[10,11,26],get_iattr:[2,3,7,37],get_map:[7,37],getattr:11,getrang:37,github:[],given:10,gkei:[5,16],guard:[3,37],handl:11,handle_cmd:37,has_kei:[5,16],hashfn:8,here:11,hook:[20,25,29,37],html:[],http:37,hzy:37,i_off_data:10,i_off_mod:10,i_off_mtim:10,ialloc:[2,3],idisk:[],idx:2,ifreedisk:2,ifreefn:3,imap:10,impl:[17,19,20,24,26,27,30,31],impl_mach:37,implement:[11,12],index:[2,6],indirectinodedisk:34,indirectinodediskrefin:31,initi:10,ino:[2,3,7,10,11,26,37],inod:[3,10],inode_obj:11,inodedatadisk:34,inodedisk:34,inodediskrefin:31,inodemetadisk:34,inodepack:[6,14],inodepackdisk:7,inodepackdiskrefin:24,inodepackspec:37,inodespec:37,inodespectest:20,insid:11,interest:10,interfac:11,invok:11,iov:[33,37],is_dir:[2,3],is_fre:[],is_gcabl:2,is_ifre:[2,3],is_map:37,is_regular:[2,3],is_set:[1,37],is_valid:[2,3],issu:37,ite:37,its:10,just:12,kei:[8,9,11,37],kernel:11,key_siz:8,keyword:37,kvimpl:[6,14],kvspec:[6,14],kvtest:25,kwarg:[4,17,18,19,20,24,25,26,27,29,30,31,37],kwd:[],lambda:30,lba:37,lbn:[34,37],level:11,lfs:[6,11,14],lfs_fuse:[6,12,14],lfs_fuse_main:[6,14],lfsrefin:26,lfsspec:26,libfus:[],librari:11,line:[3,5],link:12,ll_getattr:11,ll_lookup:11,ll_mknod:11,ll_readdir:11,locate_dentri:3,locate_dentry_ino:3,locate_empty_dentry_slot_err_ino:[],locate_empty_dentry_slot_ino:[],locate_empty_slot:3,locate_empty_slot_ino:3,log_bid_header_block:33,log_dev_header_block:33,log_header_block:33,log_max_entri:33,logarrai:30,logdisk:[],logspec:[6,14],logspecentri:13,look:10,lookup:[3,10,11,26],low:11,lshr:[4,5],mach:[1,2,3,7,8,9,10,13,15,17,18,19,20,24,26,27,30,31,33,34,37],machin:37,main:[11,12,32,35,37],make:32,map:37,mappingi:37,match_bmap:31,match_bunmap:31,match_forget:19,match_mknod:[19,26],match_renam:19,match_rmdir:19,match_set_bit:17,match_set_iattr:[24,31],match_set_map:24,match_unlink:19,match_unset_bit:17,match_writ:[20,27],match_write_tx:30,match_write_tx_nocommit:30,match_writev:30,memori:[10,37],memory_barri:37,mention:12,metadisk:37,method:[11,20,25,29,37],mkf:[10,34],mknod:[3,10,11,19,26],mkstat:11,mode:[3,5,7,10,26,37],modefn:[3,26],model:37,model_evalu:37,model_str:37,modelproxi:37,modifi:10,modul:[6,14],more:11,msg:[4,5],mtime:[3,5,7,10,26,37],mtimefn:[3,26],multitxndisk:37,name:[3,10,26,37],nblock:2,ndirect:34,next:10,nextfn:13,nindirect:34,nlink:[3,5,7,37],nlinkfn:3,nname:3,none:[4,10,20,30,37],nop:37,nop_gc1:19,nop_gc2:19,nop_gc3:19,nparent:3,number:10,object:[1,2,3,5,7,8,9,10,13,15,16,18,26,33,34,37],off:[2,3,7,29,37],off_value_data:8,off_value_s:8,onam:3,opar:3,ops:11,order:37,ordereddict:[],org:37,orph_index:2,orphan:2,orphandisk:2,ostep:37,osync:[],other:[12,37],our:11,pack_list:37,packag:[6,14],page:6,paper:[10,11,12],paramet:[3,5,10],parent:[3,10,26],parentfn:26,part:11,partit:[6,14],partitionasyncdisk:5,partitionrefin:27,per_block:33,perform:10,pop:37,post:37,pprove:37,pre:37,pre_post:[26,31,37],prefix:[9,37],profil:36,prove:37,psolv:37,ptr:[7,37],push:37,put:[8,9],pyx:[11,12],rang:37,rangevirtualtxndisk:37,reach:37,read:[2,3,5,7,10,15,20,33,37],read_cmd:37,readdir:11,readm:37,receiv:11,refinementmeta:37,refinementtest:[17,18,19,20,24,26,27,30,31,37],regesit:11,relat:10,renam:[3,19],replac:[],req:11,request:11,reset:2,result:37,rewrit:[6,14],rmdir:[3,19],root:10,run:[36,37],sb_off_balloc:10,sb_off_ialloc:10,sb_off_imap:10,scienc:37,search:6,section:[10,12],see:11,self:[],sent:11,seri:10,server:14,set:[10,20,25,29,37],set_bit:[1,17,37],set_bsiz:3,set_fsiz:3,set_iattr:[2,7,24,31,37],set_map:[7,24,37],set_mod:3,set_mtim:3,set_nlink:3,setrang:37,setup:[20,25,29,37],should:10,show:37,simpli:10,size:[2,3,5,7,13,37],sizefn:13,sname:18,solv:37,solver:14,solver_util:14,sourc:[3,4,8,9,10,13,15,16,17,18,19,20,24,25,26,27,29,30,31,37],sparent:18,spec:[17,19,20,24,26,27,30,31],spec_mach:37,specifi:[],start:[15,37],stat:[4,5,11,37],state:10,stbuf:11,storein:29,str:[3,5],stream:37,string:37,struct_stat:11,structfuse__lowlevel__op:[],submodul:14,summari:[3,5],superblock:10,symbolicmap:[6,14],sync:37,syncdisk:37,syncdisktest:20,system:[11,12],tail:13,term:37,test:[14,17,18,19,20,24,25,26,27,29,30,31],test_array_upd:29,test_atom:30,test_bitmap:[6,14],test_block_upd:29,test_bmap:[20,31],test_bunmap:[20,31],test_compare_to_async:20,test_cp:[6,14],test_dirspec:[6,14],test_diskspec:[6,14],test_flush:20,test_flushingdisk_is_sync:20,test_fsck:[6,14],test_fsck_run:[6,14],test_idempotent_recoveri:30,test_inod:[6,14],test_inodepack:[6,14],test_kv:[6,14],test_kvimpl:25,test_kvspec:25,test_lf:[6,14],test_match_bmap:31,test_match_bmap_crash:31,test_match_bmap_pr:31,test_match_bunmap:31,test_match_bunmap_crash:31,test_match_bunmap_pr:31,test_match_forget:19,test_match_forget_crash:19,test_match_forget_pr:19,test_match_mknod:[19,26],test_match_mknod_crash:[19,26],test_match_mknod_pr:[19,26],test_match_renam:19,test_match_rename_crash:19,test_match_rename_pr:19,test_match_rmdir:19,test_match_rmdir_crash:19,test_match_rmdir_pr:19,test_match_set_bit:17,test_match_set_bit_crash:17,test_match_set_bit_pr:17,test_match_set_iattr:[24,31],test_match_set_iattr_crash:[24,31],test_match_set_iattr_pr:[24,31],test_match_set_map:24,test_match_set_mapping_crash:24,test_match_set_mapping_pr:24,test_match_unlink:19,test_match_unlink_crash:19,test_match_unlink_pr:19,test_match_unset_bit:17,test_match_unset_bit_crash:17,test_match_unset_bit_pr:17,test_match_writ:[19,20,27],test_match_write_crash:[20,27],test_match_write_pr:[20,27],test_match_write_tx:30,test_match_write_tx_crash:30,test_match_write_tx_nocommit:30,test_match_write_tx_nocommit_pr:30,test_match_write_tx_pr:30,test_match_writev:30,test_match_writev_crash:30,test_match_writev_pr:30,test_nocrash:20,test_nop_nop_gc1:19,test_nop_nop_gc2:19,test_nop_nop_gc3:19,test_partit:[6,14],test_prefix:20,test_reord:20,test_syncdisk_is_async:20,test_tenaciousd:[6,14],test_ufarrai:[6,14],test_waldisk:[6,14],test_write_two:20,test_xv6inod:[6,14],testbitmapdisk:17,testcas:37,time:10,to_smt2:37,to_stat:3,truncat:[2,3],tup_eq:37,tupl:[],txndisk:37,type:[3,5,37],udiv:[4,5],ufarrai:14,ufunct:37,ugt:[4,5],uint64_t:[],ult:[4,5],umax:[4,37],umin:37,under:10,unittest:37,unlink:[3,19],unpack_list:37,unset_bit:[1,17,37],updat:37,updatein:29,urem:[4,5],used:11,user:11,usub:[4,5],util:14,val:[5,37],valid:15,valu:[2,3,5,8,9],value_size_limit:8,vbn:37,veri:37,verifi:[6,14],virtualasyncdisk:37,virtualasyncdisktest:20,wai:37,waldisk:[6,14],waldisktestrefin:30,when:[10,37],whether:10,which:[10,11,12],wiki:37,wikipedia:37,word:[12,37],work:10,wrapper:12,write:[2,3,5,10,15,20,27,33,34,37],write_cmd:37,write_dentri:[],write_tx:[30,33,37],write_tx_nocommit:30,writem:37,writev:[30,33,37],xv6inod:[6,14],yav_dirimpl_fus:[6,14],yav_xv6_main:[6,14],yggdrasil:[17,18,19,20,24,25,26,27,29,30,31],z3_option:37,zconcat32:4},titles:["ast-rewrite module","bitmap module","dirinode module","dirspec module","disk module","diskimpl module","Welcome to yggdrasil\u2019s documentation!","inodepack module","kvimpl module","kvspec module","lfs module","lfs_fuse module","lfs_fuse_main module","logspec module","yggdrasil","partition module","symbolicmap module","test_bitmap module","test_cp module","test_dirspec module","test_diskspec module","test_fsck module","test_fsck_run module","test_inode module","test_inodepack module","test_kv module","test_lfs module","test_partition module","test_tenaciousd module","test_ufarray module","test_waldisk module","test_xv6inode module","verify.py","waldisk module","xv6inode module","yav_dirimpl_fuse.py","yav_xv6_main module","yggdrasil package"],titleterms:{ast:0,bitmap:1,content:37,dirinod:2,dirspec:3,disk:4,diskimpl:5,diskspec:37,document:6,indic:6,inodepack:7,kvimpl:8,kvspec:9,lfs:10,lfs_fuse:11,lfs_fuse_main:12,logspec:13,modul:[0,1,2,3,4,5,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,33,34,36,37],packag:37,partit:15,rewrit:0,server:37,solver:37,solver_util:37,submodul:37,symbolicmap:16,tabl:6,test:37,test_bitmap:17,test_cp:18,test_dirspec:19,test_diskspec:20,test_fsck:21,test_fsck_run:22,test_inod:23,test_inodepack:24,test_kv:25,test_lf:26,test_partit:27,test_tenaciousd:28,test_ufarrai:29,test_waldisk:30,test_xv6inod:31,ufarrai:37,util:37,verifi:32,waldisk:33,welcom:6,xv6inod:34,yav_dirimpl_fus:35,yav_xv6_main:36,yggdrasil:[6,14,37]}})