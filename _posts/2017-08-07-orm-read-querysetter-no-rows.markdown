---
title: Orm-Read-QuerySetter-No-Rows
date: 2017-08-07T17:14:05+08:00
layout: post
---
New feature has been using ORM instead of Redis, json marshal && unmarshal. But there's little problem when I wrote a model like this

```
type A struct {
  Id int64 `orm:"auto"`
  UId int64
  FId int64
  Time time.Time
}

func GetA(uid, fid int64) *A {
  o := orm.NewOrm()
  a := A{
    UId: uid,
    FId: fid,
  }
  if err := o.Read(&a); err == nil {
    return &a
  }
  return nil
}
```

GetA return nil all the time, I've been tested using model User like this

```
type User struct {
  Id int64 `orm:"auto"`
  Time time.Time
}

func GetUser(uid, fid int64) *User {
  o := orm.NewOrm()
  u := User{
    Id: uid,
  }
  if err := o.Read(&u); err == nil {
    return &u
  }
  return nil
}
```

And GetUser works well. Before I wonder whether need to use another way to make it work, I googled this problem, and found the answer is that:

```
When you use orm's Read, you need provide the primary key field or it will not return the result you want.
```

So GetUser works as Id is primary key and argument is the value passed to it, but GetA don't as Id the primary key field not set.
