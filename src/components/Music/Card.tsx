import * as React from 'react';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import styles from './Card.module.scss';
import { webpSuffix } from '@constants/constants';
import { formatJSONDate } from '@tools/tools';
import routePath from '@constants/routePath';
import { ICardProps } from '../../types/music';

class Card extends React.Component<ICardProps, {}> {
  constructor(props: ICardProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { type, url, title, date, cover } = this.props;

    const isWebp = window.localStorage.isWebp === 'true';
    return (
      <div className={cs(styles.post_container, styles.artist_item)}>
        <img src={isWebp ? `${cover}${webpSuffix}` : cover} alt={title} />
        <div className={cs(styles.meta_intro, styles.artist_intro)}>
          <time className={styles.meta_date}>
            {formatJSONDate(date).slice(0, 10)}
          </time>
          <p className={cs(styles.meta_title, styles.artist_title)}>{title}</p>
          <hr className={styles.music_split} />
          {type === 'note' ? (
            <Link
              to={`${routePath.blogDetail}${url}`}
              className={styles.music_btn}
            >
              READ MORE
            </Link>
          ) : (
            <a
              href={url}
              className={styles.music_btn}
              target='_blank'
              rel='noopener noreferrer'
            >
              LISTEN
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default Card;
