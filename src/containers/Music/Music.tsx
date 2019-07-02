import * as React from 'react';
import cs from 'classnames';
import Title from '@components/Common/Title/Title';
import styles from './Music.module.scss';
import { webpSuffix, musicBg } from '@constants/constants';
import LiveTour from './LiveTours';
import FeaturedRecords from './FeaturedRecords';
import YacneyMusic from './YanceyMusic';
import MusicNotes from './MusicNotes';

class Music extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  public render() {
    const isWebp = window.localStorage.getItem('isWebp') === 'true';
    return (
      <main className={styles.music_wrapper}>
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
            <LiveTour />
          </section>
          <section>
            <h2 className={styles.column_title}>MUSIC NOTES</h2>
            <div className={cs(styles.artists_list)}>
              <MusicNotes />
            </div>
          </section>
        </div>
        <div className={styles.featured_records_wrapper}>
          <section className={styles.featured_records_container}>
            <h2 className={styles.column_title}>FEATURED RECORDS</h2>
            <FeaturedRecords />
          </section>
        </div>
        <section className={styles.yancey_music_container}>
          <h2 className={styles.column_title}>YANCEY MUSIC</h2>
          <div className={cs(styles.artists_list, styles.yancey_music_list)}>
            <YacneyMusic />
          </div>
        </section>
      </main>
    );
  }
}

export default Music;
