import React, { Component } from 'react';
import cs from 'classnames';
import { Link } from 'react-router-dom';
import styles from './blog.module.css';
import BlogSummary from '../../components/BlogSummary/blogSummary';
import Tag from '../../components/Tag/Tag';
import LinkCard from '../../components/LinkCard/LinkCard';
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
    return (
      <main className={styles.blog_wrapper}>
        <section className={styles.summary_container}>
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
          <section className={styles.search_container}>
            <svg className={styles.search_icon}>
              <use xlinkHref={`${svgIcons}#magnifying-glass`} />
            </svg>
            <label htmlFor="search">
              <input type="text" id="search" placeholder="Search..." />
            </label>
          </section>
          <section className={styles.tags_container}>
            <Tag />
          </section>
          <section className={styles.card_container}>
            <LinkCard data={data} />
          </section>
        </aside>
      </main>
    );
  }
}

export default Blog;
