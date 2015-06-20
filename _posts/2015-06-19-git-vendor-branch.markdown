---
layout: post
title: git vendor branch
date: 2015-06-19T11:52:33+08:00
thumb: http://git-scm.com/images/logo@2x.png
category: git
tags: git vendor branch cherry-pick
---
**git is the most important tool as English to software developers.**

**[github](http://github.com)** help us to get familiar with git.

When your development dependents on third_party project, you need [vendor branch](http://yupengzhang.com/2014/05/29/svn-vendor-branch.html) management.

Here I don't talk about vendor branch too much but how to make branch *clean and clear*.

git support *git-merge* and *git-rebase* to "merge" branch.

As document describes git-merge will make a new extra commit also that commit has two parent. It looks:

      4
    / |
    2 2
    | |
    1 3
    \ |
     \0

git-merge makes the branch complicated.

How to make the branch clear and also updated with vendor branch?

I have tried many ways to make it but failed always until I figured something when I used gclient sync:

    git pull --rebase [vendor-branch]

then:

      2
      |
    2 1
    | |
    1 3
    \ |
     \0

**Amazing!**

And then my workmate found another way to make it:

    git cherry-pick [vendor-branch-new-commit]

It's easier and simpler way than

    git pull --rebase [vendor-branch]

Hope this essay help you avoid extra work.
