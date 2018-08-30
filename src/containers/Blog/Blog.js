import React, {Component} from 'react';
import styles from './blog.module.css';
import BlogSummary from '../../components/BlogSummary/blogSummary';
import { GET } from '../../https/axios';

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
        <section className={styles.summary_pagination_container}>
          <BlogSummary data={data} />
        </section>
        <aside>
          search / 标签云 / 类别
        </aside>
      </main>
    );
  }
}

export default Blog;
