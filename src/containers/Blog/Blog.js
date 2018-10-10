import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import cs from 'classnames';
import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import 'rc-pagination/assets/index.css';
import styles from './blog.module.css';
import BlogSummary from '../../components/BlogSummary/BlogSummary';
import Tag from '../../components/Tag/Tag';
import LinkCard from '../../components/LinkCard/LinkCard';
import { checkWebp, aliOSS, webp } from '../../utils/tools';
import svgIcons from '../../assets/image/yancey-official-blog-svg-icons.svg';

@inject('articleStore')
@observer
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const { articleStore } = this.props;
    if (document.location.pathname.split('/')[1] === 't') {
      articleStore.getDataByTag(articleStore.curTag);
    } else {
      articleStore.getSummaryData(articleStore.curPage);
    }
    articleStore.getTagData();
    articleStore.getTop7Data();
  }

  componentWillReceiveProps(nextProps) {
    const { articleStore, location } = this.props;
    if (nextProps.location.pathname !== location.pathname) {
      if (document.location.pathname.split('/')[1] === 't') {
        articleStore.getDataByTag(articleStore.curTag);
      } else {
        articleStore.getSummaryData(articleStore.curPage);
      }
    }
  }

  componentWillUnmount() {
  }

  render() {
    const bgUrl = `${aliOSS}/static/blog_page_header.jpg`;
    const { articleStore } = this.props;
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
            <Pagination
              showSizeChanger
              showQuickJumper={{
                goButton: <button>
                            OK
                          </button>,
              }}
              defaultPageSize={10}
              defaultCurrent={articleStore.curPage}
              onChange={articleStore.onPageChange}
              total={articleStore.totalAmount}
              locale={localeInfo}
            />
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
