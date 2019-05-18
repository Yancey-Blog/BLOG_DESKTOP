import * as React from 'react';
import { observer, inject } from 'mobx-react';
import cs from 'classnames';
import styles from './Music.module.scss';
import { webpSuffix } from 'constants/constants';
import Skeleton from 'components/Skeletons/FeaturedRecordSkeleton/Skeletons';
import { formatJSONDate } from 'tools/tools';
import { IMusicProps, IFeaturedRecords } from '../../types/music';

@inject('musicStore')
@observer
class FeaturedRecords extends React.Component<IMusicProps, {}> {
  constructor(props: IMusicProps) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    const { musicStore } = this.props;
    musicStore!.getFeaturedRecords();
  }

  public render() {
    const { musicStore } = this.props;

    const isWebp = window.localStorage.getItem('isWebp') === 'true';
    return (
      <ul className={styles.featured_records_list}>
        {musicStore!.isFeaturedRecordLoading ? (
          <Skeleton />
        ) : (
          musicStore!.featuredRecords.map((item: IFeaturedRecords) => (
            <li className={styles.featured_record_item} key={item._id}>
              <figure
                className={styles.record_cover}
                style={{
                  backgroundImage: `url(${
                    isWebp ? `${item.cover}${webpSuffix}` : item.cover
                  })`
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BUY NOW
                </a>
              </div>
            </li>
          ))
        )}
      </ul>
    );
  }
}

export default FeaturedRecords;
