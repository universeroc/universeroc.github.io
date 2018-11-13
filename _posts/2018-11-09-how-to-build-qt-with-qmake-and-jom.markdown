---
title: How to build Qt with qmake and jom
date: 2018-10-09T09:05:16+08:00
layout: post
---

I use Visual Studio 2015 and Qt 5.6.2 x64 and use a build batch script:

```
call "C:\Program Files (x86)\Microsoft Visual Studio 14.0\VC\vcvarsall.bat"
qmake app.pro
jom
```

But got this error:

```
Qt5Widgetsd.lib(Qt5Widgetsd.dll) : fatal error LNK1112: module machine type 'x64' conflicts with target machine type 'X86'
```

After I've searched all through the internet even StackOverflow, there're no answers to this problem.

And I find build with **Qt VS Tools** it's OK. Why ?

Then I read the source code of 

```
mkspecs\win32-msvc2015\qmake.conf
mkspecs\common\msvc-desktop.conf
```

The very four lines of code is the core of the problem:

```
contains(QMAKE_TARGET.arch, x86_64) {
    DEFINES += WIN64
    QMAKE_COMPILER_DEFINES += _WIN64
}
```

In the Qt VS Tools, you can find the **_WIN64** macro in the vcproject configuration, but none in Makefile. It need this macro, so I give it, so everything is OK, right?!

Make the QMAKE_TARGET.arch in app.pro and give the value x86_64, but failed, the error also shown.

After several times of modification, this error looks no hint to disappear :(

Generally speaking, x64 application installs in "C:\Program Files" and x86 in "C:\Program Files (x86)", Visual Studio 2015 is in "C:\Program Files (x86)" so how to build x64 application?

So I read "C:\Program Files (x86)\Microsoft Visual Studio 14.0\VC\vcvarsall.bat" source code and find the command option to switch x86 to x86_64!

```
call "C:\Program Files (x86)\Microsoft Visual Studio 14.0\VC\vcvarsall.bat x86_amd64"
qmake app.pro
jom
```

It runs without any errors!