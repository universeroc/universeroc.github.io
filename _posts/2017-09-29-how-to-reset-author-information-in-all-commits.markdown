---
title: How to reset author information in all commits
date: 2017-09-29T18:13:18+08:00
layout: post
---

On Windows


git filter-branch -f --env-filter " GIT_AUTHOR_NAME='your name' GIT_AUTHOR_EMAIL='yourname@xx.com' " HEAD
