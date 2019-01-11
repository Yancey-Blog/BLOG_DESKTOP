import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import Helmet from 'react-helmet';
import Carousel from 'nuka-carousel';
import styles from './Music.module.scss';
import { webpSuffix, musicBg } from '../../constant/constant';
import { formatJSONDate } from '../../tools/tools';
import routePath from '../../constant/routePath';
import {
  IMusicProps,
  ILiveTours,
  IFeaturedRecords,
  IYanceyMusic,
} from '../../types/music';
import { IArticleDetail } from '../../types/article';

@inject('musicStore')
@inject('articleStore')
@observer
class Music extends React.Component<IMusicProps, {}> {
  constructor(props: IMusicProps) {
    super(props);
    this.state = {};
  }

  public componentWillMount() {
    window.scrollTo(0, 0);
  }

  public componentDidMount() {
    const { musicStore, articleStore } = this.props;
    musicStore!.getLiveTours();
    musicStore!.getFeaturedRecords();
    musicStore!.getYanceyMusic();
    articleStore!.getPostsByTag('Music');
  }

  public render() {
    const { musicStore, articleStore } = this.props;
    const isWebp = window.localStorage.isWebp === 'true';
    return (
      <main className={cs(styles.music_wrapper, 'no-user-select')}>
        <Helmet>
          <title>ミュージック | Yancey Inc.</title>
        </Helmet>
        <figure
          className={styles.bg_cover}
          style={{
            backgroundImage: `url(${
              isWebp ? `${musicBg}${webpSuffix}` : musicBg
            })`,
          }}
        >
          <h1>ミュージック</h1>
          <p>夢を歌おう~</p>
        </figure>
        <div className={styles.live_tours_artists_wrapper}>
          <section className={styles.live_tour_container}>
            <h1 className={styles.column_title}>LIVE TOURS</h1>
            {/* if the version of "@types/nuka-carousel" you installed is v4.4.0, 
            you must add the following code in CarouselProps:

            transitionMode: 'scroll' | 'fade'; 
            */}

            <Carousel
              autoplay
              autoplayInterval={2000}
              transitionMode='fade'
              wrapAround
            >
              {musicStore!.liveToursData.map((liveTour: ILiveTours) => (
                <div
                  className={cs(
                    styles.post_container,
                    styles.live_tours_container,
                  )}
                  key={liveTour._id}
                >
                  <img
                    key={liveTour._id}
                    src={
                      isWebp
                        ? `${liveTour.poster}${webpSuffix}`
                        : liveTour.poster
                    }
                    alt={liveTour.title}
                  />
                  <div className={styles.meta_intro}>
                    <time className={styles.meta_date}>
                      {formatJSONDate(liveTour.upload_date).slice(0, 10)}
                    </time>
                    <p
                      className={cs(styles.meta_title, styles.live_tour_title)}
                    >
                      {liveTour.title}
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          </section>
          <section>
            <h1 className={styles.column_title}>MUSIC NOTES</h1>
            <ul className={cs(styles.artists_list)}>
              {articleStore!.posts.map((item: IArticleDetail) => (
                <li
                  className={cs(styles.post_container, styles.artist_item)}
                  key={item._id}
                >
                  <img
                    src={
                      isWebp
                        ? `${item.header_cover}${webpSuffix}`
                        : item.header_cover
                    }
                    alt={item.title}
                  />
                  <div className={cs(styles.meta_intro, styles.artist_intro)}>
                    <time className={styles.meta_date}>
                      {formatJSONDate(item.publish_date).slice(0, 10)}
                    </time>
                    <p className={cs(styles.meta_title, styles.artist_title)}>
                      {item.summary}
                    </p>
                    <hr className={styles.music_split} />
                    <Link
                      to={`${routePath.blogDetail}${item._id}`}
                      className={styles.music_btn}
                    >
                      READ MORE
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className={styles.featured_records_wrapper}>
          <section className={styles.featured_records_container}>
            <h1 className={styles.column_title}>FEATURED RECORDS</h1>
            <ul className={styles.featured_records_list}>
              {musicStore!.featuredRecordsData.map((item: IFeaturedRecords) => (
                <li className={styles.featured_record_item} key={item._id}>
                  <figure
                    className={styles.record_cover}
                    style={{
                      backgroundImage: `url(${
                        isWebp ? `${item.cover}${webpSuffix}` : item.cover
                      })`,
                    }}
                  />
                  <div className={styles.record_intro}>
                    <time className={styles.meta_date}>
                      {formatJSONDate(item.release_date).split(' ')[0]}
                    </time>
                    <p className={cs(styles.record_title, styles.meta_title)}>
                      {item.album_name}
                      <br />
                      <span className={styles.meta_title_artist}>
                        {item.artist}
                      </span>
                    </p>
                    <hr className={styles.music_split} />
                    <a
                      href={item.buy_url}
                      className={styles.music_btn}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      BUY NOW
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <section className={styles.yancey_music_container}>
          <h1 className={styles.column_title}>YANCEY MUSIC</h1>
          <ul className={cs(styles.artists_list, styles.yancey_music_list)}>
            {musicStore!.yanceyMusicData.map((item: IYanceyMusic) => (
              <li
                className={cs(styles.post_container, styles.artist_item)}
                key={item._id}
              >
                <img
                  src={isWebp ? `${item.cover}${webpSuffix}` : item.cover}
                  alt={item.title}
                />
                <div className={cs(styles.meta_intro, styles.artist_intro)}>
                  <time className={styles.meta_date}>
                    {formatJSONDate(item.release_date).split(' ')[0]}
                  </time>
                  <p className={cs(styles.meta_title, styles.artist_title)}>
                    {item.title}
                  </p>
                  <hr className={styles.music_split} />
                  <a
                    href={item.soundCloud_url}
                    className={styles.music_btn}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    LISTEN
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default Music;
