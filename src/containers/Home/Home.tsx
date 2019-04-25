import * as React from 'react';
import { Link } from 'react-router-dom';
import Title from '@components/Common/Title/Title';
import { inject, observer } from 'mobx-react/index';
import cs from 'classnames';
import { socialMedia, webpSuffix, svgSprite } from '@constants/constants';
import routePath from '@constants/routePath';
import svgIcons from '@assets/images/yancey-official-blog-svg-icons.svg';
import PostSummary from '@components/Post/PostSummary/PostSummary';
import styles from './Home.module.scss';
import { IHomeProps } from '../../types/home';

@inject('homeStore')
@inject('articleStore')
@observer
class Home extends React.Component<IHomeProps, {}> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    const { homeStore, articleStore } = this.props;
    homeStore!.getCover();
    homeStore!.getMotto();
    homeStore!.getProject();
    homeStore!.getAnnouncement();
    articleStore!.getPostsByPage();
  }

  public render() {
    const { homeStore } = this.props;
    const isWebp = window.localStorage.isWebp === 'true';
    return (
      <main className={styles.yancey_blog_home}>
        <Title title='Yancey Official Blog' />
        <section id='background' className={styles.ad_wrapper}>
          <h1 className={styles.glitch} data-value='HI, YANCEY!'>
            HI, YANCEY!
          </h1>
          <div className={styles.social_media_container}>
            <div className={styles.up_triangle} />
            <p className={cs(styles.social_media_motto, 'no-user-select')}>
              <svg className={cs(styles.icon, styles.left_quote)}>
                <use xlinkHref={`${svgIcons}${svgSprite.leftQuote}`} />
              </svg>
              <span className={styles.motto_content}>{homeStore!.motto}</span>
              <svg className={cs(styles.icon, styles.right_quote)}>
                <use xlinkHref={`${svgIcons}${svgSprite.rightQuote}`} />
              </svg>
            </p>
            <ul className={styles.social_media_list}>
              <li
                className={styles.social_media_item}
                onClick={() => homeStore!.getCover('prev')}
              >
                <svg className={styles.arrow}>
                  <use xlinkHref={`${svgIcons}${svgSprite.leftArrow}`} />
                </svg>
              </li>
              {Object.keys(socialMedia).map(key => (
                <li
                  className={cs(
                    styles.social_media_item,
                    key === 'twitter' || key === 'wechat' ? styles.qr_code : '',
                    key === 'twitter' ? styles.twitter_qr_code : '',
                    key === 'wechat' ? styles.wechat_qr_code : '',
                  )}
                  key={key}
                >
                  <a
                    href={socialMedia[key].url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg className={`icon-${socialMedia[key]}`}>
                      <use xlinkHref={`${svgIcons}${socialMedia[key].icon}`} />
                    </svg>
                  </a>
                </li>
              ))}
              <li
                className={styles.social_media_item}
                onClick={() => homeStore!.getCover('next')}
              >
                <svg className={styles.arrow}>
                  <use xlinkHref={`${svgIcons}${svgSprite.rightArrow}`} />
                </svg>
              </li>
            </ul>
          </div>
        </section>
        {/* main */}
        <section className={styles.content}>
          {/* announcement */}
          <article className={styles.announcement_wrapper}>
            <svg className={styles.icon}>
              <use xlinkHref={`${svgIcons}${svgSprite.megaphone}`} />
            </svg>
            <span>{homeStore!.announcement}</span>
          </article>
          {/* projects */}
          <article className={styles.new_release_wrapper}>
            <h2 className={styles.new_release_tips}>
              <svg className={styles.icon}>
                <use xlinkHref={`${svgIcons}${svgSprite.fire}`} />
              </svg>
              New Release!
            </h2>
            <div className={styles.new_release_container}>
              {homeStore!.projects.map((item, key) => (
                <div className={styles.new_release} key={item._id}>
                  <a href={item.url} target='_blank' rel='noopener noreferrer'>
                    <figure
                      className={styles.new_release_content}
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
          {/* new post summary */}
          <article className={styles.blog_summary_wrapper}>
            <h2 className={styles.blog_summary_tips}>
              <svg className={styles.icon}>
                <use xlinkHref={`${svgIcons}${svgSprite.new}`} />
              </svg>
              The Latest!
            </h2>
            <PostSummary />
          </article>
          <article className={styles.show_more_btn_wrapper}>
            <Link to={routePath.blog}>More</Link>
          </article>
        </section>
      </main>
    );
  }
}

export default Home;
