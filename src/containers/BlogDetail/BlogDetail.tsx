import * as React from 'react';
import { observer, inject } from 'mobx-react';
import Helmet from 'react-helmet';
import { Link, RouteComponentProps } from 'react-router-dom';
import tocbot from 'tocbot';
import hljs from 'highlight.js';
import { TwitterIcon, TwitterShareButton } from 'react-share';
import baguetteBox from 'baguettebox.js';
import 'baguettebox.js/dist/baguetteBox.min.css';
import 'tocbot/dist/tocbot.css';
import cs from 'classnames';
import './BlogDetail.scss';
import { initLivere, formatJSONDate } from '../../tools/tools';
import { webpSuffix, avatar, byNcSa } from '../../constant/constant';
import { ArticleStoreType } from '../../types/article';
import Like from '../../components/Post/Like/Like';

interface IArticleProps {
  articleStore?: ArticleStoreType;
}

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

  public componentWillMount() {
    window.scrollTo(0, 0);
  }

  public async componentDidMount() {
    const { articleStore } = this.props;
    await articleStore!.getPostById(
      window.location.pathname.split('/').slice(-1)[0],
    );
    await articleStore!.increasePV(
      window.location.pathname.split('/').slice(-1)[0],
    );
    await articleStore!.getIp();
    await articleStore!.getLikes(
      window.location.pathname.split('/').slice(-1)[0],
      articleStore!.curIp,
    );
    this.hljsInit();
    this.addLineNumbers();
    this.getCodeLanguage();
    this.showImageAlt();
    this.codeBlockChange();
    this.wrapImg();
    this.initBaguetteBox();
    this.tocbotInit();
    this.fixToc();
    initLivere();
  }

  public async componentWillReceiveProps(nextProps: any) {
    const { articleStore, match } = this.props;
    if (nextProps.match.params.id !== match.params.id) {
      await articleStore!.getPostById(
        window.location.pathname.split('/').slice(-1)[0],
      );
      await articleStore!.increasePV(
        window.location.pathname.split('/').slice(-1)[0],
      );
      await articleStore!.getIp();
      await articleStore!.getLikes(
        window.location.pathname.split('/').slice(-1)[0],
        articleStore!.curIp,
      );
      this.hljsInit();
      this.addLineNumbers();
      this.getCodeLanguage();
      this.showImageAlt();
      this.codeBlockChange();
      this.wrapImg();
      this.initBaguetteBox();
      this.tocbotInit();
      this.fixToc();
    }
  }

  public getCodeLanguage() {
    const preTag = document.querySelectorAll('pre');
    const codeBlock = document.querySelectorAll('pre code');
    const codeTypeList: any[] = [];
    if (codeBlock) {
      for (let i = 0, l = codeBlock.length; i < l; i += 1) {
        codeTypeList.push(
          codeBlock[i].className.split(' ')[1].toLocaleUpperCase(),
        );
        preTag[i].insertAdjacentHTML(
          'afterbegin',
          `<div class='code-title'><span class='code-title-btn code-title-close'></span><span class='code-title-btn code-title-shrink'></span><span class='code-title-btn code-title-amplify'></span><span class='code-title-type'>${
            codeTypeList[i]
          }</span></div>`,
        );
      }
    }
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
    window.addEventListener('scroll', () => {
      const tops =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (tops < 580) {
        (menu as HTMLElement).style.top = `${512 - tops}px`;
      } else {
        (menu as HTMLElement).style.top = '4rem';
      }
    });
  }

  public codeBlockChange() {
    const codeTitle = document.querySelectorAll('.code-title');
    const body = document.querySelector('body');
    for (let i = 0, l = codeTitle.length; i < l; i += 1) {
      codeTitle[i].addEventListener('click', () => {
        if (
          (codeTitle[i].parentNode as HTMLDivElement).classList.contains(
            'code-full-screen',
          )
        ) {
          (codeTitle[i].parentNode as HTMLDivElement).classList.add(
            'code-close-full-screen',
          );
          (codeTitle[i].parentNode as HTMLDivElement).classList.remove(
            'code-full-screen',
          );
          (body as HTMLBodyElement).style.overflow = 'auto';
        } else {
          (codeTitle[i].parentNode as HTMLDivElement).classList.remove(
            'code-close-full-screen',
          );
          (codeTitle[i].parentNode as HTMLDivElement).classList.add(
            'code-full-screen',
          );
          (body as HTMLBodyElement).style.overflow = 'hidden';
        }
      });
    }
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

  public render() {
    const { articleStore } = this.props;
    const isWebp = window.localStorage.isWebp === 'true';
    return (
      <main className='article_detail_wrapper'>
        <Helmet>
          <title>
            {`${articleStore!.detail.curArticle.title} | Yancey Inc.`}
          </title>
        </Helmet>
        <section
          className='article_meta_wrapper'
          style={{
            backgroundImage: `url(${
              isWebp
                ? `${articleStore!.detail.curArticle.header_cover}${webpSuffix}`
                : articleStore!.detail.curArticle.header_cover
            })`,
          }}
        >
          <h1 className='title'>{articleStore!.detail.curArticle.title}</h1>
          <div className='article_meta_container'>
            <figure
              className='author_avatar'
              style={{
                backgroundImage: `url(${
                  isWebp ? `${avatar}${webpSuffix}` : avatar
                })`,
              }}
            />
            <span
              className='publish_date'
              data-modify={`Last Modified: ${formatJSONDate(
                articleStore!.detail.curArticle.last_modified_date,
              )}`}
            >
              {formatJSONDate(articleStore!.detail.curArticle.publish_date)}
            </span>
            <span className='page_view'>
              {articleStore!.detail.curArticle.pv_count} Page Views
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
          </div>
        </section>
        {/* content wrapper */}
        <div className='content_wrapper'>
          <summary className='summary'>
            {articleStore!.detail.curArticle.summary}
          </summary>
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
                to={`/p/${articleStore!.detail.previousArticle.id}`}
              >
                <div
                  className={cs('prev_next_container', 'prev')}
                  style={{
                    backgroundImage: `url(${
                      isWebp
                        ? `${
                            articleStore!.detail.previousArticle.header_cover
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
                to={`/p/${articleStore!.detail.nextArticle.id}`}
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
            <div
              id='lv-container'
              data-id='city'
              data-uid='MTAyMC8zOTU5NC8xNjEyMQ=='
            />
          </section>
        </div>
      </main>
    );
  }
}

export default BlogDetail;
