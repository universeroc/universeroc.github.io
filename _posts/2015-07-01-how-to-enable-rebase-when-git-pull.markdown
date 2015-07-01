---
layout: post
title: How to enable rebase when git pull
date: 2015-07-01T15:21:03+08:00
---
I find that git pull will use default merge when you have new commits on local and remote has new commits too.

It will make your branch graph ugly. To avoid this, you could use git pull --rebase. But you know not everybody remember this rule and they will let the merge action go and push the bad commits to your server. How to setup the right rule to make git pull will do the same action as git pull --rebase ?

I have already found some configurations and setup them in .git/config:

    [branch]
      rebase = true

and do this command on git server:

    git config --global branch.autosetuprebase always

but there is no any config in .git/config in new cloned repo

I find the new solution here [nedn/dotfiles](https://github.com/nedn/dotfiles/commit/ab92f07d6de9686fce36fb82f0561318902c5b75)

he use a .gitconfig to setup the right settings

I think I have found the key to this issue. But after I test it, NO, it could not satisfy ever.

I google it again and find [git pull rebase by default](http://blog.aplikacja.info/2010/11/git-pull-rebase-by-default/)

OK, I figure out that **branch.autosetuprebase** only work on your local.
