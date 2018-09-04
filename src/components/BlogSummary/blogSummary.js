import React, { Component } from 'react';
import cs from 'classnames';
import lazysizes from 'lazysizes';
import { checkWebp } from '../../utils/tools';
import styles from './blogSummary.module.css';
import svgIcons from '../../assets/image/yancey-official-blog-svg-icons.svg';

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
    const { data } = this.props;
    return (
      Object.keys(data)
        .map((item, key) => (
          <article className={cs(styles['blog-summary-content'], key % 2 === 0 ? styles.reverse : '', 'lazyload', 'lazyload1')} key={data[key]._id}>
            <div className={styles['blog-thumb-wrapper']}>
              <a href={data[key].url} title={data[key].title}>
                <figure className={styles['blog-thumb']}>
                  <img
                    className={cs('lazyload', 'lazyload2', styles.img)}
                    src={`${data[key].poster}?x-oss-process=image/resize,w_360/quality,Q_90`}
                    data-src={checkWebp() ? `${data[key].poster}?x-oss-process=image/format,webp` : data[key].poster}
                    alt={data[key].title}
                  />
                </figure>
              </a>
            </div>
            <div className={styles['blog-info']}>
              <p className={styles['publish-date']}>
                <svg className="icon-time">
                  <use xlinkHref={`${svgIcons}#time`} />
                </svg>
                Released
                {' '}
                {data[key].publish_date}
              </p>
              <a href={data[key].url} title={data[key].title}>
                <h3 className={styles.title}>
                  {data[key].title}
                </h3>
              </a>
              <div className={styles['extra-info']}>
                <span className="click-num">
                  <svg className={styles['icon-eye']}>
                    <use xlinkHref={`${svgIcons}#eye`} />
                  </svg>
                  {data[key].like_count}
                  {' '}
                  PV
                </span>
                <span className="comment-num">
                  <svg className="icon-comment">
                    <use xlinkHref={`${svgIcons}#multimedia`} />
                  </svg>
                  <a href={`${data[key].url}#comment`}>
                    {data[key].comment_count}
                    {' '}
                    Comment
                  </a>
                </span>
                <span className={styles.category}>
                  <svg className="icon-folder">
                    <use xlinkHref={`${svgIcons}#folder`} />
                  </svg>
                  <a href={`/${data[key].category}`} title={`This article belong to ${data[key].category}`}>
                    {data[key].category}
                  </a>
                </span>
              </div>
              <p className={styles['summary-content']}>
                {data[key].summary}
              </p>
              <div className={styles['show-detail-wrapper']}>
                <a href={data[key].url} title="show the detail">
                  <svg className={styles['icon-more']}>
                    <use xlinkHref={`${svgIcons}#more`} />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))
    );
  }
}

export default blogSummary;
