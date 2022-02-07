---
title: How to fix yarn deprecated registry
date: 2022-02-07T16:29:10+08:00
---

The very problem traps me for about three days more or less, its original source is about two years ago I made a self-hosted private npm server using `verdaccio` and config the `npmjs.xxx.com` to install all npms.

It's a long time no installation on my PC, and some days ago I wanted to use Vue3 to do some experiments but `@vue/cli` shows some warnings to me, as what normal things to go I run the command:

```shell
yarn global add @vue/cli
```

but


```shell
yarn global v1.17.3
warning `yarn global ls` is deprecated. Please use `yarn global list`.
info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...
[###########################################################--------------------------------------------------------------------------------------------------------------------------------------------------------------------] 572/2150
```

I checked all config files to make sure `npmjs.xxx.com` is not configured in the config file even with `environment variable to set` no work :(

```shell
npm_config_registry="https://registry.npm.taobao.org" yarn global add @vue/cli
```

I think the `global` is the keyword to check

```shell
yarn help global
```

and the `--verbose` get my attention

```shell
yarn global add @vue/cli --verbose
```

The StdOut shows the verbose information and I checked all of them, but not work

When I remove all files of `~/.config/yarn/global` It works again!

but `~/.config/yarn/global/node_modules` to delete does not work.


