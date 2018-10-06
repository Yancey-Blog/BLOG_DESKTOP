import React, { Component } from 'react';
import cs from 'classnames';
import { Link } from 'react-router-dom';
import lazysizes from 'lazysizes';
import { checkWebp, formatJSONDate } from '../../utils/tools';
import styles from './blogSummary.module.css';
import svgIcons from '../../assets/image/yancey-official-blog-svg-icons.svg';
import { GET } from '../../https/axios';

class blogSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      curPage: 1,
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
  }

  getData() {
    const { curPage } = this.state;
    GET(`/articles/page/${curPage}`, {})
      .then((res) => {
        this.setState({
          dataSource: res.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    const { dataSource } = this.state;
    return (
      Object.keys(dataSource)
        .map((item, key) => (
          <article className={cs(styles['blog-summary-content'], key % 2 === 0 ? styles.reverse : '', 'lazyload', 'lazyload1')} key={dataSource[key]._id}>
            <div className={styles['blog-thumb-wrapper']}>
              <Link to={`/p/${dataSource[key]._id}`}>
                <figure className={styles['blog-thumb']}>
                  <img
                    className={cs('lazyload', 'lazyload2', styles.img)}
                    src={`${dataSource[key].header_cover}?x-oss-process=image/resize,w_120/quality,Q_90`}
                    data-src={checkWebp() ? `${dataSource[key].header_cover}?x-oss-process=image/format,webp` : dataSource[key].poster}
                    alt={dataSource[key].title}
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
                {formatJSONDate(dataSource[key].publish_date)}
              </p>
              <Link to={`/p/${dataSource[key]._id}`}>
                <h3 className={styles.title}>
                  {dataSource[key].title}
                </h3>
              </Link>
              <div className={styles['extra-info']}>
                <span className="click-num">
                  <svg className={styles['icon-eye']}>
                    <use xlinkHref={`${svgIcons}#eye`} />
                  </svg>
                  {dataSource[key].pv_count}
                  {' '}
                  PV
                </span>
                <span className="comment-num">
                  <svg className="icon-comment">
                    <use xlinkHref={`${svgIcons}#multimedia`} />
                  </svg>
                  <Link to={`/p/${dataSource[key]._id}`}>
                    {dataSource[key].like_count}
                    {' '}
                    Likes
                  </Link>
                </span>
                <span className={styles.category}>
                  <svg className="icon-folder">
                    <use xlinkHref={`${svgIcons}#folder`} />
                  </svg>
                  <Link to={`/${dataSource[key].tags[0]}`}>
                    {dataSource[key].tags[0]}
                  </Link>
                </span>
              </div>
              <p className={styles['summary-content']}>
                {dataSource[key].summary}
              </p>
              <div className={styles['show-detail-wrapper']}>
                <Link to={`/p/${dataSource[key]._id}`}>
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
