import React, {Component} from 'react';
import styles from './blog.module.css';
import BlogSummary from '../../components/BlogSummary/blogSummary';
import 'bubbly-bg';
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
    this.getBubbly();
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

  getBubbly = () => {
    window.bubbly({
      colorStart: '#fff4e6',
      colorStop: '#ffe9e4',
      blur: 1,
      canvas: document.querySelector('.bubbly'),
      compose: 'source-over',
      bubbleFunc: () => `hsla(${Math.random() * 50}, 100%, 50%, .3)`,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <main className={styles.blog_wrapper}>
        <canvas className="bubbly" width={document.documentElement.clientWidth} height={document.documentElement.clientHeight} />
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
