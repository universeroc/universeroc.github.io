---
layout: post
title: VMPlayer-MAC-iOS-UIVisualEffectView
date: 2015-10-21T23:39:20+08:00
---

I have been practising to develop on iOS with Swift.

And several days ago I found a great class named UIVisualEffectView which could make a blur effect as notification bar. I like it very much.

I have been trying to code with UIVisualEffectView for about one hour and get the great effect on the simulator, but when I connect my iPhone and run on it then I could never get the same effect as on the simulator.

Where is the problem?

After I google and baidu for about half an hour, I get the key point.

First, my setting has been disabled blur effect, so everyting is opaque. This document helps me. [Get the transparent effect back on iPhone](http://jingyan.baidu.com/article/54b6b9c0d6f46d2d583b473b.html)

Yes, it works for me!

Then another problem occurs: my app could not run as they are not relable. And this helps me out. [untrusted developer on iOS9](http://jingyan.baidu.com/article/9f7e7ec0b907b46f29155478.html?st=2&os=0&bd_page_type=1&net_type=1)

After the two steps, I finally get the effect on my iPhone.

Hope this passage could save your time.
