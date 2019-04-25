import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import Title from '@components/Common/Title/Title';
import cs from 'classnames';
import styles from './Archive.module.scss';
import { archiveBg, webpSuffix } from '@constants/constants';
import { monthToEN } from '@tools/tools';
import { IArticleProps } from '../../types/article';

@inject('articleStore')
@observer
class Archive extends React.Component<IArticleProps, {}> {
  constructor(props: IArticleProps) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    const { articleStore } = this.props;
    articleStore!.getArchives();
  }

  public unfold() {
    const checkboxs = document.querySelectorAll('input[type="checkbox"]');
    checkboxs.forEach(checkbox => {
      (checkbox as HTMLInputElement).checked = true;
    });
  }

  public fold() {
    const checkboxs = document.querySelectorAll('input[type="checkbox"]');
    checkboxs.forEach(checkbox => {
      (checkbox as HTMLInputElement).checked = false;
    });
  }

  public render() {
    const { articleStore } = this.props;
    const isWebp = window.localStorage.isWebp === 'true';
    return (
      <main className={styles.archive_wrapper}>
        <Title title='Archive' />
        <figure
          className={cs(styles.bg_header, 'no-user-select')}
          style={{
            backgroundImage: `url(${
              isWebp ? `${archiveBg}${webpSuffix}` : archiveBg
            })`,
          }}
        >
          <span>Archive</span>
        </figure>
        <div className={styles.archive_container}>
          <div className={styles.fold_unfold_wrapper}>
            <button
              className={cs(styles.btn, styles.left_btn)}
              onClick={() => this.unfold()}
            >
              Unfold
            </button>
            <div className={styles.or} />
            <button
              className={cs(styles.btn, styles.right_btn)}
              onClick={() => this.fold()}
            >
              Fold
            </button>
            <p className={styles.total_count}>
              Total: {articleStore!.totalArticlesCount}
            </p>
          </div>
          {Object.keys(articleStore!.archives).map(year => (
            <section className={styles.archive_list_wrapper} key={year}>
              <h2 className={styles.year}>
                {articleStore!.archives[year]._id.year}
              </h2>
              <ul className={styles.year_list_wrapper}>
                {Object.keys(articleStore!.archives[year].data).map(month => (
                  <li key={month}>
                    <input
                      id={`tab_${year}_${month}`}
                      type='checkbox'
                      name='tabs'
                      defaultChecked={
                        year === '0' && month === '0' ? true : false
                      }
                    />
                    <label htmlFor={`tab_${year}_${month}`}>
                      <span className={styles.month}>
                        {monthToEN(
                          articleStore!.archives[year].data[month].month,
                        )}
                        {'. '}(
                        {articleStore!.archives[year].data[month].data.length}{' '}
                        {articleStore!.archives[year].data[month].data.length >
                        1
                          ? 'articles'
                          : 'article'}
                        )
                      </span>
                    </label>
                    <ul className={styles.day_list_container}>
                      {Object.keys(
                        articleStore!.archives[year].data[month].data,
                      ).map(day => (
                        <li className={styles.day_item} key={day}>
                          <span className={styles.day}>
                            {
                              articleStore!.archives[year].data[month].data[day]
                                .day
                            }
                            {': '}
                          </span>
                          <Link
                            to={`p/${
                              articleStore!.archives[year].data[month].data[day]
                                .id
                            }`}
                          >
                            {
                              articleStore!.archives[year].data[month].data[day]
                                .title
                            }{' '}
                            (
                            {
                              articleStore!.archives[year].data[month].data[day]
                                .pv_count
                            }{' '}
                            PV )
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    );
  }
}

export default Archive;
