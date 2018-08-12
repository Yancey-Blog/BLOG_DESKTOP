import React, { Component } from 'react';
import cs from 'classnames';
import $ from 'jquery';
import Parallax from 'parallax-js';
import styles from './home.module.css';
import svgIcons from '../../assets/image/yancey-official-blog-svg-icons.svg';
import BlogSummary from '../../components/BlogSummary/blogSummary';
import socialMedia from '../../utils/socialMedia';
import { GET } from '../../https/axios';

const Mock = require('mockjs');


export default class Home extends Component {
  static addQrCode() {
    const twitter = document.getElementsByClassName('twitter')[0];
    const messenger = document.getElementsByClassName('messenger')[0];
    const wechat = document.getElementsByClassName('wechat')[0];
    twitter.classList.add(styles['qr-code'], styles['twitter-qr-code']);
    messenger.classList.add(styles['qr-code'], styles['messenger-qr-code']);
    wechat.classList.add(styles['qr-code'], styles['wechat-qr-code']);
  }

  static parallax() {
    const scene = document.getElementById('aaaa');
    const parallaxInstance = new Parallax(scene);
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      newReleaseData: [],
    };
  }

  componentWillMount() {
    this.fakeData();
  }

  componentDidMount() {
    this.handleBigBannerHeight();
    this.switchNavbarBackgroundColor();
    Home.parallax();
    Home.addQrCode();
    this.getNewReleaseData();
  }

  componentWillUnmount() {
  }

  getNewReleaseData() {
    GET('/projects', {}).then((res) => {
      this.setState({
        newReleaseData: res.data,
      });
    }).catch((error) => {
      console.log(error.message);
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

  render() {
    const { newReleaseData } = this.state;
    return (
      <main className={styles['yancey-blog-home']}>
        <section className="home-imax-wrapper">
          <figure className={cs([styles['home-imax']], 'home-big')}>
            <h1
              className={styles.glitch}
              data-value="Hi, Yanceyです!"
            >
              Hi, Yanceyです!
            </h1>
            <div className={styles['social-media-container']}>
              <div className="up-triangle" />
              <p className={cs(styles['social-media-motto'], 'no-user-select')}>
                「 You got to put the past behind you before you can move on. 」
              </p>
              <ul className={styles['social-media-list']}>
                <li className={styles['social-media-item']}>
                  <svg className={styles.arrow}>
                    <use xlinkHref={`${svgIcons}#left-arrow`} />
                  </svg>
                </li>
                {
                  Object.keys(socialMedia)
                    .map(key => (
                      <li className={cs(styles['social-media-item'], key)} key={key}>
                        <a href={socialMedia[key].url} target="_blank" rel="noopener noreferrer">
                          <svg className={`icon-${socialMedia[key]}`}>
                            <use xlinkHref={`${svgIcons}${socialMedia[key].icon}`} />
                          </svg>
                        </a>
                      </li>
                    ))
                }
                <li className={styles['social-media-item']}>
                  <svg className={styles.arrow}>
                    <use xlinkHref={`${svgIcons}#right-arrow`} />
                  </svg>
                </li>
              </ul>
            </div>
          </figure>
        </section>
        <section className={styles.content}>
          <article className={styles['announcement-wrapper']}>
            <svg className={styles.icon}>
              <use xlinkHref={`${svgIcons}#megaphone`} />
            </svg>
            <span className="announcement-content">
            主题已经开源，客户端也上线啦~
            </span>
          </article>
          <article className={styles['new-release-wrapper']}>
            <h2 className={styles['new-release-tips']}>
              <svg className={styles.icon}>
                <use xlinkHref={`${svgIcons}#flame`} />
              </svg>
                New Release!
            </h2>
            <div className={styles['new-release-container']}>
              {
                Object.keys(newReleaseData).map(key => (
                  <div className={styles['new-release']} key={key}>
                    <figure
                      className={styles['new-release-content']}
                      style={{ backgroundImage: `url(${newReleaseData[key].poster})` }}
                      data-title={newReleaseData[key].title}
                      data-intro={newReleaseData[key].introduction}
                    >
                      <div className={styles.overlay} />
                    </figure>
                  </div>
                ))
              }
            </div>
          </article>
          <article className={styles['blog-summary-wrapper']}>
            <h2 className={styles['blog-summary-tips']}>
              <svg className={styles.icon}>
                <use xlinkHref={`${svgIcons}#new`} />
              </svg>
                The Latest!
            </h2>
            <BlogSummary data={this.state.data} />
          </article>
          <article className={styles['show-more-btn-wrapper']}>
            <a href="/blog">
              More
            </a>
          </article>
        </section>
        <section id="aaaa" data-depth="1.00" style={{ position: 'absolute', top: 0, zIndex: -1 }}>
          <figure data-depth="1.00">
            <img src="http://bnsh.bandainamcoasia.com/pc/Public/imgs/bg_icon.png" alt="n" />
          </figure>
        </section>
      </main>
    );
  }
}
