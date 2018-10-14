import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react/index';
import cs from 'classnames';
import Carousel from 'nuka-carousel';
import styles from './music.module.css';
import {
  aliOSS, checkWebp, webp, formatJSONDate,
} from '../../utils/tools';
import articleStore from '../../stores/ArticleStore';

@inject('musicStore')
@inject('articleStore')
@observer
class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const { musicStore, articleStore } = this.props;
    musicStore.getLiveToursData();
    musicStore.getRecordsData();
    musicStore.getYanceyMusicData();
    articleStore.getMusicData();
  }

  componentWillUnmount() {
  }

  handleLoadImage = () => {
    this.carousel.setDimensions();
  };

  render() {
    const { musicStore } = this.props;
    const bgUrl = `${aliOSS}/static/music_page_header.jpg`;
    return (
      <main className={cs(styles.music_wrapper, 'no-user-select')}>
        <Helmet>
          <title>
            ミュージック | Yancey Inc.
          </title>
        </Helmet>
        <figure
          className={styles.bg_cover}
          style={{ backgroundImage: `url(${checkWebp() ? `${bgUrl}${webp}` : bgUrl})` }}
        >
          <h1>
            ミュージック
          </h1>
          <p>
            夢を歌おう~
          </p>
        </figure>
        <div className={styles.live_tours_artists_wrapper}>
          <section>
            <h1 className={styles.column_title}>
              LIVE TOURS
            </h1>
            <Carousel
              ref={c => this.carousel = c} /* eslint-disable-line */
              autoplay
              autoplayInterval={2000}
              transitionMode="fade"
              wrapAround
            >
              {
                Object.keys(musicStore.liveTourData)
                  .map(key => (
                    <div className={cs(styles.post_container, styles.live_tours_container)} key={key}>
                      <img
                        key={key}
                        src={checkWebp() ? `${musicStore.liveTourData[key].poster}?x-oss-process=image/format,webp` : musicStore.liveTourData[key].poster}
                        onLoad={this.handleLoadImage}
                        alt={musicStore.liveTourData[key].title}
                      />
                      <div className={styles.meta_intro}>
                        <time className={styles.meta_date}>
                          {formatJSONDate(musicStore.liveTourData[key].upload_date).slice(0, 10)}
                        </time>
                        <p className={cs(styles.meta_title, styles.live_tour_title)}>
                          {musicStore.liveTourData[key].title}
                        </p>
                      </div>
                    </div>
                  ))
              }
            </Carousel>
          </section>
          <section>
            <h1 className={styles.column_title}>
              MUSIC NOTES
            </h1>
            <ul className={cs(styles.artists_list)}>
              {
                Object.keys(articleStore.musicData).map(key => (
                  <li className={cs(styles.post_container, styles.artist_item)} key={key}>
                    <img
                      src={articleStore.musicData[key].header_cover}
                      alt={articleStore.musicData[key].title}
                    />
                    <div className={cs(styles.meta_intro, styles.artist_intro)}>
                      <time className={styles.meta_date}>
                        {formatJSONDate(articleStore.musicData[key].publish_date).slice(0, 10)}
                      </time>
                      <p className={cs(styles.meta_title, styles.artist_title)}>
                        {articleStore.musicData[key].summary}
                      </p>
                      <hr className={styles.music_split} />
                      <Link
                        to={`/p/${articleStore.musicData[key]._id}`}
                        className={styles.music_btn}
                      >
                        READ MORE
                      </Link>
                    </div>
                  </li>
                ))
              }
            </ul>
          </section>
        </div>
        <div className={styles.featured_records_wrapper}>
          <section className={styles.featured_records_container}>
            <h1 className={styles.column_title}>
              FEATURED RECORDS
            </h1>
            <ul className={styles.featured_records_list}>
              {
                Object.keys(musicStore.featuredRecordData).map(key => (
                  <li className={styles.featured_record_item} key={key}>
                    <figure
                      className={styles.record_cover}
                      style={{ backgroundImage: `url(${musicStore.featuredRecordData[key].cover})` }}
                    />
                    <div className={styles.record_intro}>
                      <time className={styles.meta_date}>
                        {formatJSONDate(musicStore.featuredRecordData[key].release_date).split(' ')[0]}
                      </time>
                      <p className={cs(styles.record_title, styles.meta_title)}>
                        {musicStore.featuredRecordData[key].album_name}
                        <br />
                        <span className={styles.meta_title_artist}>
                          {musicStore.featuredRecordData[key].artist}
                        </span>
                      </p>
                      <hr className={styles.music_split} />
                      <a
                        href={musicStore.featuredRecordData[key].buy_url}
                        className={styles.music_btn}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BUY NOW
                      </a>
                    </div>
                  </li>
                ))
              }
            </ul>
          </section>
        </div>
        <section className={styles.yancey_music_container}>
          <h1 className={styles.column_title}>
            YANCEY MUSIC
          </h1>
          <ul className={cs(styles.artists_list, styles.yancey_music_list)}>
            {
              Object.keys(musicStore.yanceyMusicData).map(key => (
                <li className={cs(styles.post_container, styles.artist_item)} key={key}>
                  <img
                    src={musicStore.yanceyMusicData[key].cover}
                    alt={musicStore.yanceyMusicData[key].title}
                  />
                  <div className={cs(styles.meta_intro, styles.artist_intro)}>
                    <time className={styles.meta_date}>
                      {formatJSONDate(musicStore.yanceyMusicData[key].release_date).split(' ')[0]}
                    </time>
                    <p className={cs(styles.meta_title, styles.artist_title)}>
                      {musicStore.yanceyMusicData[key].title}
                    </p>
                    <hr className={styles.music_split} />
                    <a
                      href={musicStore.yanceyMusicData[key].soundCloud_url}
                      className={styles.music_btn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LISTEN
                    </a>
                  </div>
                </li>
              ))
            }
          </ul>
        </section>
      </main>
    );
  }
}

export default Music;
