---
title: How to solve host key verification failed gitlab runner running on windows as service
date: 2018-10-19T09:05:16+08:00
layout: post
---

To run gitlab runner on Windows as a service to use gitlab CI, the first important thing is to copy all your current user environment to your system user's environment to make all binaries available to call.

When need git to access repositories by ssh, you should make your id_rsa.pub available on your system user's .ssh directory.

I googled through all the websites but without any clue to solve this problem, but use [ProcessMonitor](https://download.sysinternals.com/files/ProcessMonitor.zip) to get the **systemprofile** 's path

```
C:\Windows\System32\config\systemprofile
```

systemprofile is the SYSTEM user's %userprofile%, so place all files in your .ssh directory into

```
C:\Windows\System32\config\systemprofile\.ssh
```

Then try to git clone all other commnands, enjoy it !
