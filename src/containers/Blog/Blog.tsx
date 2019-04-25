import * as React from 'react';
import { observer, inject } from 'mobx-react';
import history from '../../history';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import 'rc-pagination/assets/index.css';
import styles from './Blog.module.scss';
import svgIcons from '@assets/images/yancey-official-blog-svg-icons.svg';
import { blogBg, webpSuffix, svgSprite } from '@constants/constants';
import routePath from '@constants/routePath';
import BlogSummary from '@components/Post/PostSummary/PostSummary';
import Tag from '@components/Post/Tag/Tag';
import LinkCard from '@components/Post/LinkCard/LinkCard';
import Title from '@components/Common/Title/Title';
import { IArticleProps } from '../../types/article';

@inject('articleStore')
@observer
class Blog extends React.Component<IArticleProps, {}> {
  constructor(props: IArticleProps) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    const { articleStore } = this.props;
    if (history.location.pathname.includes('t')) {
      articleStore!.getPostsByTag();
    } else if (history.location.pathname.includes('blog')) {
      articleStore!.getPostsByPage();
    }
    articleStore!.getAllTags();
    articleStore!.getHots();
  }

  public render() {
    const { articleStore } = this.props;
    const isWebp = window.localStorage.isWebp === 'true';
    return (
      <main>
        <Title title='Blog' />
        <figure
          className={cs(styles.bg_header, 'no-user-select')}
          style={{
            backgroundImage: `url(${
              isWebp ? `${blogBg}${webpSuffix}` : blogBg
            })`,
          }}
        >
          <span>Tech, Music and Life.</span>
        </figure>
        <div className={styles.main_content}>
          <section>
            {articleStore!.posts.length === 0 ? (
              <div>
                <p className={styles.no_articles}>no articles!</p>
                <Link to={routePath.blog} className={styles.back}>
                  Back
                </Link>
              </div>
            ) : (
              <BlogSummary />
            )}
            {history.location.pathname.includes('blog') ? (
              <Pagination
                showSizeChanger
                showQuickJumper={{
                  goButton: <button>OK</button>,
                }}
                defaultPageSize={10}
                defaultCurrent={articleStore!.curPage}
                onChange={articleStore!.onPageChange}
                total={articleStore!.total}
                locale={localeInfo}
              />
            ) : null}
          </section>
          <aside className={styles.aside_wrapper}>
            <section className={styles.tags_container}>
              <h1 className={styles.aside_title}>
                <svg className={styles.title_icon}>
                  <use xlinkHref={`${svgIcons}${svgSprite.tag}`} />
                </svg>
                <span className={styles.title_name}>Tags</span>
              </h1>
              <Tag />
            </section>
            <section>
              <h1 className={styles.aside_title}>
                <svg className={styles.title_icon}>
                  <use xlinkHref={`${svgIcons}${svgSprite.crown}`} />
                </svg>
                <span className={styles.title_name}>Top 7 Most Viewed</span>
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
