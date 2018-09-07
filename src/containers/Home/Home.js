import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import $ from 'jquery';
import styles from './home.module.css';
import svgIcons from '../../assets/image/yancey-official-blog-svg-icons.svg';
import BlogSummary from '../../components/BlogSummary/blogSummary';
import socialMedia from '../../utils/socialMedia';
import { GET } from '../../https/axios';


export default class Home extends Component {
  static addQrCode() {
    const twitter = document.getElementsByClassName('twitter')[0];
    const wechat = document.getElementsByClassName('wechat')[0];
    twitter.classList.add(styles['qr-code'], styles['twitter-qr-code']);
    wechat.classList.add(styles['qr-code'], styles['wechat-qr-code']);
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      newReleaseData: [],
      coverUrl: '',
      curCoverId: '',
      motto: '',
    };
  }

  componentWillMount() {}

  componentDidMount() {
    this.handleBigBannerHeight();
    this.switchNavbarBackgroundColor();
    Home.addQrCode();
    this.getNewReleaseData();
    this.getCoverData();
    this.getMottoData();
    this.getData();
  }

  componentWillUnmount() {
  }

  getMottoData = () => {
    GET('/mottoes', {})
      .then((res) => {
        this.setState({
          motto: res.data.content,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  getCoverData = () => {
    const params = {
      _id: window.localStorage.cover_id,
    };
    GET('/covers', params)
      .then((res) => {
        this.setState({
          coverUrl: res.data.url,
          curCoverId: res.data._id, // eslint-disable-line
        });
        window.localStorage.setItem('cover_id', res.data._id); // eslint-disable-line
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  getNewReleaseData = () => {
    GET('/projects', {})
      .then((res) => {
        this.setState({
          newReleaseData: res.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  getData() {
    GET('/articles', {})
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  handleBigBannerHeight = () => {
    const viewPortInit = $(window)
      .height();
    const homeBg = $('.home-big');
    homeBg.css('height', `${viewPortInit}px`);
    $(window)
      .on('resize scroll', function () {
        homeBg.css('height', `${$(this)
          .height()}px`);
      });
  };

  switchNavbarBackgroundColor = () => {
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
  };

  handleKeyDown = () => {};

  switchCover = (position, id) => {
    const params = {
      position,
    };
    GET(`/covers/${id}`, params)
      .then((res) => {
        this.setState({
          coverUrl: res.data.url,
          curCoverId: res.data._id, // eslint-disable-line
        });
        window.localStorage.setItem('cover_id', res.data._id); // eslint-disable-line
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    const {
      newReleaseData, coverUrl, curCoverId, motto, data,
    } = this.state;
    return (
      <main className={styles['yancey-blog-home']}>
        <section className="home-imax-wrapper">
          <figure
            className={cs([styles['home-imax']], 'home-big')}
            style={{ backgroundImage: `url(${coverUrl}?x-oss-process=image/format,webp)` }}
          >
            <h1
              className={styles.glitch}
              data-value="HI, YANCEY!"
            >
              HI, YANCEY!
            </h1>
            <div className={styles['social-media-container']}>
              <div className={styles['up-triangle']} />
              <p className={cs(styles['social-media-motto'], 'no-user-select')}>
                <svg className={cs(styles.icon, styles['left-quote'])}>
                  <use xlinkHref={`${svgIcons}#left-quote`} />
                </svg>
                {motto}
                <svg className={cs(styles.icon, styles['right-quote'])}>
                  <use xlinkHref={`${svgIcons}#right-quote`} />
                </svg>
              </p>
              <ul className={styles['social-media-list']}>
                <li
                  className={styles['social-media-item']}
                  onClick={() => this.switchCover('prev', curCoverId)}
                  onKeyDown={this.handleKeyDown}
                  role="tab"
                  tabIndex="0"
                >
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
                <li
                  className={styles['social-media-item']}
                  onClick={() => this.switchCover('next', curCoverId)}
                  onKeyDown={this.handleKeyDown}
                  role="tab"
                  tabIndex="0"
                >
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
                Object.keys(newReleaseData)
                  .map(key => (
                    <div className={styles['new-release']} key={key}>
                      <figure
                        className={styles['new-release-content']}
                        style={{ backgroundImage: `url(${newReleaseData[key].poster}?x-oss-process=image/format,webp)` }}
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
            <BlogSummary data={data} />
          </article>
          <article className={styles['show-more-btn-wrapper']}>
            <Link to="/blog">
              More
            </Link>
          </article>
        </section>
      </main>
    );
  }
}
