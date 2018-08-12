import React, { Component } from 'react';
import cs from 'classnames';
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
    const datas = data.data;
    return (
      Object.keys(datas)
        .map((item, key) => (
          <article className={cs(styles['blog-summary-content'], key % 2 === 0 ? styles.reverse : '')} key={datas[key].id}>
            <div className={styles['blog-thumb-wrapper']}>
              <a href={datas[key].url} title={datas[key].title}>
                <figure className={styles['blog-thumb']}>
                  <img src={datas[key].poster} alt={datas[key].title} />
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
                {datas[key].publish_date}
              </p>
              <a href={datas[key].url} title={datas[key].title}>
                <h3 className={styles.title}>
                  {datas[key].title}
                </h3>
              </a>
              <div className={styles['extra-info']}>
                <span className="click-num">
                  <svg className={styles['icon-eye']}>
                    <use xlinkHref={`${svgIcons}#eye`} />
                  </svg>
                  {datas[key].like_num}
                  {' '}
                  PV
                </span>
                <span className="comment-num">
                  <svg className="icon-comment">
                    <use xlinkHref={`${svgIcons}#multimedia`} />
                  </svg>
                  <a href={`${datas[key].url}#comment`}>
                    {datas[key].comment_num}
                    {' '}
                    Comment
                  </a>
                </span>
                <span className="category">
                  <svg className="icon-folder">
                    <use xlinkHref={`${svgIcons}#folder`} />
                  </svg>
                  <a href={`/${datas[key].category}`} title={`This article belong to ${datas[key].category}`}>
                    {datas[key].category}
                  </a>
                </span>
              </div>
              <p className={styles['summary-content']}>
                {datas[key].summary}
              </p>
              <div className={styles['show-detail-wrapper']}>
                <a href={datas[key].url} title="show the detail">
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
