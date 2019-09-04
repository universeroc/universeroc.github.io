---
title: Unexpected token u in JSON at position 0
date: 2019-09-04T11:55:59+08:00
---

This error occurs when I use node.js to write some to get the response of an API with JSON format. It's OK when use the response as string but JSON.parse it occurs. The first thing I do is to check the content of raw content I find some Chinese chars and also Googled some articles saying like `\u` unicode chars may break the parse function. I checked all raw content string but not found any one. Then I check the stdout to see where it broken, and found after a Chinese series string block there is a `\n`, so I use `string.replace(/\n/g, raw)` to trim all `\n` to make it work. But I'm wrong, it also breaks!

I'm confused why it can not run!

This time I google `Unexpected token u in JSON at position 0` and get a result say: 

```

Unexpected token u in JSON at position 0 because of JSON.parse 's input parameter is undefined

```

It's a very important hint for me, then I check the raw type use typeof

```
console.log(typeof raw)
```

It output to console as what I want:

```
string
```

But it also fails and why? Then I focus on the raw declaration:

```
let raw
```

Yeah you know it's not given any kind of value, so that time you try to typeof it you'll get `undefined`. Maybe it's a bug? If you give it a empty string value to initialize it, is it OK?

```
let raw = ''
```

Great, that's it!

Even I check its type before use `JSON.parse` and get the string type but failed to use `JSON.parse`

```
console.log(typeof raw)
console.log(JSON.parse(raw))
```