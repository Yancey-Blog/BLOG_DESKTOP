import * as React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { inject, observer } from 'mobx-react/index';
import cs from 'classnames';
import { socialMedia, webpSuffix } from '../../constant/constant';
import routePath from '../../constant/routePath';
import svgIcons from '../../assets/images/yancey-official-blog-svg-icons.svg';
import styles from './Home.module.scss';
import { IHomeProps } from '../../types/home';
import PostSummary from '../../components/Post/PostSummary/PostSummary';

@inject('homeStore')
@inject('articleStore')
@observer
class Home extends React.Component<IHomeProps, {}> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {};
  }

  public componentWillMount() {
    window.scrollTo(0, 0);
  }

  public componentDidMount() {
    const { homeStore, articleStore } = this.props;
    homeStore!.getCoverData();
    homeStore!.getMottoData();
    homeStore!.getProjectData();
    homeStore!.getAnnouncementData();
    articleStore!.getPostsByPage();
  }

  public render() {
    const { homeStore } = this.props;
    const isWebp = window.localStorage.isWebp === 'true';
    return (
      <main className={styles['yancey-blog-home']}>
        <Helmet>
          <title>Yancey Official Blog | Yancey Inc.</title>
        </Helmet>
        <section className='home-imax-wrapper'>
          <figure id='background' className={styles['home-imax']}>
            <h1 className={styles.glitch} data-value='HI, YANCEY!'>
              HI, YANCEY!
            </h1>
            <div className={styles['social-media-container']}>
              <div className={styles['up-triangle']} />
              <p className={cs(styles['social-media-motto'], 'no-user-select')}>
                <svg className={cs(styles.icon, styles['left-quote'])}>
                  <use xlinkHref={`${svgIcons}#left-quote`} />
                </svg>
                {homeStore!.motto}
                <svg className={cs(styles.icon, styles['right-quote'])}>
                  <use xlinkHref={`${svgIcons}#right-quote`} />
                </svg>
              </p>
              <ul className={styles['social-media-list']}>
                <li
                  className={styles['social-media-item']}
                  onClick={() => homeStore!.getCoverData('prev')}
                >
                  <svg className={styles.arrow}>
                    <use xlinkHref={`${svgIcons}#left-arrow`} />
                  </svg>
                </li>
                {Object.keys(socialMedia).map(key => (
                  <li
                    className={cs(
                      styles['social-media-item'],
                      key === 'twitter' || key === 'wechat'
                        ? styles['qr-code']
                        : '',
                      key === 'twitter' ? styles['twitter-qr-code'] : '',
                      key === 'wechat' ? styles['wechat-qr-code'] : '',
                    )}
                    key={key}
                  >
                    <a
                      href={socialMedia[key].url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <svg className={`icon-${socialMedia[key]}`}>
                        <use
                          xlinkHref={`${svgIcons}${socialMedia[key].icon}`}
                        />
                      </svg>
                    </a>
                  </li>
                ))}
                <li
                  className={styles['social-media-item']}
                  onClick={() => homeStore!.getCoverData('next')}
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
            <span className='announcement-content'>
              {homeStore!.announcement}
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
              {homeStore!.projects.map((item, key) => (
                <div className={styles['new-release']} key={item._id}>
                  <a href={item.url} target='_blank' rel='noopener noreferrer'>
                    <figure
                      className={styles['new-release-content']}
                      style={{
                        backgroundImage: `url(${
                          isWebp ? `${item.poster}${webpSuffix}` : item.poster
                        })`,
                      }}
                      data-title={item.title}
                      data-intro={item.introduction}
                    >
                      <div className={styles.overlay} />
                    </figure>
                  </a>
                </div>
              ))}
            </div>
          </article>
          <article className={styles['blog-summary-wrapper']}>
            <h2 className={styles['blog-summary-tips']}>
              <svg className={styles.icon}>
                <use xlinkHref={`${svgIcons}#new`} />
              </svg>
              The Latest!
            </h2>
            <PostSummary />
          </article>
          <article className={styles['show-more-btn-wrapper']}>
            <Link to={routePath.blog}>More</Link>
          </article>
        </section>
      </main>
    );
  }
}

export default Home;
