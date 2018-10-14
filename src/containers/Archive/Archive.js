import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import { inject, observer } from 'mobx-react/index';
import styles from './archive.module.css';
import {
  checkWebp, monthToEN, aliOSS, webp,
} from '../../utils/tools';

@inject('articleStore')
@observer
class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const { articleStore } = this.props;
    articleStore.getArchive();
  }

  componentWillUnmount() {
  }

  unfold() {
    for (let i = 0; i < document.querySelectorAll('input[type="checkbox"]').length; i += 1) {
      document.querySelectorAll('input[type="checkbox"]')[i].checked = true;
    }
  }

  fold() {
    for (let i = 0; i < document.querySelectorAll('input[type="checkbox"]').length; i += 1) {
      document.querySelectorAll('input[type="checkbox"]')[i].checked = false;
    }
  }

  render() {
    const { articleStore } = this.props;
    const bgUrl = `${aliOSS}/static/archive_page_header.jpg`;
    return (
      <main className={styles.archive_wrapper}>
        <Helmet>
          <title>
            Archive | Yancey Inc.
          </title>
        </Helmet>
        <figure
          className={cs(styles.bg_header, 'no-user-select')}
          style={{ backgroundImage: `url(${checkWebp() ? `${bgUrl}${webp}` : bgUrl})` }}
        >
          <span>
            Archive
          </span>
        </figure>
        <div className={styles.archive_container}>
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
          Object.keys(articleStore.archiveData)
            .map(key => (
              <section className={styles.archive_list_wrapper} key={key}>
                <h2 className={styles.year}>
                  {articleStore.archiveData[key]._id.year}
                </h2>
                <ul className={styles.year_list_wrapper}>
                  {
                    Object.keys(articleStore.archiveData[key].data)
                      .map(key1 => (
                        <li key={key1}>
                          <input id={`tab_${key}_${key1}`} type="checkbox" name="tabs" defaultChecked={key === '0' && key1 === '0' ? 'checked' : ''} />
                          <label htmlFor={`tab_${key}_${key1}`}>{/* eslint-disable-line */}
                            <span className={styles.month}>
                              {monthToEN(articleStore.archiveData[key].data[key1].month)}
                              {'. '}
                              (
                              {articleStore.archiveData[key].data[key1].data.length}
                              {' '}
                              {articleStore.archiveData[key].data[key1].data.length > 1 ? 'articles' : 'article'}
                              )
                            </span>
                          </label>
                          <ul className={styles.day_list_container}>
                            {
                              Object.keys(articleStore.archiveData[key].data[key1].data)
                                .map($key => (
                                  <li className={styles.day_item} key={$key}>
                                    <span className={styles.day}>
                                      {articleStore.archiveData[key].data[key1].data[$key].day}
                                      {': '}
                                    </span>
                                    <Link to={`p/${articleStore.archiveData[key].data[key1].data[$key].id}`}>
                                      {articleStore.archiveData[key].data[key1].data[$key].title}
                                      {' '}
                                      (
                                      {articleStore.archiveData[key].data[key1].data[$key].pv_count}
                                      {' '}
                                      PV
                                      )
                                    </Link>
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
        </div>
      </main>
    );
  }
}

export default Archive;
