.. _lfs-fuse.rst:

lfs\_fuse module
================

.. automodule:: lfs_fuse
    :members:
    :undoc-members:
    :show-inheritance:

The main function in ``lfs_fuse.pyx`` is

.. py:function:: cdef int cmain(int argc, char **argv)

    The key part is ``cdef fuse_lowlevel_ops ops``. `fuse_lowlevel_ops <https://libfuse.github.io/doxygen/structfuse__lowlevel__ops.html>`_
    is part of the FUSE library, that will be used to handle the request from the kernel and invoke the
    corresponding methods in the FUSE file system implementation. More details see `To FUSE or Not to FUSE paper <https://www.usenix.org/system/files/conference/fast17/fast17-vangoor.pdf>`_.

    Here, we regesiter our FUSE file system implementation with the low-level API interface:

    .. code-block:: python

            ops.getattr = &ll_getattr
            ops.lookup = &ll_lookup
            ops.readdir = &ll_readdir
            ops.mknod = &ll_mknod

    For example, if FUSE library receives the ``getattr`` request from the kernel, which sent by the user application,
    corresponding :ref:`ll_getattr <lfs_fuse-ll-getattr>` method will be invoked.

.. _lfs_fuse-ll-getattr:
.. py:function:: cdef void ll_getattr(fuse_req_t req, fuse_ino_t ino, fuse_file_info *fi)

    :ref:`mkstat <lfs_fuse-mkstat>` is invoked.

.. _lfs_fuse-mkstat:
.. py:function:: cdef int mkstat(fuse_ino_t ino, struct_stat *stbuf)

    Inside ``stat = inode_obj.get_attr(ino)``, :meth:`lfs.LFS.get_attr` is invoked, which comes from
    ``lfs.py``.