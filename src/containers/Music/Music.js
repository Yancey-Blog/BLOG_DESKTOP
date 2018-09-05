import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import styles from './music.module.css';
import { GET } from '../../https/axios';
import { checkWebp } from '../../utils/tools';

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.getData();
    this.configSwiper();
  }

  componentWillUnmount() {
  }

  getData = () => {
    GET('/articles', {})
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  configSwiper = () => {
    const swiper = new Swiper('.swiper-container', {
      // effect: 'fade',
      // loop: true,
      // autoplay: true,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <main className={styles.music_wrapper}>
        <figure className={styles.bg_cover} />
        <div className={styles.live_tours_wrapper}>
          <section className={styles.swiper_wrapper}>
            <h1 className={styles.title}>
              LIVE TOUR
            </h1>
            <div className={cs(styles.swiper, 'swiper-container')}>
              <div className="swiper-wrapper">
                {
                  Object.keys(data)
                    .map(key => (
                      <div
                        key={key}
                        className="swiper-slide"
                        style={{ background: `url(${checkWebp() ? `${data[key].poster}?x-oss-process=image/format,webp` : data[key].poster})` }}
                      />
                    ))
                }
              </div>
              <div className="swiper-button-prev" />
              <div className="swiper-button-next" />
            </div>
          </section>
          <section className={styles.artists_wrapper}>
            <h1 className={styles.title}>
              ARTISTS
            </h1>
          </section>
        </div>
      </main>
    );
  }
}

export default Music;
