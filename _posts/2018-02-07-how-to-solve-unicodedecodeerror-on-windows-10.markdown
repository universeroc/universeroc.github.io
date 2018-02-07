---
title: How to solve UnicodeDecodeError on Windows 10
date: 2018-02-07T10:05:16+08:00
layout: post
---

```bash
UnicodeDecodeError: 'ascii' codec can't decode byte 0xb0 in position 1: ordinal not in range(128)
```

This error shows to me when I'm trying to build electron from source. These steps show you how to solve it:

1. Open cmd.exe
2. git clone https://github.com/electron/electron.git
3. cd electron && python script\bootscript.py -v

> Error occurs

4. Open powershell.exe
5. python script\bootscript.py -v

> Error occurs

6. open ubuntu in powershell
7. cd /mnt/d/electron
8. python script\bootscript.py -v

> OK

I find this post on [stackoverflow](https://stackoverflow.com/questions/21129020/how-to-fix-unicodedecodeerror-ascii-codec-cant-decode-byte). Its *tl;dr* reply shows the details and the reason why you come across with this error on Windows.

And this is settings on my Windows:

![cmd-console-gkb](../../../../assets/media/cmd-console-gbk.png)
![powershell-console-gkb](../../../../assets/media/powershell-console-gbk.png)
![ubuntu-console-utf-8](../../../../assets/media/ubuntu-console-utf-8.png)
