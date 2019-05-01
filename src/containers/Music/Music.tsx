import * as React from 'react';
import { observer, inject } from 'mobx-react';
import cs from 'classnames';
import Title from '@components/Common/Title/Title';
import Carousel from 'nuka-carousel';
import styles from './Music.module.scss';
import { webpSuffix, musicBg } from '@constants/constants';
import { formatJSONDate } from '@tools/tools';
import Card from '@components/Music/Card';
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
    const { articleStore } = this.props;
    articleStore!.posts = [];
  }

  public componentDidMount() {
    const { musicStore, articleStore } = this.props;
    musicStore!.getLiveTours();
    musicStore!.getFeaturedRecords();
    musicStore!.getYanceyMusic();
    articleStore!.getPostsByTag('Music');
  }

  public render() {
    const {
      musicStore: { liveTours, featuredRecords, yanceyMusic },
      articleStore: { posts },
    } = this.props;

    const isWebp = window.localStorage.isWebp === 'true';
    return (
      <main className={cs(styles.music_wrapper, 'no-user-select')}>
        <Title title='ミュージック' />
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
            <h2 className={styles.column_title}>LIVE TOURS</h2>
            <Carousel
              autoplay
              autoplayInterval={2000}
              transitionMode='fade'
              wrapAround
            >
              {liveTours.map((liveTour: ILiveTours) => (
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
            <h2 className={styles.column_title}>MUSIC NOTES</h2>
            <div className={cs(styles.artists_list)}>
              {posts.map((item: IArticleDetail) => (
                <Card
                  type='note'
                  key={item._id}
                  url={item._id}
                  title={item.summary}
                  date={item.publish_date}
                  cover={item.header_cover}
                />
              ))}
            </div>
          </section>
        </div>
        <div className={styles.featured_records_wrapper}>
          <section className={styles.featured_records_container}>
            <h2 className={styles.column_title}>FEATURED RECORDS</h2>
            <ul className={styles.featured_records_list}>
              {featuredRecords.map((item: IFeaturedRecords) => (
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
          <h2 className={styles.column_title}>YANCEY MUSIC</h2>
          <div className={cs(styles.artists_list, styles.yancey_music_list)}>
            {yanceyMusic.map((item: IYanceyMusic) => (
              <Card
                type='yanceyMusic'
                key={item._id}
                url={item.soundCloud_url}
                title={item.title}
                date={item.release_date}
                cover={item.cover}
              />
            ))}
          </div>
        </section>
      </main>
    );
  }
}

export default Music;
