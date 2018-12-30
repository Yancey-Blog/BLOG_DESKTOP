import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import cs from 'classnames';
import { Link } from 'react-router-dom';
import 'lazysizes';
import { formatJSONDate, webp } from '../../utils/tools';
import styles from './blogSummary.module.css';
import svgIcons from '../../assets/image/yancey-official-blog-svg-icons.svg';

@inject('articleStore')
@observer
class blogSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { articleStore } = this.props;
    const isWebp = window.localStorage.isWebp;
    return (
      articleStore.summaryData.map((post, key) => (
        <article
          className={cs(styles['blog-summary-content'], key % 2 === 0 ? styles.reverse : '', 'lazyload')}
          key={post._id}
        >
          <div className={styles['blog-thumb-wrapper']}>
            <Link to={`/p/${post._id}`}>
              <figure className={styles['blog-thumb']}>
                <img
                  className={cs('lazyload', 'lazyload2', styles.img)}
                  src={`${post.header_cover}?x-oss-process=image/resize,w_120/quality,Q_10`}
                  data-src={isWebp
                    ? `${post.header_cover}${webp}`
                    : post.poster}
                  alt={post.title}
                />
              </figure>
            </Link>
          </div>
          <div className={styles['blog-info']}>
            <p className={styles['publish-date']}>
              <svg className="icon-time">
                <use xlinkHref={`${svgIcons}#time`} />
              </svg>
              Released
              {' '}
              {formatJSONDate(post.publish_date)}
            </p>
            <Link to={`/p/${post._id}`}>
              <h3 className={styles.title}>
                {post.title}
              </h3>
            </Link>
            <div className={styles['extra-info']}>
              <span className="click-num">
                <svg className={styles['icon-eye']}>
                  <use xlinkHref={`${svgIcons}#eye`} />
                </svg>
                {post.pv_count}
                {' '}
                  PV
              </span>
              <span className="comment-num">
                <svg className="icon-comment">
                  <use xlinkHref={`${svgIcons}#multimedia`} />
                </svg>
                <Link to={`/p/${post._id}`}>
                  {post.like_count.length}
                  {' '}
                    Likes
                </Link>
              </span>
              <span className={styles.category}>
                <svg className="icon-folder">
                  <use xlinkHref={`${svgIcons}#folder`} />
                </svg>
                <Link to={`/t/${post.tags[0]}`}>
                  {post.tags[0]}
                </Link>
              </span>
            </div>
            <p className={styles['summary-content']}>
              {post.summary}
            </p>
            <div className={styles['show-detail-wrapper']}>
              <Link to={`/p/${post._id}`}>
                <svg className={styles['icon-more']}>
                  <use xlinkHref={`${svgIcons}#more`} />
                </svg>
              </Link>
            </div>
          </div>
        </article>
      ))
    );
  }
}

export default blogSummary;
