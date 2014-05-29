---
layout: post
title: "SVN Vendor Branch"
date: 2014-05-29T10:37:37+08:00
---

As a developer nowadays, "version control" is a tool software everybody everyday must be familiar.
DVCS become more and more popular, comparing to svn the most popular server-client version control software, they have a main advantages that you could work without network(server connection), for example, when you work at home, you could not use a intranet, all your work will not be commited, and also sometimes you will lose something you ever made several hours ago. Someone may suggust to use path to keep your job, it's not a bad idea if you stick with svn, but it's boring.

Ok, at all, I should not talk about too many vulnerabilities of svn. It's, however, still the most popular version control tool on Windows. It's easy to use TortoiseSVN and you could get so many materials to get help.

Rencently more and more open source projects are active, we are so lucky not to write code from zero.
If you start a project based on a third party project, this chapter will be helpful.

A is your local modified version, and B is your third party lib, when B updates you will need update your B too, as there may be bug-fix or optimized. How to?

Svn supports a feature named "vendor branch" which satisfy me.
[svn vendor branch](http://www.subversion.org.cn/svnbook/1.4/svn.advanced.vendorbr.html)

It's a little confusing, now I'd like to give a more clear concept.

<img src="/images/latex/svn-vendor-branch-how-to-use.png" alt="svn-vendor-branch-how-to-use" />

1. create a repository empty.
2. create a <b>current</b> directory in branches.
3. import(add) a specific vendor release version code to <b>current</b>(e.g. 1.0).
4. create that 1.0 based on <b>current</b>.
5. overwrite trunk code(empty first time) and commit.

Now you have three branches, trunk, current, release-version.(first time the three are the same)

Then you could develop on trunk. When vendor release another version, what you should do is:

1. apply to current branch.
2. save the <b>diff</b> between this version and last.
3. apply this <b>diff</b> to trunk.
4. fork 2.0 based on current.
5. resolve conflicts.
6. continue developing on trunk.

Next time vendor release a new version, repeat the six steps above. :)
May it help you.