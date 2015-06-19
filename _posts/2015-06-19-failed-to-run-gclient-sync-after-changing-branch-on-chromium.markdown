---
layout: post
title: failed to run gclient sync after changing branch on chromium
date: 2015-06-19T09:54:53+08:00
---
Chromium as a modern, fast, safe, and stable web browser dominate almost PC.
Since 2011 I started working around with Chromium, it's been 4 years.

In the past, following the steps of [official document](http://dev.chromium.org/developers/how-tos/get-the-code) will lead you to the right place. But when I checkout 44.0.2403.46 then

    gclient sync --with_branch_heads --nohooks

I got this error message:

>Invalid user name and password
>
>https://chromium.googlesource.com
>
>Please go to.
>
>https://chromium.googlesource.com/new-password

I tried several times to make sure it's not the network or proxy problem. Then I got the same error message dedicated in depot_tools and I entered into depot_tools and executed git remote update but it promopt:

>username for https://chormium.googlesource.com:
>

I went to the [https://chromium.googlesource.com/new-password](https://chromium.googlesource.com/new-password) to get a new password and followed his instruction for Windows user but it also did not work :(

To check whether it executed successfully:

    git config --global cookiefile

Yes it's been added to global config in git-bash. But in git-bash I could not finish

    gclient sync --with_branch_heads --nohooks

I used window cmd to run:

    git config --global -l

and I did not see any http.cookiefile config key then I figured out that git in git-bash.vbs is not the same in git.exe!

    git config --global http.cookiefile .gitcookies

then check:

    git config --global http.cookiefile

Wow! no http.cookiefile also. Why!? I used a relative file path maybe the point. I changed the file path to absolute path and it worked.

    gclient sync --with_branch_heads --nohooks

Everything is OK!

Let's review it.

1.[https://chromium.googlesource.com/new-password](https://chromium.googlesource.com/new-password)

2.in git-bash.vbs: run the command

3.open cmd.exe and run

    git config --global http.cookiefile [.gitcookies(use absolute path)]

4.

    gclient sync --with_branch_heads --nohooks
