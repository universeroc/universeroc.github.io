---
title: How to delete files with too long name or deep path on Windows
date: 2018-11-14T18:05:16+08:00
layout: post
---

I find a strange directory nodejs-xxx-npm-latest that I can't delete it even use 

```
rmdir
```

```
delete /s /q *.*
```

After I googled so pages, [force-delete-files-with-a-rather-large-name](https://superuser.com/questions/718223/force-delete-files-with-a-rather-large-name) give the solution

```
robocopy /MIR c:\empty c:\myannoyingfolder
```

Make sure c:\empty is an empty directory and c:\myannoyingfolder is your bad directory to delete