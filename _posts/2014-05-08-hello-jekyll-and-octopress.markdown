---
layout: post
title: "Hello Jekyll and Octopress"
category: daily
tags: Jekyll Octopress
date: 2014-05-08T13:32:14+08:00
---

Since I saw alexdong.com I've been used to think how to build a blog website like it.
Simple, clear and I could write text blocks whenever I want.
Ever I've tried to build two blogs one named sirantech.com and the other cra13.com, and I wanted to make it a technology blog like
cnbeta, weiphone, etc with two or more friends who are also working in IT.
They were dead both finally.

After work without too much things to do I will remember the very blog.
Even I want to email alexdong to query some information about his blog but when I checked his repositories again recently I found there
is a repository named blog.

Yeah, that's it!

From it I know it's built based on Jekyll and Octopress that I knew it ever on some websites.
It reminded me that ever I tried to built one blog on github but gave up at the end. So, I tried it again.
I've learned and also went throught some difficulties even yesterday I was being trapped all day long.

Ruby gem bundle Jekyll Octopress and then rake then plenty of errors accourred in the console(I am working on Win7)
After I commit to github when I ran it successfully locally it gave me a text with "You have published your website at *****".
Then I checked it and only saw 404 page.

Checking the information on the github Settings-Github-Pages and got to know on github Ruby is 2.1.1.
I thought that was the point so I gave up. It costs me about half a day to build with a bad result.

Sometimes winner is a dreamer who never gives up!(from the bing dictionary I installed on my PC)

Yes!

In the morning today I said to myself "You must make it today, this is your target today".
Ok. Then I read the docs and guide-page again and again even the jekyll docs. Suddently I found that I even did not make the very Jekyll
clear what it is?
Steering clear of blog code cloned from alexdong and no Octopress, only the Jekyll.
Read it from the beginning to the end then I figured it out. I made something wrong.

{% highlight ruby %}
Octopress is an obsessively designed toolkit for writing and deploying Jekyll blogs.
{% endhighlight %}

I checked the code then put them into my repository then tried to deployed them to my github.
Stupid man!

I reinstalled Ruby and Jekyll. Using jekyll new |website_name| to make it all over.
So you can see what happened.

All things need to be done I know but it's a good start. I have my blog again. :D