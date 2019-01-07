import * as React from 'react';
import cs from 'classnames';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import 'lazysizes';
import styles from './PostSummary.module.scss';
import { formatJSONDate } from '../../tools/tools';
import { webpSuffix } from '../../constant/constant';
import { IArticleDetail, ArticleStoreType } from '../../types/article';
import svgIcons from '../../assets/images/yancey-official-blog-svg-icons.svg';

interface IArticleProps {
  articleStore?: ArticleStoreType;
}
@inject('articleStore')
@observer
class PostSummary extends React.Component<IArticleProps, {}> {
  constructor(props: IArticleProps) {
    super(props);
    this.state = {};
  }

  public componentWillMount() {
    window.scrollTo(0, 0);
  }

  public componentDidMount() {
    // todo
  }

  public componentWillUnmount() {
    // todo
  }

  public render() {
    const { articleStore } = this.props;
    const isWebp = window.localStorage.isWebp === 'true';

    return articleStore!.posts.map((post: IArticleDetail, key: number) => (
      <article
        className={cs(
          styles['blog-summary-content'],
          key % 2 === 0 ? styles.reverse : '',
          'lazyload',
        )}
        key={post._id}
      >
        <div className={styles['blog-thumb-wrapper']}>
          <Link to={`/p/${post._id}`}>
            <figure className={styles['blog-thumb']}>
              <img
                className={cs('lazyload', 'lazyload2', styles.img)}
                src={`${
                  post.header_cover
                }?x-oss-process=image/resize,w_120/quality,Q_10`}
                data-src={
                  isWebp
                    ? `${post.header_cover}${webpSuffix}`
                    : post.header_cover
                }
                alt={post.title}
              />
            </figure>
          </Link>
        </div>
        <div className={styles['blog-info']}>
          <p className={styles['publish-date']}>
            <svg className='icon-time'>
              <use xlinkHref={`${svgIcons}#time`} />
            </svg>
            Released {formatJSONDate(post.publish_date)}
          </p>
          <Link to={`/p/${post._id}`}>
            <h3 className={styles.title}>{post.title}</h3>
          </Link>
          <div className={styles['extra-info']}>
            <span className='click-num'>
              <svg className={styles['icon-eye']}>
                <use xlinkHref={`${svgIcons}#eye`} />
              </svg>
              {post.pv_count} PV
            </span>
            <span className='comment-num'>
              <svg className='icon-comment'>
                <use xlinkHref={`${svgIcons}#multimedia`} />
              </svg>
              <Link to={`/p/${post._id}`}>{post.like_count.length} Likes</Link>
            </span>
            <span className={styles.category}>
              <svg className='icon-folder'>
                <use xlinkHref={`${svgIcons}#folder`} />
              </svg>
              <Link to={`/t/${post.tags[0]}`}>{post.tags[0]}</Link>
            </span>
          </div>
          <p className={styles['summary-content']}>{post.summary}</p>
          <div className={styles['show-detail-wrapper']}>
            <Link to={`/p/${post._id}`}>
              <svg className={styles['icon-more']}>
                <use xlinkHref={`${svgIcons}#more`} />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    ));
  }
}

export default PostSummary;
