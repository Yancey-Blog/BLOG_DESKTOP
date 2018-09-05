import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import Carousel from 'nuka-carousel';
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
    this.getData();
  }

  componentDidMount() {

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

  _handleLoadImage = () => {
    this.carousel.setDimensions();
  };

  render() {
    const { data } = this.state;
    return (
      <main className={styles.music_wrapper}>
        <figure className={styles.bg_cover}/>
        <div className={styles.live_tours_wrapper}>
          <section className={styles.slider_wrapper}>
            <h1 className={styles.title}>
              LIVE TOUR
            </h1>
            <div className={styles.slider_container}>
              <Carousel
                ref={c => this.carousel = c} /* eslint-disable-line */
                autoplay
                autoplayInterval={2000}
                transitionMode="fade"
                wrapAround
              >
                {
                  Object.keys(data)
                    .map(key => (
                      <div>
                        <img
                          key={key}
                          src={checkWebp() ? `${data[key].poster}` : data[key].poster}
                          onLoad={this._handleLoadImage} /* eslint-disable-line */
                          alt={data[key].title}
                        />
                        <div className={styles.live_tour_meta}>
                          <time className={styles.live_tour_date}>
                            {data[key].publish_date}
                          </time>
                          <p className={styles.live_tour_title}>
                            {data[key].title}
                          </p>
                        </div>
                      </div>
                    ))
                }
              </Carousel>
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
