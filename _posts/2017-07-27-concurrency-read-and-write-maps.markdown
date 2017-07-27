---
title: concurrency read and write maps
date: 2017-07-27T15:31:28+08:00
layout: post
---
最近在开发的游戏项目用到了 websocket 技术进行信息推送，新入职的同事负责把这块的开发搞了起来。只是一直有各种诡异问题，导致 websocket 挂掉。

今天测试过程中又挂了，有点受不了了。昨晚上刚改进了一番，今天还是不行。我也看了下他代码。以及 log 内容。

和昨天报错的内容一样， concurrency read and write maps 已经用了 sync.RWMutex 做了保护了，咋还是会有这个问题呢？

分析 log 发现在 ws.ReadMessage() 后，遇到 err 并没有打印错误，加了一句打印后，发现了新问题： 连接会 abnormal closure unexpected EOF

前端开发配合研究了下规律发现大概 90s 就会发生错误。查了下 nginx 配置，发现了 connect timeout 设置了 90s 超过后直接断掉了。

并发问题仍旧没头绪，新同事这时发现了问题根结，原来是在打 log 过程中用到了 map 读取数据打印，而这部分并没有加锁保护！好吧

好的开发习惯和经验其实是比语言更重要的，即使是换了更高级的语言，如果细节和习惯不注意，仍旧会遇到常见的并发问题呀，死锁问题呀等等。

要想改进和改善，得从思维习惯和编码习惯入手。
