import React, { Component } from 'react';
import cs from 'classnames';
import { Link } from 'react-router-dom';
import styles from './blog.module.css';
import BlogSummary from '../../components/BlogSummary/blogSummary';
import Tag from '../../components/Tag/Tag';
import LinkCard from '../../components/LinkCard/LinkCard';
import { checkWebp } from '../../utils/tools';
import { GET } from '../../https/axios';
import svgIcons from '../../assets/image/yancey-official-blog-svg-icons.svg';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
  }

  getData() {
    GET('/articles', {})
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    const { data } = this.state;
    const bgUrl = 'https://yancey-assets.oss-cn-beijing.aliyuncs.com/static/blog-header.jpg';
    return (
      <main className="blog_wrapper">
        <figure
          className={cs(styles.bg_header, 'no-user-select')}
          style={{ backgroundImage: `url(${checkWebp() ? `${bgUrl}?x-oss-process=image/format,webp` : bgUrl})` }}
        >
          <span>
            Code, Music and Life.
          </span>
        </figure>
        <div className={styles.main_content}>
          <section>
            <BlogSummary data={data} />
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
                Top 10
                </span>
              </h1>
              <LinkCard data={data} />
            </section>
          </aside>
        </div>
      </main>
    );
  }
}

export default Blog;
