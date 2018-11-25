import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import cs from 'classnames';
import { Link } from 'react-router-dom';
import lazysizes from 'lazysizes';
import { checkWebp, formatJSONDate } from '../../utils/tools';
import styles from './blogSummary.module.css';
import svgIcons from '../../assets/image/yancey-official-blog-svg-icons.svg';

@inject('articleStore')
@observer
class blogSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const { articleStore } = this.props;
    return (
      Object.keys(articleStore.summaryData)
        .map((item, key) => (
          <article className={cs(styles['blog-summary-content'], key % 2 === 0 ? styles.reverse : '', 'lazyload', 'lazyload1')} key={articleStore.summaryData[key]._id}>
            <div className={styles['blog-thumb-wrapper']}>
              <Link to={`/p/${articleStore.summaryData[key]._id}`}>
                <figure className={styles['blog-thumb']}>
                  <img
                    className={cs('lazyload', 'lazyload2', styles.img)}
                    src={`${articleStore.summaryData[key].header_cover}?x-oss-process=image/resize,w_120/quality,Q_90`}
                    data-src={checkWebp() ? `${articleStore.summaryData[key].header_cover}?x-oss-process=image/format,webp` : articleStore.summaryData[key].poster}
                    alt={articleStore.summaryData[key].title}
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
                {formatJSONDate(articleStore.summaryData[key].publish_date)}
              </p>
              <Link to={`/p/${articleStore.summaryData[key]._id}`}>
                <h3 className={styles.title}>
                  {articleStore.summaryData[key].title}
                </h3>
              </Link>
              <div className={styles['extra-info']}>
                <span className="click-num">
                  <svg className={styles['icon-eye']}>
                    <use xlinkHref={`${svgIcons}#eye`} />
                  </svg>
                  {articleStore.summaryData[key].pv_count}
                  {' '}
                  PV
                </span>
                <span className="comment-num">
                  <svg className="icon-comment">
                    <use xlinkHref={`${svgIcons}#multimedia`} />
                  </svg>
                  <Link to={`/p/${articleStore.summaryData[key]._id}`}>
                    {articleStore.summaryData[key].like_count.length}
                    {' '}
                    Likes
                  </Link>
                </span>
                <span className={styles.category}>
                  <svg className="icon-folder">
                    <use xlinkHref={`${svgIcons}#folder`} />
                  </svg>
                  <Link to={`/t/${articleStore.summaryData[key].tags[0]}`}>
                    {articleStore.summaryData[key].tags[0]}
                  </Link>
                </span>
              </div>
              <p className={styles['summary-content']}>
                {articleStore.summaryData[key].summary}
              </p>
              <div className={styles['show-detail-wrapper']}>
                <Link to={`/p/${articleStore.summaryData[key]._id}`}>
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
