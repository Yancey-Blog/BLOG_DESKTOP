import React, {Component} from 'react';
import styles from './archive.module.css';
import { GET } from '../../https/axios';

class Archive extends Component {
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
      <main className={styles.archive_wrapper}>
        <header>2018年</header>
        <ul>
          <li>
            <span>06月 (共3篇文章)</span>
          </li>
          <li>
            <ul>
              <li>
                <span className={styles.day}>
                  25日
                </span>
                <a href="https://www.yanceyleo.com/">
                  Natsu Yasumi~ (1582  / 42 )
                </a>
              </li>
              <li>
                <span className={styles.day}>
                  25日
                </span>
                <a href="https://www.yanceyleo.com/">
                  Natsu Yasumi~ (1582  / 42 )
                </a>
              </li>
              <li>
                <span className={styles.day}>
                  25日
                </span>
                <a href="https://www.yanceyleo.com/">
                  Natsu Yasumi~ (1582  / 42 )
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </main>
    );
  }
}

export default Archive;
