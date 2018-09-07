import React, { Component } from 'react';
import 'tocbot/dist/tocbot.css';
import $ from 'jquery';
import hljs from 'highlight.js';
import tocbot from 'tocbot';
import baguetteBox from 'baguettebox.js';
import 'baguettebox.js/dist/baguetteBox.min.css';
import styles from './blog_detail.module.css';
import { setCopy } from '../../utils/tools';
import { GET } from '../../https/axios';

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
        this.showLinkIcon();
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

  showLinkIcon() {
    $(':header a')
      .each(function (index, value) {
        $(this)
          .parent()
          .append('<i class="linkify left icon"></i>');
        const linkIconTag = $('.linkify');
        $(this)
          .mouseover(() => {
            linkIconTag.css('display', 'inline-block')
              .fadeIn();
          });
        $(this)
          .mouseleave(() => {
            linkIconTag.fadeOut();
          });
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

  wrapImg = () => {
    const imgDom = document.querySelectorAll('.article_content img');
    const imgWrapper = document.querySelectorAll('.img-group');
    for (let i = 0, len = imgDom.length; i < len; i += 1) {
      imgWrapper[i].innerHTML = `<a href="${imgDom[i].src}" data-caption="${imgDom[i].alt}">${imgWrapper[i].innerHTML}</a>`;
    }
  };

  initBaguetteBox() {
    baguetteBox.run('.article_content', {
      animation: 'fadeIn',
    });
  }

  tocbotInit() {
    $(':header')
      .each(function (index, value) {
        $(this)
          .attr('id', `header-${index}`);
      });
    // Tocbot config
    tocbot.init({
      // Where to render the table of contents.
      tocSelector: '.menu',
      // Where to grab the headings to build the table of contents.
      contentSelector: '.article_content',
      // Which headings to grab inside of the contentSelector element.
      headingSelector: 'h2, h3, h4, h5, h6',
    });
  }

  render() {
    const { blogContent } = this.state;
    return (
      <main className={styles.article_detail_wrapper}>
          <div className={styles.article_meta_wrapper}>
            <h1 className={styles.title}>
              React练习——汇率计算器
            </h1>
          </div>
        <article
          className={styles.article_content}
          dangerouslySetInnerHTML={{ __html: blogContent }}
        />
        <aside className="menu" />
      </main>
    );
  }
}


export default BlogDetail;
