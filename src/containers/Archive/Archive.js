import React, { Component } from 'react';
import cs from 'classnames';
import styles from './archive.module.css';
import { monthToEN } from '../../utils/tools';
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
    window.scrollTo(0, 0);
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
                  title: '@title(5, 6)',
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

  unfold() {
    for (let i = 0; i < document.querySelectorAll('input[type="checkbox"]').length; i++) {
      document.querySelectorAll('input[type="checkbox"]')[i].checked = true;
    }
  }

  fold() {
    for (let i = 0; i < document.querySelectorAll('input[type="checkbox"]').length; i++) {
      document.querySelectorAll('input[type="checkbox"]')[i].checked = false;
    }
  }

  render() {
    const { data } = this.state;
    return (
      <main className={styles.archive_wrapper}>
        <h1 className={styles.archive_title}>
            Archive
        </h1>
        <div className={styles.fold_unfold_wrapper}>
          <button
            className={cs(styles.btn, styles.left_btn)}
            type="button"
            onClick={() => this.unfold()}
          >
            Unfold
          </button>
          <div className={styles.or} />
          <button
            className={cs(styles.btn, styles.right_btn)}
            type="button"
            onClick={() => this.fold()}
          >
            Fold
          </button>
        </div>
        {
          Object.keys(data)
            .map(key => (
              <section className={styles.archive_list_wrapper} key={key}>
                <h2 className={styles.year}>
                  {data[key].year}
                </h2>
                <ul className={styles.year_list_wrapper}>
                  {
                    Object.keys(data[key].data)
                      .map(key1 => (
                        <li key={key1}>
                          <input id={`tab_${key}_${key1}`} type="checkbox" name="tabs" defaultChecked={key === '0' && key1 === '0' ? 'checked' : ''} />
                          <label htmlFor={`tab_${key}_${key1}`}>{/* eslint-disable-line */}
                            <span className={styles.month}>
                              {monthToEN(data[key].data[key1].month)}
                              {'. '}
                              (
                              {data[key].data[key1].days.length}
                              {' '}
                              {data[key].data[key1].days.length > 1 ? 'articles' : 'article'}
                              )
                            </span>
                          </label>
                          <ul className={styles.day_list_container}>
                            {
                              Object.keys(data[key].data[key1].days)
                                .map($key => (
                                  <li className={styles.day_item} key={$key}>
                                    <span className={styles.day}>
                                      {data[key].data[key1].days[$key].day < 10 ? `0${data[key].data[key1].days[$key].day}` : data[key].data[key1].days[$key].day}
                                      {': '}
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
