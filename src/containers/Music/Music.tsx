import * as React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/scss/swiper.scss';
import styles from './Music.module.scss';
import { observer, inject } from 'mobx-react';
import { IMusicProps, ILiveTours } from '../../types/music';

import FeaturedRecord from '../../components/FeaturedRecord/FeaturedRecord';
import YanceyMusic from '../../components/YanceyMusic/YanceyMusic';

@inject('musicStore')
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
    const { musicStore } = this.props;
    musicStore!.getLiveTours();
    musicStore!.getFeaturedRecords();
    musicStore!.getYanceyMusic();
  }

  public render() {
    const { musicStore } = this.props;
    const params = {
      spaceBetween: 30,
      centeredSlides: true,
      effect: 'fade',
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    };

    return (
      <section className={styles.music_wrapper}>
        <Swiper {...params}>
          {musicStore!.liveToursData.map((item: ILiveTours, index: number) => (
            <img src={item.poster} alt={item.title} key={index} />
          ))}
        </Swiper>
        <div className={styles.music_container}>
          <FeaturedRecord />
          <YanceyMusic />
        </div>
      </section>
    );
  }
}

export default Music;
