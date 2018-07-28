import React, { Component } from 'react';
import { observable, configure, action } from 'mobx';
import { observer } from 'mobx-react';
import cs from 'classnames';
import $ from 'jquery';
import styles from './home.module.css';
import svgIcons from '../../assets/image/yancey-official-blog-svg-icons.svg';
import BlogSummary from '../../components/Bussiness/BlogSummary/blogSummary';

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
  }
}

const store = new Store();

@observer
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.handleBigBannerHeight();
    this.switchNavbarBackgroundColor();
    store.setGreeting();
  }

  componentWillUnmount() {
  }

  handleBigBannerHeight() {
    const viewPortInit = $(window).height();
    const homeBg = $('.home-big');
    homeBg.css('height', `${viewPortInit}px`);
    $(window).on('resize scroll', function () {
      homeBg.css('height', `${$(this).height()}px`);
    });
  }

  switchNavbarBackgroundColor() {
    if ($(window).scrollTop() === 0) {
      $('header').addClass(styles['clear-navbar-bg']);
    }
    $(window).on('scroll', function () {
      if ($(this).scrollTop() === 0) {
        $('header').addClass(styles['clear-navbar-bg']);
      } else {
        $('header').removeClass(styles['clear-navbar-bg']);
      }
    });
  }

  render() {
    const socialMediaURL = {
      github: 'https://github.com/yanceyleo/',
      weibo: '',
      twitter: 'https://twitter.com/YanceyOfficial/',
      instagram: 'https://www.instagram.com/yancey_leo/',
      facebook: 'https://www.facebook.com/yanceyleo/',
      soundCloud: 'https://soundcloud.com/yancey-leo/',
      reddit: 'https://www.reddit.com/user/yanceyleo/',
      email: 'mailto:hi@yanceyleo.com',
      wechat: '',
    };
    return (
      <main className={styles['yancey-blog-home']}>
        <figure className={cs([styles['home-imax']], 'home-big')}>
          <h1
            className={styles.glitch}
            data-value={store.greeting}
          >
            { store.greeting }
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
                <a href={socialMediaURL.github} target="_blank" rel="noopener noreferrer">
                  <svg className="">
                    <use xlinkHref={`${svgIcons}#github`} />
                  </svg>
                </a>
              </li>
              <li className={styles['social-media-item']}>
                <a href={socialMediaURL.weibo} target="_blank" rel="noopener noreferrer">
                  <svg className="">
                    <use xlinkHref={`${svgIcons}#weibo`} />
                  </svg>
                </a>
              </li>
              <li className={styles['social-media-item']}>
                <a href={socialMediaURL.twitter} target="_blank" rel="noopener noreferrer">
                  <svg className="">
                    <use xlinkHref={`${svgIcons}#twitter`} />
                  </svg>
                </a>
              </li>
              <li className={styles['social-media-item']}>
                <a href={socialMediaURL.instagram} target="_blank" rel="noopener noreferrer">
                  <svg className="">
                    <use xlinkHref={`${svgIcons}#instagram`} />
                  </svg>
                </a>
              </li>
              <li className={styles['social-media-item']}>
                <a href={socialMediaURL.facebook} target="_blank" rel="noopener noreferrer">
                  <svg className="">
                    <use xlinkHref={`${svgIcons}#facebook`} />
                  </svg>
                </a>
              </li>
              <li className={styles['social-media-item']}>
                <a href={socialMediaURL.soundCloud} target="_blank" rel="noopener noreferrer">
                  <svg className="">
                    <use xlinkHref={`${svgIcons}#soundcloud`} />
                  </svg>
                </a>
              </li>
              <li className={styles['social-media-item']}>
                <a href={socialMediaURL.wechat} target="_blank" rel="noopener noreferrer">
                  <svg className={styles['icon-wechat']}>
                    <use xlinkHref={`${svgIcons}#wechat`} />
                  </svg>
                </a>
              </li>
              <li className={styles['social-media-item']}>
                <a href={socialMediaURL.email} rel="noopener noreferrer">
                  <svg className="">
                    <use xlinkHref={`${svgIcons}#note`} />
                  </svg>
                </a>
              </li>
              <li className={styles['social-media-item']}>
                <a href={socialMediaURL.github} target="_blank" rel="noopener noreferrer">
                  <svg className={styles.arrow}>
                    <use xlinkHref={`${svgIcons}#right-arrow`} />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </figure>
        <div className="empty" />
        <BlogSummary />
      </main>
    );
  }
}
