---
title: How to build Caffe with CUDA 9.0 on Windows 10
date: 2019-04-01T16:05:16+08:00
layout: post
---

* git clone https://github.com/BVLC/caffe.git
* cd caffe
* git checkout windows
* set WITH_NINJA=0 && scripts\build_win.cmd

---

* Unsupported gpu architecture 'compute_20'

    Makefile.config doesn't make effect on Windows, so all the solutions from web page is not work, until I find the keypoint in `cmake/Cuda.cmake` file, using the method to apply on this file make it works

* add this line below 133 row: string(REGEX REPLACE "-gencode;arch=compute_20,code=sm_20;-gencode;arch=compute_20,code=sm_21;" "" __nvcc_flags "${__nvcc_flags}")
* remove build directory
* set WITH_NINJA=0 && scripts\build_win.cmd

---

As I installed all patches (patch1, patch2, patch3, patch4) of CUDA 9.0 from Nvidia, I also encountered a compiler error from BOOST

    %userprofile%\.caffe\dependencies\libaries_v140_x64_py27_1.1.0\libraries\include\boost-1_61\boost\config\compiler\nvcc.hpp

From its comment you know this macro is for pre-CUDA 7.5 and CUDA 9.0 cound go without this macro, just comment three line code, then run it again

    ATTENTION your build environment is not the same as mine for example python version so the `libaries_v140_x64_py27_1.1.0` maybe a little different, just use your path output by `scripts\build_win.cmd`

---

After all these modification, you'll build it successfully!

Bottoms up!
