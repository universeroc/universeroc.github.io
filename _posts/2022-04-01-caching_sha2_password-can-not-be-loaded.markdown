---
title: caching_sha2_password can not be loaded
date: 2022-04-01T16:10:54+08:00
---

用 docker 启动了 mysql 后,发现无法正常连接,想通过宿主机上登陆查看一下,结果一运行:

```bash
mysql -uroot -h 0.0.0.0 -p
```

就出现:

`Authentication plugin 'caching_sha2_password' cannot be loaded:`

查阅资料后发现是: 由于 docker 内的 mysql 版本和宿主机上版本不一致导致,经过 `mysql --version` 确认确实如此

使用

```bash
wget https://dev.mysql.com/get/mysql80-community-release-el7-5.noarch.rpm
rpm -ivh mysql80-community-release-el7-5.noarch.rpm
yum install mysql-community-server
```

后再次执行问题解决
