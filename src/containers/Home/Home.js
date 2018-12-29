import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { inject, observer } from 'mobx-react/index';
import cs from 'classnames';
import styles from './home.module.css';
import svgIcons from '../../assets/image/yancey-official-blog-svg-icons.svg';
import BlogSummary from '../../components/BlogSummary/BlogSummary';
import socialMedia from '../../utils/socialMedia';
import { webp } from '../../utils/tools';

@inject('homeStore')
@inject('articleStore')
@observer
class Home extends Component {
  static addQrCode() {
    const twitter = document.getElementsByClassName('twitter')[0];
    const wechat = document.getElementsByClassName('wechat')[0];
    twitter.classList.add(styles['qr-code'], styles['twitter-qr-code']);
    wechat.classList.add(styles['qr-code'], styles['wechat-qr-code']);
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const { articleStore, homeStore } = this.props;
    homeStore.getCoverData();
    articleStore.getSummaryData();
    homeStore.getLatestMotto();
    homeStore.getNewReleaseData();
    homeStore.getAnnouncementData();
    Home.addQrCode();
  }

  handleKeyDown = () => {
  };

  render() {
    const { homeStore } = this.props;
    const isWebp = window.localStorage.isWebp;
    return (
      <main className={styles['yancey-blog-home']}>
        <Helmet>
          <title>
            Yancey Official Blog | Yancey Inc.
          </title>
        </Helmet>
        <section className="home-imax-wrapper">
          <figure
            className={styles['home-imax']}
            style={{ backgroundImage: `url(${isWebp ? `${homeStore.coverUrl}${webp}` : homeStore.coverUrl})` }}
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
                {homeStore.mottoData}
                <svg className={cs(styles.icon, styles['right-quote'])}>
                  <use xlinkHref={`${svgIcons}#right-quote`} />
                </svg>
              </p>
              <ul className={styles['social-media-list']}>
                <li
                  className={styles['social-media-item']}
                  onClick={() => homeStore.switchCoverData('prev', homeStore.curCoverId)}
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
                  onClick={() => homeStore.switchCoverData('next', homeStore.curCoverId)}
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
              {homeStore.announcementData}
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
                Object.keys(homeStore.newReleaseData)
                  .map(key => (
                    <div className={styles['new-release']} key={key}>
                      <a
                        href={homeStore.newReleaseData[key].url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <figure
                          className={styles['new-release-content']}
                          style={{ backgroundImage: `url(${homeStore.newReleaseData[key].poster}?x-oss-process=image/format,webp)` }}
                          data-title={homeStore.newReleaseData[key].title}
                          data-intro={homeStore.newReleaseData[key].introduction}
                        >
                          <div className={styles.overlay} />
                        </figure>
                      </a>
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
            <BlogSummary />
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

export default Home;
