import React, { Component } from 'react';
import cs from 'classnames';
import styles from './blogSummary.module.css';
import svgIcons from '../../../assets/image/yancey-official-blog-svg-icons.svg';

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
    const list = data.list;
    return (
      Object.keys(list)
        .map((item, key) => (
          <article className={cs(styles['blog-summary-content'], key % 2 === 0 ? styles.reverse : '')} key={list[key].id}>
            <div className={styles['blog-thumb-wrapper']}>
              <a href={list[key].url} title={list[key].title}>
                <figure className={styles['blog-thumb']}>
                  <img src={list[key].thumb} alt={list[key].title} />
                </figure>
              </a>
            </div>
            <div className={styles['blog-info']}>
              <p className={styles['publish-date']}>
                <svg className="icon-time">
                  <use xlinkHref={`${svgIcons}#time`} />
                </svg>
                发布于
                {' '}
                {list[key].publishDate}
              </p>
              <a href={list[key].url} title={list[key].title}>
                <h3 className={styles.title}>
                  {list[key].title}
                </h3>
              </a>
              <div className={styles['extra-info']}>
                <span className="click-num">
                  <svg className={styles['icon-eye']}>
                    <use xlinkHref={`${svgIcons}#eye`} />
                  </svg>
                  {list[key].like}
                  热度
                </span>
                <span className="comment-num">
                  <svg className="icon-comment">
                    <use xlinkHref={`${svgIcons}#multimedia`} />
                  </svg>
                  <a href={`${list[key].url}#comment`}>
                    {list[key].comment}
                    条评论
                  </a>
                </span>
                <span className="category">
                  <svg className="icon-folder">
                    <use xlinkHref={`${svgIcons}#folder`} />
                  </svg>
                  <a href={`/${list[key].category}`} title={`This article belong to ${list[key].category}`}>
                    {list[key].category}
                  </a>
                </span>
              </div>
              <p className={styles['summary-content']}>
                {list[key].summary}
              </p>
              <div className={styles['show-detail-wrapper']}>
                <a href={list[key].url} title="show the detail">
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
