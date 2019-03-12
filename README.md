# [Blog2.0 FE](https://wwww.yanceyleo.com/)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5b925ed8c8c64f379dea6f8b685a731b)](https://app.codacy.com/app/YanceyOfficial/BLOG_FE?utm_source=github.com&utm_medium=referral&utm_content=Yancey-Blog/BLOG_FE&utm_campaign=Badge_Grade_Dashboard)

## Introduction

这是我写的第二个博客网站。第一个是在今年(2018年)3月份完成的，用的Bootstrap + Django. 至于为什么写第二版，无非是看到别人的博客太好看了😂。

2.0的数据还在迁移中...因此下面的图各种demo1 demo2...

2.0版本是一个前后端分离的项目，这次除了前端和后端，还专门写了一个[后台管理系统](https://github.com/Yancey-Blog/BLOG_CMS/blob/master/README.md)。其中:

- 前端主要技术栈是react + react-router-4 + mobx;
- 管理后台用的是react + react-router-4 + mobx + Google reCAPTCHA + Ant Design;
- 后端则是Express + Mongo + JWT + Ali OSS + Google reCAPTCHA + request promise.

全端用到了Airbnb的eslint，前端还用到了CSS Module、Webp、SVG Sprite等等一些好玩的技术，下面具体介绍
一下整个前端。

因为刚毕业不久，工作时间也不多，感觉做的项目还稍显稚嫩，因此决定开源出来接受大佬们的意见。

## Detail

### Global Component

全局无非就是标配的header、footer、滚动进度指示条、当然还有一个音乐播放器的组件。

此外，我还后端写了一个`glonalConfig`的接口，暂时只想到一个功能，就是控制前端的`filter: grayscale(100%); `属性，用在一些哀悼日时，后台会开启这个按钮。

### Home Page

![Cover](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-174103%402x.jpg?x-oss-process=image/quality,Q_20)
![Home](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-174609@2x.jpg?x-oss-process=image/quality,Q_60)

主页分为5个部分：

- Background
- Motto
- Announcement
- The Latest 3 Projects
- The Latest 10 Articles

#### Background

先说背景图，后台存有多张背景图，因此通过左右按钮可以切换背景图。并且当前那张背景图的id会存储到localStorage，因此只要不清掉localStorage，下次打开还是当前那张背景图。

当然如果localStorage没有相关id或者这张图片被我在后台删除了，将会返回最新发布的图片。

其实后台我还设置了图片的显隐按钮，当某张图片的id在localStorage，但被我在后台隐藏了，同样将会返回最新发布的图片。

#### Motto

Motto部分对应上面第一张图这个部分。

    死は生の対極としてではなく、その一部として存在している
   
同样是请求后端接口，取得最新的那条Motto 

*ps: 上面那句话来自「ノルウェイの森」（《挪威的森林》）*

#### Announcement

和Motto部分同理，用途是发布一些最新消息。

#### The Latest 3 Projects

这个是用来展示我最新的三个开源项目，url会连接到相应的GitHub.

#### The Latest 10 Articles

整个博客的核心部分之一，在首页会显示最新10篇文章的摘要模块，上面显示发布时间、title、PV量、点赞量、Tags、summary、show more，点击图片、标题或者show more都可以进入到文章细节页。

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

这里就不放图了，简历分三部分，都是从后端取出来的：

- 基本信息
- 工作经历
- 项目经历

### About

![About](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-185855@2x.jpg?x-oss-process=image/quality,Q_10)

About页面也是从后端取出来的，用来记录Blog发展的大事记（估计就是Bug修改历程 噗x）。

### Privacy Policy

有个网站可以生成隐私政策，虽然没什么卵用，但既然想做这个Blog，那就把它完善好。排版的话借鉴了Paypal隐私政策的样式。

## 最后

因为最近忙着找工作，文章迁移、英文文档撰写都会在忙过这段时间之后再去实施，如果有好的机会可以联系我哈～

以上、よろしく。

