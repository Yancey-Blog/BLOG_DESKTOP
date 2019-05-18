import * as React from 'react';
import { observer, inject } from 'mobx-react';
import cs from 'classnames';
import Carousel from 'nuka-carousel';
import styles from './Music.module.scss';
import { webpSuffix } from 'constants/constants';
import { formatJSONDate } from 'tools/tools';
import Skeleton from 'components/Skeletons/LiveTourSkeleton/Skeletons';
import { IMusicProps, ILiveTours } from '../../types/music';

@inject('musicStore')
@observer
class LiveTour extends React.Component<IMusicProps, {}> {
  constructor(props: IMusicProps) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    const { musicStore } = this.props;
    musicStore!.getLiveTours();
  }

  public render() {
    const { musicStore } = this.props;

    const isWebp = window.localStorage.getItem('isWebp') === 'true';
    return (
      <>
        {musicStore!.isLiveToursLoading ? (
          <Skeleton />
        ) : (
          <Carousel
            autoplay
            autoplayInterval={2000}
            transitionMode="fade"
            wrapAround
          >
            {musicStore!.liveTours.map((liveTour: ILiveTours) => (
              <div
                className={cs(
                  styles.post_container,
                  styles.live_tours_container
                )}
                key={liveTour._id}
              >
                <img
                  key={liveTour._id}
                  src={
                    isWebp ? `${liveTour.poster}${webpSuffix}` : liveTour.poster
                  }
                  alt={liveTour.title}
                />
                <div className={styles.meta_intro}>
                  <time className={styles.meta_date}>
                    {formatJSONDate(liveTour.upload_date).slice(0, 10)}
                  </time>
                  <p className={cs(styles.meta_title, styles.live_tour_title)}>
                    {liveTour.title}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </>
    );
  }
}

export default LiveTour;
