import * as React from 'react';
import { observer, inject } from 'mobx-react';
import Title from '@components/Common/Title/Title';
import { Link, RouteComponentProps } from 'react-router-dom';
import cs from 'classnames';
import _ from 'lodash';

import tocbot from 'tocbot';
import hljs from 'highlight.js';
import baguetteBox from 'baguettebox.js';
import { TwitterIcon, TwitterShareButton } from 'react-share';

import 'baguettebox.js/dist/baguetteBox.min.css';
import 'tocbot/dist/tocbot.css';
import './BlogDetail.scss';

import Like from '@components/Post/Like/Like';
import Skeletons from '@components/Skeletons/Skeletons';

import { initLivere, formatJSONDate } from '@tools/tools';
import { webpSuffix, byNcSa, livere } from '@constants/constants';

import routePath from '@constants/routePath';
import { IArticleProps } from '../../types/article';

@inject('articleStore')
@observer
class BlogDetail extends React.Component<
  IArticleProps & RouteComponentProps<any>,
  {}
> {
  constructor(props: IArticleProps & RouteComponentProps<any>) {
    super(props);
    this.state = {};
  }

  public async componentDidMount() {
    const { articleStore, match } = this.props;
    const curId = match.params.id;
    await articleStore!.getPostById(curId);
    this.tocbotInit();
    this.fixToc();
    this.hljsInit();
    this.addLineNumbers();
    this.deleteEmptyTag();
    this.showImageAlt();
    this.wrapImg();
    this.initBaguetteBox();
    await articleStore!.getIp();
    articleStore!.getLikes(curId, articleStore!.curIp);
    articleStore!.increasePV(curId);
    initLivere();
  }

  public wrapImg = () => {
    const imgDom = document.querySelectorAll('.article_content img');
    const imgWrapper = document.querySelectorAll('.img-group');
    for (let i = 0, len = imgDom.length; i < len; i += 1) {
      imgWrapper[i].innerHTML = `<a href='${
        (imgDom[i] as HTMLImageElement).src
      }' data-caption='${(imgDom[i] as HTMLImageElement).alt}'>${
        imgWrapper[i].innerHTML
      }</a>`;
    }
  };

  public initBaguetteBox() {
    baguetteBox.run('.article_content');
  }

  public tocbotInit() {
    const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    for (let i = 0, len = headers.length; i < len; i += 1) {
      headers[i].id = `header-${i}`;
    }
    tocbot.init({
      tocSelector: '.menu',
      contentSelector: '.article_content',
      headingSelector: 'h2, h3, h4, h5, h6',
    });
  }

  public fixToc() {
    const menu = document.querySelector('.menu');

    window.addEventListener(
      'scroll',
      _.throttle(() => {
        const tops =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (tops < 440) {
          (menu as HTMLElement).style.top = `${512 - tops}px`;
        } else {
          (menu as HTMLElement).style.top = '4rem';
        }
      }, 10),
    );
  }

  public showImageAlt() {
    const imgList: any[] = [];
    const imgTag = document.querySelectorAll('img');
    for (let i = 0, l = imgTag.length; i < l; i += 1) {
      imgList.push(imgTag[i].alt);
      (imgTag[i].parentNode as HTMLDivElement).classList.add('img-group');
      (imgTag[i].parentNode as HTMLDivElement).insertAdjacentHTML(
        'beforeend',
        `<span class='img-info'>${imgList[i]}</span>`,
      );
    }
  }

  public addLineNumbers() {
    const hljsDOM = document.querySelectorAll('.hljs');
    for (let i = 0, l = hljsDOM.length; i < l; i += 1) {
      hljsDOM[
        i
      ].innerHTML = `<ol class="rounded-list"><li class="hljs-ln-line">${hljsDOM[
        i
      ].innerHTML.replace(
        /\n/g,
        '\n</li><li class="hljs-ln-line">',
      )}\n</li></ol>`;
    }
  }

  public hljsInit() {
    const codeBlock = document.querySelectorAll('pre code');
    for (let i = 0, l = codeBlock.length; i < l; i += 1) {
      hljs.highlightBlock(codeBlock[i]);
    }
  }

  public deleteEmptyTag() {
    const ul = document.getElementsByClassName('rounded-list') as any;
    for (let i = 0, l = ul.length; i < l; i += 1) {
      if (ul[i].lastChild.innerHTML.trim() === '') {
        ul[i].removeChild(ul[i].lastChild);
      }
    }
  }

  public render() {
    const { articleStore } = this.props;
    const isWebp = window.localStorage.isWebp === 'true';
    return (
      <main className='article_detail_wrapper'>
        <Title title={articleStore!.detail.curArticle.title} />
        <section
          className='article_meta_wrapper'
          style={{
            backgroundImage: `url(${
              isWebp
                ? `${articleStore!.detail.curArticle.header_cover}${webpSuffix}`
                : articleStore!.detail.curArticle.header_cover
            })`,
          }}
        />

        {articleStore!.loading ? (
          <Skeletons />
        ) : (
          <>
            {/* content wrapper */}
            <div className='content_wrapper'>
              {/* meta */}
              <h1 className='title'>{articleStore!.detail.curArticle.title}</h1>
              <span
                className='publish_date'
                data-modify={`最后修改时间: ${formatJSONDate(
                  articleStore!.detail.curArticle.last_modified_date,
                )}`}
              >
                发布时间:{' '}
                {formatJSONDate(articleStore!.detail.curArticle.publish_date)}
              </span>
              <span className='page_view'>
                {articleStore!.detail.curArticle.pv_count} 阅读
              </span>
              <ul className='tags_list'>
                {articleStore!.detail.curArticle.tags.map(
                  (item: string, index: number) => (
                    <li key={index}>
                      <Link to={`/t/${item}`}>{item}</Link>
                    </li>
                  ),
                )}
              </ul>
              {/* summary */}
              <blockquote className='summary'>
                {articleStore!.detail.curArticle.summary}
              </blockquote>
              {/* content */}
              <section
                className='article_content'
                dangerouslySetInnerHTML={{
                  __html: articleStore!.detail.curArticle.content,
                }}
              />
              {/* menu */}
              <aside className='menu' />
            </div>
            <div className='attachment_wrapper'>
              {/* copyright share like */}
              <section className='copyright_share_wrapper'>
                <a href={byNcSa} target='_blank' rel='noopener noreferrer'>
                  Attribution-NonCommercial-ShareAlike 4.0 International (CC
                  BY-NC-SA 4.0)
                </a>
                {/* share To Twitter Btn */}
                <div className='share_btn'>
                  <TwitterShareButton
                    title={articleStore!.detail.curArticle.title}
                    url={window.location.href}
                    via='YanceyOfficial'
                    className='Demo__some-network__share-button'
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <Like />
                </div>
              </section>
              {/* Previous and Next Articles Link */}
              <section className='prev_next_wrapper'>
                {JSON.stringify(articleStore!.detail.previousArticle) ===
                '{}' ? null : (
                  <Link
                    className='prev_next'
                    to={`${routePath.blogDetail}${
                      articleStore!.detail.previousArticle.id
                    }`}
                  >
                    <div
                      className={cs('prev_next_container', 'prev')}
                      style={{
                        backgroundImage: `url(${
                          isWebp
                            ? `${
                                articleStore!.detail.previousArticle
                                  .header_cover
                              }${webpSuffix}`
                            : articleStore!.detail.previousArticle.header_cover
                        })`,
                      }}
                    >
                      <div className={cs('prev_next_meta', 'prev_meta')}>
                        <p className='directive'>PREVIOUS POST</p>
                        <p className='title'>
                          {articleStore!.detail.previousArticle.title}
                        </p>
                      </div>
                      <div className='overlay' />
                    </div>
                  </Link>
                )}
                {JSON.stringify(articleStore!.detail.nextArticle) ===
                '{}' ? null : (
                  <Link
                    className='prev_next'
                    to={`${routePath.blogDetail}${
                      articleStore!.detail.nextArticle.id
                    }`}
                  >
                    <div
                      className={cs('prev_next_container', 'next')}
                      style={{
                        backgroundImage: `url(${
                          isWebp
                            ? `${
                                articleStore!.detail.nextArticle.header_cover
                              }${webpSuffix}`
                            : articleStore!.detail.nextArticle.header_cover
                        })`,
                      }}
                    >
                      <div className={cs('prev_next_meta', 'next_meta')}>
                        <p className='directive'>NEXT POST</p>
                        <p className='title'>
                          {articleStore!.detail.nextArticle.title}
                        </p>
                      </div>
                      <div className='overlay' />
                    </div>
                  </Link>
                )}
              </section>
              {/* Livere Comment */}
              <section className='comment_wrapper'>
                <p className='comment_title'>Comments</p>
                <div id='lv-container' data-id='city' data-uid={livere} />
              </section>
            </div>
          </>
        )}
      </main>
    );
  }
}

export default BlogDetail;
