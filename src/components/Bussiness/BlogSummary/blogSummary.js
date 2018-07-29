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
                  <svg className="icon-time">
                    <use xlinkHref={`${svgIcons}#time`} />
                  </svg>
                  发布于 2018-06-20
                </p>
                <h3 className={styles.title}>
                  Cookies Version Controller
                </h3>
                <div className={styles['extra-info']}>
                  <span className="click-num">
                    <svg className={styles['icon-eye']}>
                      <use xlinkHref={`${svgIcons}#eye`} />
                    </svg>
                    546热度
                  </span>
                  <span className="comment-num">
                    <svg className="icon-comment">
                      <use xlinkHref={`${svgIcons}#multimedia`} />
                    </svg>
                    <a href="https://www.yanceyleo.com/">
                      754条评论
                    </a>
                  </span>
                  <span className="category">
                    <svg className="icon-folder">
                      <use xlinkHref={`${svgIcons}#folder`} />
                    </svg>
                    <a href="https://www.yanceyleo.com/">
                      JavaScript
                    </a>
                  </span>
                </div>
                <p className={styles['summary-content']}>
                 When adding some new features to my JavaScript, I find the remaining cookies are pretty hard to deal with.
                </p>
                <div className={styles['show-detail-wrapper']}>
                  <a href="https://www.yanceyleo.com">
                    <svg className={styles['icon-more']}>
                      <use xlinkHref={`${svgIcons}#more`} />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </li>
          <li className="blog-summary-item">
            <article className={cs(styles['blog-summary-content'], styles.reverse)}>
              <div className={styles['blog-thumb-wrapper']}>
                <figure className={styles['blog-thumb']} />
              </div>
              <div className={styles['blog-info']}>
                <p className={styles['publish-date']}>
                  <svg className="icon-time">
                    <use xlinkHref={`${svgIcons}#time`} />
                  </svg>
                  发布于 2018-06-20
                </p>
                <h3 className={styles.title}>
                  Cookies Version Controller
                </h3>
                <div className={styles['extra-info']}>
                  <span className="click-num">
                    <svg className="icon-eye">
                      <use xlinkHref={`${svgIcons}#eye`} />
                    </svg>
                    546热度
                  </span>
                  <span className="comment-num">
                    <svg className="icon-comment">
                      <use xlinkHref={`${svgIcons}#multimedia`} />
                    </svg>
                    <a href="https://www.yanceyleo.com/">
                      754条评论
                    </a>
                  </span>
                  <span className="category">
                    <svg className="icon-folder">
                      <use xlinkHref={`${svgIcons}#folder`} />
                    </svg>
                    <a href="https://www.yanceyleo.com/">
                      JavaScript
                    </a>
                  </span>
                </div>
                <p className={styles['summary-content']}>
                  When adding some new features to my JavaScript, I find the remaining cookies are pretty hard to deal with.
                </p>
                <div className={styles['show-detail-wrapper']}>
                  <a href="https://www.yanceyleo.com">
                    <svg className={styles['icon-more']}>
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
