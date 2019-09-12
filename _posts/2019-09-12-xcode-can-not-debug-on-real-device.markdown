---
title: Xcode can not debug on real device
date: 2019-09-12T15:06:35+08:00
---

Cray me this problem over more than one month, even I gave a feedback to Apple and replied for several phone calls and emails. I'm still in the hole :(

Today right now, I solved it! It's a bug of XCode apparently. Let me describe the context.

```
There are no devices registered in your account on the developer website. Plug in and select a device to have Xcode register it.
```

The core reason of this problem on my device is that my device's name is set with `blanksapces` !

After I test my XCode with my workmates' iPhone, it's OK, so XCode is not the source and his iOS version is same with mine. What's the difference between mine and his ? I even wanna reset my iOS settings but I had made once it'll erase all Safari's tabs(sessions) and all settings WiFi's authentication, so it's the lastest and worst one choice to take. Take a noice of the Destination -> Device, the only difference of the two devices is the name, mine is `nothing`!

Give it a name `aaa` to reconnect it to my Macbook and try with the button, it works!

After email Apple with several maybe six or seven times and phone calls and write feedback to XCode without reply, I solve this problem by myself. I made it myself too :(