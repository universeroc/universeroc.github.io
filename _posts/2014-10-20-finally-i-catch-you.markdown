---
layout: post
title: "Finally I Catch You"
date: 2014-10-20T15:59:30+08:00
---

We could not connect web directly without proxy through dev-net on work. When I use git or gclient, mostly I recieved 505 from proxy after connect, and I had been in trouble with this problem for a long long time. As dev-net has a good speed to download big files, I have been trying to solve this probelm until now.

To my surprise, I could not use git clone or gclient to connect some urls successfully, but I could visit them through browser. So I configure git http.proxy with the batch file same as browser, but it fails all the same. How to? I use netstat to see how it works when I visit these urls through browser and I catch it! A new ip and port I never configured. Then I use it on global http.proxy to git/gclient. It works well without any 504 or other errors!