import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { inject, observer } from 'mobx-react/index';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import 'tocbot/dist/tocbot.css';
import $ from 'jquery';
import cs from 'classnames';
import hljs from 'highlight.js';
import tocbot from 'tocbot';
import baguetteBox from 'baguettebox.js';
import 'baguettebox.js/dist/baguetteBox.min.css';
import Like from '../../components/Like/Like';
import './blog_detail.css';
import {
  setCopy, initLivere, checkWebp, aliOSS, webp, formatJSONDate,
} from '../../utils/tools';

@inject('articleStore')
@observer
class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  async componentDidMount() {
    const { articleStore } = this.props;
    await articleStore.getArticleById(window.location.pathname.split('/').slice(-1)[0]);
    await articleStore.increasePV(window.location.pathname.split('/').slice(-1)[0]);
    await articleStore.getIp();
    await articleStore.getLikes(window.location.pathname.split('/').slice(-1)[0], articleStore.curIp);
    this.hljsInit();
    this.addLineNumbers();
    this.getCodeLanguage();
    this.showImageAlt();
    this.codeBlockChange();
    this.tocbotInit();
    this.wrapImg();
    this.initBaguetteBox();
    this.fixToc();
    initLivere();
    document.oncopy = setCopy;
  }

  async componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const { articleStore } = this.props;
      await articleStore.getArticleById(window.location.pathname.split('/').slice(-1)[0]);
      await articleStore.increasePV(window.location.pathname.split('/').slice(-1)[0]);
      await articleStore.getIp();
      await articleStore.getLikes(window.location.pathname.split('/').slice(-1)[0], articleStore.curIp);
      this.hljsInit();
      this.addLineNumbers();
      this.getCodeLanguage();
      this.showImageAlt();
      this.codeBlockChange();
      this.tocbotInit();
      this.wrapImg();
      this.initBaguetteBox();
      this.fixToc();
      document.oncopy = setCopy;
    }
  }

  componentWillUnmount() {
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
    const { articleStore } = this.props;
    const bgUrl = `${aliOSS}/static/logo_avatar.jpg`;
    return (
      <main className="article_detail_wrapper">
        {/* set meta info */}
        <Helmet
          meta={[
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@YanceyOfficial' },
            { name: 'twitter:creator', content: '@YanceyOfficial' },
            { name: 'twitter:title', content: articleStore.detailData.title },
            { name: 'twitter:description', content: articleStore.detailData.summary },
            { name: 'twitter:image', content: articleStore.detailData.header_cover },
          ]}
        >
          <title>
            {`${articleStore.detailData.title} | Yancey Inc.`}
          </title>
          {/* share to Twitter meta */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@YanceyOfficial" />
          <meta name="twitter:creator" content="@YanceyOfficial" />
          <meta name="twitter:title" content={articleStore.detailData.title} />
          <meta name="twitter:description" content={articleStore.detailData.summary} />
          <meta name="twitter:image" content={articleStore.detailData.header_cover} />
        </Helmet>
        {/* header */}
        <section
          className="article_meta_wrapper"
          style={{ backgroundImage: `url(${checkWebp() ? `${articleStore.detailData.header_cover}${webp}` : bgUrl})` }}
        >
          <h1 className="title">
            {articleStore.detailData.title}
          </h1>
          <div
            className="article_meta_container"
          >
            <figure
              className="author_avatar"
              style={{ backgroundImage: `url(${checkWebp() ? `${bgUrl}${webp}` : bgUrl})` }}
            />
            <span className="publish_date" data-modify={`Last Modified: ${formatJSONDate(articleStore.detailData.last_modified_date)}`}>
              {formatJSONDate(articleStore.detailData.publish_date)}
            </span>
            <span className="page_view">
              {articleStore.detailData.pv_count}
              {' '}
              Page Views
            </span>
            <ul className="tags_list">
              {
                Object.keys(articleStore.detailTags)
                  .map(key => (
                    <li key={key}>
                      <Link to={`/t/${articleStore.detailTags[key]}`}>
                        {articleStore.detailTags[key]}
                      </Link>
                    </li>
                  ))
              }
            </ul>
          </div>
        </section>
        {/* content wrapper */}
        <div className="content_wrapper">
          <summary className="summary">
            {articleStore.detailData.summary}
          </summary>
          {/* content */}
          <section
            className="article_content"
            dangerouslySetInnerHTML={{ __html: articleStore.detailData.content }}
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
              <TwitterShareButton
                title={articleStore.detailData.title}
                url={window.location.href}
                via="YanceyOfficial"
                className="Demo__some-network__share-button"
              >
                <TwitterIcon
                  size={32}
                  round
                />
              </TwitterShareButton>
              <Like />
            </div>
          </section>
          {/* Previous and Next Articles Link */}
          <section className="prev_next_wrapper">
            {
              JSON.stringify(articleStore.previousArticle) === '{}' ? null : (
                <button
                  type="button"
                  onClick={() => articleStore.getArticleById(articleStore.previousArticle.id)}
                >
                  <div
                    className={cs('prev_next_container', 'prev')}
                    style={{ backgroundImage: `url(${checkWebp() ? `${articleStore.previousArticle.header_cover}${webp}` : bgUrl})` }}
                  >
                    <div className={cs('prev_next_meta', 'prev_meta')}>
                      <p className="directive">
                        PREVIOUS POST
                      </p>
                      <p className="title">
                        {articleStore.previousArticle.title}
                      </p>
                    </div>
                    <div className="overlay" />
                  </div>
                </button>
              )
            }
            {
              JSON.stringify(articleStore.nextArticle) === '{}' ? null : (
                <button
                  type="button"
                  onClick={() => articleStore.getArticleById(articleStore.nextArticle.id)}
                >
                  <div
                    className={cs('prev_next_container', 'next')}
                    style={{ backgroundImage: `url(${checkWebp() ? `${articleStore.nextArticle.header_cover}${webp}` : bgUrl})` }}
                  >
                    <div className={cs('prev_next_meta', 'next_meta')}>
                      <p className="directive">
                        NEXT POST
                      </p>
                      <p className="title">
                        {articleStore.nextArticle.title}
                      </p>
                    </div>
                    <div className="overlay" />
                  </div>
                </button>
              )
            }
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
