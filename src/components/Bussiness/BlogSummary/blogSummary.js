import React, { Component } from 'react';
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
    return (
      <section className={styles['blog-summary-wrapper']}>
        <ul className="blog-summary-list">
          <li className="blog-summary-item">
            <article className={styles['blog-summary-content']}>
              <div className={styles['blog-thumb-wrapper']}>
                <figure className={styles['blog-thumb']} />
              </div>
              <div className={styles['blog-info']}>
                <p className={styles['publish-date']}>
                  <svg className="time-icon">
                    <use xlinkHref={`${svgIcons}#time`} />
                  </svg>
                  发布于 2018-06-20
                </p>
                <h3 className={styles.title}>
                  Live2D！把可爱的看板娘捕捉到你的博客去吧
                </h3>
                <div className={styles['extra-info']}>
                  <span className="click-num">
                    <svg className="view-icon">
                      <use xlinkHref={`${svgIcons}#view`} />
                    </svg>
                    546热度
                  </span>
                  <span className="comment-num">
                    <svg className="like-icon">
                      <use xlinkHref={`${svgIcons}#like`} />
                    </svg>
                    <a href="https://www.yanceyleo.com/">
                      754条评论
                    </a>
                  </span>
                  <span className="category">
                    <svg className="folder-icon">
                      <use xlinkHref={`${svgIcons}#folder`} />
                    </svg>
                    <a href="https://www.yanceyleo.com/">
                      JavaScript
                    </a>
                  </span>
                </div>
                <p className={styles['summary-content']}>
                  When adding some new features to my JavaScript, I find the remaining cookies are pretty hard to deal with.hen adding some new features to my JavaScript, I find the remaining cookies are pretty hard to deal with.
                </p>
                <div className="show-detail-wrapper">
                  <a href="https://www.yanceyleo.com">
                    <svg className={styles['more-icon']}>
                      <use xlinkHref={`${svgIcons}#more`} />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </section>
    );
  }
}

export default blogSummary;
