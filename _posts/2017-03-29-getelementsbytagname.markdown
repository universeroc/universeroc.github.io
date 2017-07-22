---
title: getElementsByTagName
date: 2017-03-29T17:22:01+08:00
layout: post
---

近期转战前端，开始用 javascript 作为主力语言。好在代码都在 Chrome 浏览器运行不必折腾跨浏览器的各种问题。不过今天还是被一个代码折腾得无语了……

就是这个 getElementsByTagName !

代码大概逻辑是在一个页面遍历 div，找到目标 div 后，重新创建一个 div，并且删除目标 div，代码巨简单，但是却会把浏览器卡死，一直运行不完。无语写了一个简单的例子测了一把，还真发现了确实这个 API 调用后有这个问题，代码如下：

```
  var divs=document.getElementsByTagName('div');
  alert(divs.length + ' 11111111111111111111111');
  for (var i = 0; i < divs.length; ++i) {
    var s = document.createElement('div');
    s.innerText= (+new Date());
    var p = divs[i].parentNode;
    if (p) {
      p.insertBefore(s, divs[i]);
      alert(divs.length + ' 00000000000000000000000000000');
    }
  }
```

注意里面必须用 alert 卡住，如果你改为 console.log， 那么你就等着卡死吧，没有 log 输出，更无法打开 devtools 窗口。


根据运行结果来看，每次 length 都会变化，变成了一个死循环无法跳出。

改为 querySelectorAll 之后，一切安好。跟同事沟通了一下这个事情，将 i < divs.length 改了下
```
var l = divs.length; for (var i = 0; i < l; ++i) {}
```

这样也可以规避掉这个死循环，希望同样遇到这样的问题的同学可以通过我的这次经历规避掉这个问题。
