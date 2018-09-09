import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShareLink from 'react-twitter-share-link';
import POWERMODE from 'activate-power-mode';
import 'tocbot/dist/tocbot.css';
import $ from 'jquery';
import cs from 'classnames';
import hljs from 'highlight.js';
import tocbot from 'tocbot';
import baguetteBox from 'baguettebox.js';
import 'baguettebox.js/dist/baguetteBox.min.css';
import Like from '../../components/Like/Like';
import './blog_detail.css';
import { setCopy, initLivere, shareToFB } from '../../utils/tools';
import { GET } from '../../https/axios';
import svgIcons from '../../assets/image/yancey-official-blog-svg-icons.svg';

class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogContent: '',
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.getData();
    initLivere();
    shareToFB();
    this.fixToc();
    document.oncopy = setCopy;
  }

  componentWillUnmount() {
  }

  getData() {
    GET('https://api.leoyancey.com/api/article.json', {})
      .then((res) => {
        this.setState({
          blogContent: res.data.content,
        });
        this.hljsInit();
        this.addLineNumbers();
        this.getCodeLanguage();
        this.showImageAlt();
        this.codeBlockChange();
        this.tocbotInit();
        this.wrapImg();
        this.initBaguetteBox();
      })
      .catch((error) => {
        // todo
      });
  }

  getCodeLanguage() {
    const preTag = $('pre');
    const codeBlock = preTag.find('code');
    const codeTypeList = [];
    codeBlock.each(function () {
      codeTypeList.push($(this)
        .attr('class')
        .split(' ')[1].toLocaleUpperCase());
    });
    preTag.each(function (index) {
      $(this)
        .prepend($(`<div class="code-title"><span class="code-title-btn code-title-close"></span><span class="code-title-btn code-title-shrink"></span><span class="code-title-btn code-title-amplify"></span><span class="code-title-type">${codeTypeList[index]}</span></div>`));
    });
  }

  wrapImg = () => {
    const imgDom = document.querySelectorAll('.article_content img');
    const imgWrapper = document.querySelectorAll('.img-group');
    for (let i = 0, len = imgDom.length; i < len; i += 1) {
      imgWrapper[i].innerHTML = `<a href="${imgDom[i].src}" data-caption="${imgDom[i].alt}">${imgWrapper[i].innerHTML}</a>`;
    }
  };

  initBaguetteBox() {
    baguetteBox.run('.article_content');
  }

  tocbotInit() {
    $(':header')
      .each(function (index, value) {
        $(this)
          .attr('id', `header-${index}`);
      });
    tocbot.init({
      tocSelector: '.menu',
      contentSelector: '.article_content',
      headingSelector: 'h2, h3, h4, h5, h6',
    });
  }

  fixToc() {
    $(window)
      .on('resize scroll', function () {
        const menu = $('.menu');
        if ($(this)
          .scrollTop() <= 580) {
          menu.css('top', `${512 - $(this)
            .scrollTop()}px`);
        } else {
          menu.css('top', '4rem');
        }
      });
  }

  codeBlockChange() {
    $('.code-title')
      .find('span')
      .click(function () {
        const currentPreTag = $(this)
          .parent()
          .parent();
        if (currentPreTag.hasClass('code-full-screen')) {
          currentPreTag.addClass('code-close-full-screen')
            .removeClass('code-full-screen');
          $('body')
            .css('overflow', 'auto');
        } else {
          currentPreTag.addClass('code-full-screen')
            .removeClass('code-close-full-screen');
          $('body')
            .css('overflow', 'hidden');
        }
      });
  }

  showImageAlt() {
    const imgList = [];
    const imgTag = $('img');
    const parentOfImgTag = imgTag.parent();
    imgTag.each(function () {
      imgList.push($(this)
        .attr('alt'));
    });
    parentOfImgTag.each(function (index) {
      $(this)
        .addClass('img-group');
      $(this)
        .append($(`<span class="img-info">${imgList[index]}</span>`));
    });
  }

  addLineNumbers() {
    $('.hljs')
      .each(function () {
        $(this)
          .html(`<ol class="rounded-list"><li class="hljs-ln-line">${$(this)
            .html()
            .replace(/\n/g, '\n</li><li class="hljs-ln-line">')}\n</li></ol>`);
      });
    $('ol li:last-child')
      .remove();
  }

  hljsInit() {
    const preTag = $('pre');
    const codeBlock = preTag.find('code');
    codeBlock.each((i, block) => {
      hljs.highlightBlock(block);
    });
  }

  render() {
    const { blogContent } = this.state;
    return (
      <main className="article_detail_wrapper">
        {/* set meta info */}
        <Helmet>
          <title>
            当前标题 | Yancey Inc.
          </title>
          {/* share to Twitter meta */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@YanceyOfficial" />
          <meta name="twitter:creator" content="@YanceyOfficial" />
          <meta name="twitter:title" content="insertAdjacentHTML" />
          <meta name="twitter:description" content="Many developers consider it's an opportunity to discard jQuery when React and Vue.js have been widely used." />
          <meta name="twitter:image" content="https://yancey-assets.oss-cn-beijing.aliyuncs.com/post/IMG_20171127_161530-1024x576.jpg?x-oss-process=image/format,webp" />
          {/* share to Facebook meta */}
          <meta property="og:url" content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="When Great Minds Don’t Think Alike" />
          <meta property="og:description" content="How much does culture influence creative thinking?" />
          <meta property="og:image" content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
        </Helmet>
        {/* header */}
        <section className="article_meta_wrapper">
          <h1 className="title">
            React练习——汇率计算器
          </h1>
          <div className="article_meta_container">
            <figure className="author_avatar" />
            <span className="publish_date" data-modify="Last Modified: 2018-11-13 14:51">
              2018-09-08 10:34
            </span>
            <span className="page_view">
              1111
              {' '}
              Page Views
            </span>
            <ul className="tags_list">
              <li>
                <Link to="/blog">
                  Yarn
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  JavaScript
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  npm
                </Link>
              </li>
            </ul>
          </div>
        </section>
        {/* content wrapper */}
        <div className="content_wrapper">
          {/* content */}
          <section
            className="article_content"
            dangerouslySetInnerHTML={{ __html: blogContent }}
          />
          {/* menu */}
          <aside className="menu" />
        </div>
        <div className="attachment_wrapper">
          {/* copyright share like */}
          <section className="copyright_share_wrapper">
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en" target="_blank" rel="noopener noreferrer">
              Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
            </a>
            {/* share To Twitter Btn */}
            <div className="share_btn">
              <ShareLink
                text="you are reading 「insertAdjacentHTML」 | Yancey Inc."
                link="localhost:3000/p/1"
                via="YanceyOfficial"
              >
                {link => (
                  <a href={link} className="twitter_share_button_wrapper" target="_blank" rel="noopener noreferrer">
                    <button className="twitter_share_button" type="button">
                      <svg className="icon-comment">
                        <use xlinkHref={`${svgIcons}#twitter-1`} />
                      </svg>
                      Tweet
                    </button>
                  </a>
                )}
              </ShareLink>
              {/* share To FaceBook Btn */}
              <div
                className="fb-share-button"
                data-href="https://www.your-domain.com/your-page.html"
                data-layout="button_count"
              />
              <Like />
            </div>
            <div id="fb-root" />
          </section>
          {/* Previous and Next Articles Link */}
          <section className="prev_next_wrapper">
            <Link to="/blog">
              <div className={cs('prev_next_container', 'prev')}>
                <div className={cs('prev_next_meta', 'prev_meta')}>
                  <p className="directive">
                    PREVIOUS POST
                  </p>
                  <p className="title">
                    风平浪静的夏天~
                  </p>
                </div>
                <div className="overlay" />
              </div>
            </Link>
            <Link to="/blog">
              <div className={cs('prev_next_container', 'next')}>
                <div className={cs('prev_next_meta', 'next_meta')}>
                  <p className="directive">
                    PREVIOUS POST
                  </p>
                  <p className="title">
                    风平浪静的夏天~
                  </p>
                </div>
                <div className="overlay" />
              </div>
            </Link>
          </section>
          {/* Livere Comment */}
          <section className="comment_wrapper">
            <p className="comment_title">
              Comments
            </p>
            <div id="lv-container" data-id="city" data-uid="MTAyMC8zOTU5NC8xNjEyMQ==" />
          </section>
        </div>
      </main>
    );
  }
}


export default BlogDetail;
