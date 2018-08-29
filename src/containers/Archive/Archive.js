import React, { Component } from 'react';
import styles from './archive.module.css';
import { GET } from '../../https/axios';

const Mock = require('mockjs');

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
    this.getFakeData();
  }

  componentWillUnmount() {
  }

  getFakeData() {
    const data = Mock.mock({
      'data|2-3': [
        {
          year: '20@integer(10, 18)',
          'data|1-12': [
            {
              month: '@integer(1, 12)',
              'days|0-6': [
                {
                  day: '@integer(1, 28)',
                  title: '@ctitle(10, 30)',
                  like_count: '@integer(0, 500)',
                  comment_count: '@integer(0, 500)',
                  url: '@url',
                },
              ],
            },
          ],
        },
      ],
    });
    this.setState({
      data: data.data,
    });
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <main className={styles.archive_wrapper}>
        {
          Object.keys(data)
            .map(key => (
              <section key={key}>
                <header className={styles.year}>
                  {data[key].year}
                  年
                </header>
                <ul className={styles.year_list_wrapper}>
                  {
                    Object.keys(data[key].data)
                      .map(key1 => (
                        <li key={key1}>
                          <input id={`tab_${key}_${key1}`} type="checkbox" name="tabs" />
                        <label htmlFor={`tab_${key}_${key1}`}> {/* eslint-disable-line */}
                          <span className={styles.month}>
                            {data[key].data[key1].month}
                            月
                      (共
                            {data[key].data[key1].days.length}
                            篇文章)
                          </span>
                        </label>
                          <ul className={styles.day_list_container}>
                            {
                            Object.keys(data[key].data[key1].days)
                              .map($key => (
                                <li className={styles.day_item} key={$key}>
                                  <span className={styles.day}>
                                    {data[key].data[key1].days[$key].day}
                                日
                                    {' '}
                                  </span>
                                  <a href={data[key].data[key1].days[$key].url}>
                                    {data[key].data[key1].days[$key].title}
                                    {' '}
                                    (
                                    {data[key].data[key1].days[$key].like_count}
                                    {' '}
                                    PV
                                    /
                                    {' '}
                                    {data[key].data[key1].days[$key].comment_count}
                                    {' '}
                                    Comment
                                    )
                                  </a>
                                </li>
                              ))
                          }
                          </ul>
                        </li>
                      ))
                  }
                </ul>
              </section>
            ))
        }
      </main>
    );
  }
}

export default Archive;
