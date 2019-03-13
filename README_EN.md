# [Blog FE for PC](https://wwww.yanceyleo.com/)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5b925ed8c8c64f379dea6f8b685a731b)](https://app.codacy.com/app/YanceyOfficial/BLOG_FE?utm_source=github.com&utm_medium=referral&utm_content=Yancey-Blog/BLOG_FE&utm_campaign=Badge_Grade_Dashboard)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-2.1.1-blue.svg)](https://github.com/Yancey-Blog/BLOG_FE)
[![Node](https://img.shields.io/badge/node-%3E%3D8.0.0-green.svg)](https://github.com/Yancey-Blog/BLOG_FE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/Yancey-Blog/BLOG_FE/pulls)

English | [中国語](https://github.com/Yancey-Blog/BLOG_FE/blob/master/README.md)

## Introduction

This is the second blog website I wrote, The first version was released in March 2018 which wrote by Django and Bootstarp. With the booming of SPA, I decided to write a react version and add some new features. After about two months of design and coding, the second version was released.

Mainwhile, I alse wrote a [CMS](https://github.com/Yancey-Blog/BLOG_CMS/) to manage and operate the data. You can click the link to try and use.

Now, I am writing the [mobile side pages](https://github.com/Yancey-Blog/BLOG_WAP/), coming soon~

## Technology Stack

- BLOG_FE_FOR_PC: react + react-router-4 + mobx + TypeScript;
- CMS: react + react-router-4 + mobx + Google reCAPTCHA + Ant Design;
- BE Express + Mongo + JWT + Ali OSS + Google reCAPTCHA

I alse used CSS Module、Webp、SVG Sprite and so on...

## Page

### Global

I wrote an api in backend named `globalConfig`, On some special days of mourning, The root node will add `filter: grayscale(100%);`.

### Home Page

![Cover](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-174103%402x.jpg?x-oss-process=image/quality,Q_20)
![Home](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-174609@2x.jpg?x-oss-process=image/quality,Q_60)

The home page contains five parts：

- Background
- Motto
- Announcement
- The Latest 3 Projects
- The Latest 10 Articles

#### Background

The first time you visited my website, you will see the latest background, meanwhile, the id of this background will saved in localStorge. You can switch background by clicking the `left arrow` or `right arrow`. So, when open the website again, you will see the current background usless clear cache or I delete/hide the background in CMS.

#### Motto

My motto.

#### Announcement

I always publish new information in the component.

#### The Latest 3 Projects

Display the latest 3 open source projects of mine, click on any one to jump to the corresponding GitHub page

#### The Latest 10 Articles

Display the latest 10 articles summary, which is include release date, title, PV, likes, tag, summary and so on, click one to jump to the article detail page.

### Blog Page

![Blog](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-181438@2x.jpg?x-oss-process=image/quality,Q_60)

左边是最新的十篇summary, 而下面是后端分页的分页器；右边上面是文章的标签集合，下面是7篇最高PV的文章（设计大家都懂，知乎的设计）。

此外，其实在header的右上角还有一个*搜索*按钮，点进去是这个样子：

![Blog](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-181947.jpg?x-oss-process=image/quality,Q_60)

没错，可爱的初音ミク, 通过在搜索框输入，模糊匹配文章名。当然这里没有第一版好，第一版用了whoosh + jieba搜索引擎，效果理论上要比这版好一些。

### Blog Detail Page

![Blog Detail](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-182519@2x.jpg?x-oss-process=image/quality,Q_20)

关于Blog Detail页面其实有很多地方，一张图放不下：

- 从上面来看是header cover、标题、发布时间（鼠标移入显示最后修改时间）、tags等；
- 正文部分的图片可以点击放大，形成一个手动轮播图的效果；
- code部分用了highlight.js
- 其中点击code的头部，也就是仿Mac按钮那个部分，代码块也会全屏放大
- 右边是toc
- 下面还有点赞、Twitter（这个地方恐怕要做SSR，因为Twitter Card必须要拿到实际的meta信息，如果是JS生成的，比如用了react-helmet，是不会被识别出来的）
- 然后就是用了LiveRe的评论插件。
- 最后还有人见人恨的复制文本附带版权信息：

        不知道大家看到一个小细节没，打开Chrome开发者工具，选择查看元素，将鼠标移动到html页面，发现浏览器自动给栅格标上了虚线，看下图。

        Article Name: Grid
        Article URL: https://blog.yanceyleo.com/p/5bc202a26b48dfee0a0dcedf
        License: Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)



**后期确实要把这个页面做成SSR，除了Twitter Card的问题，因为现在正文用的dangerouslySetInnerHTML，这一块也没法做懒加载。**

### Archive Page

![Blog Detail](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-183530@2x.jpg?x-oss-process=image/quality,Q_60)

这个部分显示归档，话说毕竟好久不写后端了，写聚合分组SQL那一块的时候确实花了些时间。

点击大一点儿的圆圈会显示/隐藏某个月的文章归档信息，默认展示最新一个月的归档信息，右边的按钮控制展示全部和关闭全部，其实原理就是用了checkbox.

### Music Page

我的业余爱好是搞搞音乐，因此Blog也不会少了Music模块。

![Music-1](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-184221%402x.jpg?x-oss-process=image/quality,Q_60)

![Music-2](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-184130@2x.jpg?x-oss-process=image/quality,Q_10)

第一张图的左上角是我看过的Live的轮播图片，当然图片肯定都是在拍照时间拍的；

右边是Music Notes，实际上就是`articles?tag=Music`,然后取最新的四篇，当然数据还没迁移过来，随便找了篇文章加上了Music的tag；

第二张图上面是一些我喜欢的唱片，关于购买地址，没有任何商业用途，一般链接来自日亚抑或cdjapan;

下面则是我的一些小作品了，链接指向SoundCloud（需fq）

### Apps Page

![Apps](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-185001@2x.jpg?x-oss-process=image/quality,Q_60)

现在还没去做，后期会计划写Wap版（1.0是用的响应式，这次想把Wap单独抽离出来）；用NR写iOS和Andriod；用Electron写个Mac版，毕竟用着Nav Bar的MBP, 还是想在这个地方做点儿好玩的事情出来。

### CV Page

My resume.

- My basic information
- Work experience
- Program experience

### About

![About](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-185855@2x.jpg?x-oss-process=image/quality,Q_10)

Display the development history of the blog. 

### Privacy Policy

有个网站可以生成隐私政策，虽然没什么卵用，但既然想做这个Blog，那就把它完善好。排版的话借鉴了Paypal隐私政策的样式。

## Released Log


