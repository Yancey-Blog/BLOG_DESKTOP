import React, { Component } from 'react';
import { observable, configure, action } from 'mobx';
import { observer } from 'mobx-react';
import cs from 'classnames';
import $ from 'jquery';
import styles from './home.module.css';
import svgIcons from '../../assets/image/yancey-official-blog-svg-icons.svg';
import BlogSummary from '../../components/Bussiness/BlogSummary/blogSummary';
import socialMedia from '../../utils/socialMedia';

const Mock = require('mockjs');

configure({ enforceActions: true });

class Store {
  @observable greeting = '';

  @action setGreeting = () => {
    const nowHour = new Date().getHours();
    if (nowHour > 4 && nowHour <= 9) {
      this.greeting = 'おはよう、Yanceyです！';
    } else if (nowHour > 9 && nowHour <= 18) {
      this.greeting = 'こんにちは、Yanceyです！';
    } else {
      this.greeting = 'こんばんは、Yanceyです！';
    }
  };
}

const store = new Store();

@observer
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    this.fakeData();
  }

  componentDidMount() {
    this.handleBigBannerHeight();
    this.switchNavbarBackgroundColor();
    store.setGreeting();
  }

  componentWillUnmount() {
  }

  handleBigBannerHeight() {
    const viewPortInit = $(window)
      .height();
    const homeBg = $('.home-big');
    homeBg.css('height', `${viewPortInit}px`);
    $(window)
      .on('resize scroll', function () {
        homeBg.css('height', `${$(this)
          .height()}px`);
      });
  }

  switchNavbarBackgroundColor() {
    if ($(window)
      .scrollTop() === 0) {
      $('header')
        .addClass(styles['clear-navbar-bg']);
    }
    $(window)
      .on('scroll', function () {
        if ($(this)
          .scrollTop() === 0) {
          $('header')
            .addClass(styles['clear-navbar-bg']);
        } else {
          $('header')
            .removeClass(styles['clear-navbar-bg']);
        }
      });
  }

  fakeData() {
    const data = Mock.mock({
      'data|10': [{
        'id|+1': 1,
        url: 'https://www.yanceyleo.com/blog/@word(4, 12)',
        poster: '@image(\'500x500\', \'@color()\')',
        publish_date: '@date()',
        last_modified_date: '@date()',
        title: '@ctitle(6, 18)',
        summary: '@cparagraph(3, 7)',
        like_num: '@integer(0, 500)',
        comment_num: '@integer(0, 500)',
        category: '@word(4, 12)',
      }],
    });
    this.state.data = JSON.parse(JSON.stringify(data));
  }

  render() {
    return (
      <main className={styles['yancey-blog-home']}>
        <section className="home-imax-wrapper">
          <figure className={cs([styles['home-imax']], 'home-big')}>
            <h1
              className={styles.glitch}
              data-value={store.greeting}
            >
              {store.greeting}
            </h1>
            <div className={styles['social-media-container']}>
              <div className="up-triangle" />
              <p className={cs(styles['social-media-motto'], 'no-user-select')}>
                You got to put the past behind you before you can move on.
              </p>
              <ul className={styles['social-media-list']}>
                <li className={styles['social-media-item']}>
                  <svg className={styles.arrow}>
                    <use xlinkHref={`${svgIcons}#left-arrow`} />
                  </svg>
                </li>
                <li className={styles['social-media-item']}>
                  <a href={socialMedia.github.url} target="_blank" rel="noopener noreferrer">
                    <svg className="">
                      <use xlinkHref={`${svgIcons}${socialMedia.github.icon}`} />
                    </svg>
                  </a>
                </li>
                <li className={styles['social-media-item']}>
                  <a href={socialMedia.telegram.url} target="_blank" rel="noopener noreferrer">
                    <svg className="">
                      <use xlinkHref={`${svgIcons}${socialMedia.telegram.icon}`} />
                    </svg>
                  </a>
                </li>
                <li className={styles['social-media-item']}>
                  <a href={socialMedia.twitter.url} target="_blank" rel="noopener noreferrer">
                    <svg className="">
                      <use xlinkHref={`${svgIcons}${socialMedia.twitter.icon}`} />
                    </svg>
                  </a>
                </li>
                <li className={cs(styles['social-media-item'], styles['qr-code'], styles['messenger-qr-code'])}>
                  <svg className="">
                    <use xlinkHref={`${svgIcons}${socialMedia.messenger.icon}`} />
                  </svg>
                </li>
                <li className={styles['social-media-item']}>
                  <a href={socialMedia.instagram.url} target="_blank" rel="noopener noreferrer">
                    <svg className="">
                      <use xlinkHref={`${svgIcons}${socialMedia.instagram.icon}`} />
                    </svg>
                  </a>
                </li>
                <li className={styles['social-media-item']}>
                  <a href={socialMedia.facebook.url} target="_blank" rel="noopener noreferrer">
                    <svg className="">
                      <use xlinkHref={`${svgIcons}${socialMedia.facebook.icon}`} />
                    </svg>
                  </a>
                </li>
                <li className={cs(styles['social-media-item'], styles['qr-code'], styles['wechat-qr-code'])}>
                  <svg className={styles['icon-wechat']}>
                    <use xlinkHref={`${svgIcons}${socialMedia.wechat.icon}`} />
                  </svg>
                </li>
                <li className={styles['social-media-item']}>
                  <a href={socialMedia.paypal.url} target="_blank" rel="noopener noreferrer">
                    <svg className={styles.arrow}>
                      <use xlinkHref={`${svgIcons}${socialMedia.paypal.icon}`} />
                    </svg>
                  </a>
                </li>
                <li className={styles['social-media-item']}>
                  <a href={socialMedia.soundCloud.url} target="_blank" rel="noopener noreferrer">
                    <svg className="">
                      <use xlinkHref={`${svgIcons}${socialMedia.soundCloud.icon}`} />
                    </svg>
                  </a>
                </li>
                <li className={styles['social-media-item']}>
                  <a href={socialMedia.email.url} rel="noopener noreferrer">
                    <svg className="">
                      <use xlinkHref={`${svgIcons}${socialMedia.email.icon}`} />
                    </svg>
                  </a>
                </li>
                <li className={styles['social-media-item']}>
                  <svg className={styles.arrow}>
                    <use xlinkHref={`${svgIcons}#right-arrow`} />
                  </svg>
                </li>
              </ul>
            </div>
          </figure>
        </section>
        <div className={styles.wrapper}>
          <article className={styles.content}>
            <section className={styles['announcement-wrapper']}>
              <svg className={styles.icon}>
                <use xlinkHref={`${svgIcons}#megaphone`} />
              </svg>
              <span className="announcement-content">
            主题已经开源，客户端也上线啦~
              </span>
            </section>
            <section className={styles['new-release-wrapper']}>
              <h2 className={styles['new-release-tips']}>
                <svg className={styles.icon}>
                  <use xlinkHref={`${svgIcons}#flame`} />
                </svg>
                New Release!
              </h2>
              <div className={styles['new-release-container']}>
                <div className={styles['new-release']}>
                  <figure
                    className={styles['new-release-content']}
                    data-title="SAKURA"
                    data-intro="本站Wordpress主题"
                  >
                    <div className={styles.overlay} />
                  </figure>
                </div>
                <div className={styles['new-release']}>
                  <figure
                    className={styles['new-release-content']}
                    data-title="SAKURA"
                    data-intro="本站Wordpress主题"
                  >
                    <div className={styles.overlay} />
                  </figure>
                </div>
                <div className={styles['new-release']}>
                  <figure
                    className={styles['new-release-content']}
                    data-title="SAKURA"
                    data-intro="本站Wordpress主题"
                  >
                    <div className={styles.overlay} />
                  </figure>
                </div>
              </div>
            </section>
            <section className={styles['blog-summary-wrapper']}>
              <h2 className={styles['blog-summary-tips']}>
                <svg className={styles.icon}>
                  <use xlinkHref={`${svgIcons}#new`} />
                </svg>
                The Latest!
              </h2>
              <BlogSummary data={this.state.data} />
            </section>
          </article>
        </div>
      </main>
    );
  }
}
