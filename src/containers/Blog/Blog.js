import React, { Component } from 'react';
import cs from 'classnames';
import { Link } from 'react-router-dom';
import styles from './blog.module.css';
import BlogSummary from '../../components/BlogSummary/blogSummary';
import Tag from '../../components/Tag/Tag';
import LinkCard from '../../components/LinkCard/LinkCard';
import { checkWebp, aliOSS, webp } from '../../utils/tools';
import svgIcons from '../../assets/image/yancey-official-blog-svg-icons.svg';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const bgUrl = `${aliOSS}/static/blog_page_header.jpg`;
    return (
      <main className="blog_wrapper">
        <figure
          className={cs(styles.bg_header, 'no-user-select')}
          style={{ backgroundImage: `url(${checkWebp() ? `${bgUrl}${webp}` : bgUrl})` }}
        >
          <span>
            Code, Music and Life.
          </span>
        </figure>
        <div className={styles.main_content}>
          <section>
            <BlogSummary />
            <ul className={styles.pagination_list}>
              <li className={styles.pagination_item}>
                <Link to="blog">
                &lt;
                </Link>
              </li>
              <li className={styles.pagination_item}>
                <Link to="blog">
                1
                </Link>
              </li>
              <li className={styles.pagination_item}>
                <Link to="blog">
                2
                </Link>
              </li>
              <li className={styles.pagination_item}>
                <Link to="blog">
                3
                </Link>
              </li>
              <li className={styles.pagination_item}>
                <Link to="blog">
                4
                </Link>
              </li>
              <li className={styles.pagination_item}>
                <Link to="blog" onClick={e => e.preventDefault()}>
                ···
                </Link>
              </li>
              <li className={styles.pagination_item}>
                <Link to="blog">
                6
                </Link>
              </li>
              <li className={styles.pagination_item}>
                <Link to="blog">
                7
                </Link>
              </li>
              <li className={styles.pagination_item}>
                <Link to="blog">
                8
                </Link>
              </li>
              <li className={styles.pagination_item}>
                <Link to="blog">
                9
                </Link>
              </li>
              <li className={styles.pagination_item}>
                <Link to="blog">
                &gt;
                </Link>
              </li>
            </ul>
          </section>
          <aside className={styles.aside_wrapper}>
            <section className={styles.tags_container}>
              <h1 className={styles.aside_title}>
                <svg className={styles.title_icon}>
                  <use xlinkHref={`${svgIcons}#price-tag`} />
                </svg>
                <span className={styles.title_name}>
                Tags
                </span>
              </h1>
              <Tag />
            </section>
            <section>
              <h1 className={styles.aside_title}>
                <svg className={styles.title_icon}>
                  <use xlinkHref={`${svgIcons}#placeholder`} />
                </svg>
                <span className={styles.title_name}>
                Top 7 Most Viewed
                </span>
              </h1>
              <LinkCard />
            </section>
          </aside>
        </div>
      </main>
    );
  }
}

export default Blog;
