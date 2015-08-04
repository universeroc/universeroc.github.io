---
layout: post
title: git am PATCH failed
date: 2015-08-04T16:00:10+08:00
---
由于团队里面部分同事提交的代码导致代码升级的时候出现非常多的冲突，常见的问题就是文件的eof由LF变成了CRLF。终于忍不住要加入一项说明，大家的代码在 push 前一定要找我 review ，进而演化成代码只能我自己去 push ，他们只在本地 commit 然后用 git format-patch 生成补丁文件。 我用 git am 来打补丁，中间 review 代码，再 push 。

我自己简单测试过，用 git format-patch 生成 patch 然后再 git reset --hard HEAD~1 混滚代码，之后执行 git am < PATCH ，一切 OK 。但是在第一次收到同事发给我的 patch 去打的时候，却出现了 apply failed 错误。试了好几次发现还是有同样的问题。我尝试用 git apply 去打补丁，补丁可以打上去，但是 commit 信息丢失了，包括作者信息和提交日期。

重新上网找解决方案。 从[如何处理 git am PATCH 时的失败](http://blog.sina.com.cn/s/blog_5372b1a301015y0n.html)这里提供的方案成功地将这个问题搞定。

由于这个经历也是第一次采用这种，接受大家的 patch 我来 push 这种方式来提交代码。文中提到的解决方案不一定是最优的，希望有更好更方便的，或者是能找到导致 git am 失败的真正原因的方案，这样才好避免这样的失败再次发生。 直接 git am 就搞定了，岂不是皆大欢喜。
