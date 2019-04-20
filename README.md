# [Blog FE for PC](https://wwww.yanceyleo.com/)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5b925ed8c8c64f379dea6f8b685a731b)](https://app.codacy.com/app/YanceyOfficial/BLOG_FE?utm_source=github.com&utm_medium=referral&utm_content=Yancey-Blog/BLOG_FE&utm_campaign=Badge_Grade_Dashboard)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-2.1.1-blue.svg)](https://github.com/Yancey-Blog/BLOG_FE)
[![Node](https://img.shields.io/badge/node-%3E%3D8.0.0-green.svg)](https://github.com/Yancey-Blog/BLOG_FE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/Yancey-Blog/BLOG_FE/pulls)
[![Build Status](https://travis-ci.org/Yancey-Blog/BLOG_FE.svg?branch=master)](https://travis-ci.org/Yancey-Blog/BLOG_FE)

English | [中文](https://github.com/Yancey-Blog/BLOG_FE/blob/master/README_ZH.md)

## Introduction

This is the second blog website I wrote, The first version was released in March 2018 which wrote by Django and Bootstrap. With the booming of SPA, I decided to write a react version and add some new features. After about two months of design and coding, the second version was released.

Mainwhile, I also wrote a [CMS](https://github.com/Yancey-Blog/BLOG_CMS/) to manage and operate the data. You can click the link to fork.

Now, I am writing the [mobile side pages](https://github.com/Yancey-Blog/BLOG_WAP/), coming soon~

## Technology Stack

- BLOG_FE_FOR_PC: react + react-router-4 + mobx + TypeScript;
- CMS: react + react-router-4 + mobx + Google reCAPTCHA + Ant Design;
- BE Express + Mongo + JWT + Ali OSS + Google reCAPTCHA

I alse used CSS Module、Webp、SVG Sprite and so on...

## Page

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

The left part is a pageable summary list; The right part includes two parts: `tags list` and `top 7 most viewed`

In addition, you can see a search button in the rightmost position of `header` component. Yep,a lovely Hatsune Miku will appear.

![Blog](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-181947.jpg?x-oss-process=image/quality,Q_60)

### Blog Detail Page

![Blog Detail](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-182519@2x.jpg?x-oss-process=image/quality,Q_20)

关于 Blog Detail 页面其实有很多地方，一张图放不下：

- Collect people views counts.

- Display the article cover, title, publish date(show the lastest update date when you are moving in the text.)

- The right part is menu

- In the maim body

  - Click on the picture to zoom in
  - Click the header of code to zoom in
  - Like
  - Comment
  - Previous article and Next article
  - Share to Twitter

### Archive Page

![Blog Detail](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-183530@2x.jpg?x-oss-process=image/quality,Q_60)

- Click on the circle to show the current month's articles.

- Click on the `Fold` to hide all articles.

- Click on the `Unfold` to show all articles.

### Music Page

![Music-1](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-184221%402x.jpg?x-oss-process=image/quality,Q_60)

![Music-2](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-184130@2x.jpg?x-oss-process=image/quality,Q_10)

- The Lives image
- Music notes
- Featured reecords
- My works

### Apps Page

![Apps](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-185001@2x.jpg?x-oss-process=image/quality,Q_60)

Todos: 
- Blog for Android     
- Blog for iOS
- Blog for Mac

### CV Page

- My basic information
- Work experience
- Program experience

### About Page

![About](https://yancey-assets.oss-cn-beijing.aliyuncs.com/Jietu20181017-185855@2x.jpg?x-oss-process=image/quality,Q_10)

Display the development history of the blog.
        
## Change Logs

- 2018-10-14 Website online
- 2018-12-30 Remove dependencies on jQuery and optimize performance
- 2019-01-14 Refactor by TypeScript
- 2019-04-03 Add skeleton for blog detail page

## TODO

- SSR
- Optimize performance

## License

BLOG FE is [MIT licensed](https://opensource.org/licenses/MIT).
