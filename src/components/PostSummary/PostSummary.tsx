import * as React from 'react';
import cs from 'classnames';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import 'lazysizes';
import styles from './PostSummary.module.scss';
import svgIcons from '../../assets/images/yancey-official-blog-svg-icons.svg';
import { formatJSONDate } from '../../tools/tools';
import { webpSuffix, thumbSuffix } from '../../constant/constant';
import { IArticleDetail, ArticleStoreType } from '../../types/article';

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
          styles.blog_summary_content,
          key % 2 === 0 ? styles.reverse : '',
          'lazyload',
        )}
        key={post._id}
      >
        <div className={styles.blog_thumb_wrapper}>
          <Link to={`/p/${post._id}`}>
            <figure className={styles.blog_thumb}>
              <img
                className={cs('lazyload', 'lazyloads', styles.img)}
                src={`${post.header_cover}${thumbSuffix}`}
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
        <div className={styles.blog_info}>
          <p className={styles.publish_date}>
            <svg>
              <use xlinkHref={`${svgIcons}#time`} />
            </svg>
            Released {formatJSONDate(post.publish_date)}
          </p>
          <Link to={`/p/${post._id}`}>
            <h3 className={styles.title}>{post.title}</h3>
          </Link>
          <div className={styles.extra_info}>
            <span>
              <svg>
                <use xlinkHref={`${svgIcons}#eye`} />
              </svg>
              {post.pv_count} PV
            </span>
            <span>
              <svg>
                <use xlinkHref={`${svgIcons}#multimedia`} />
              </svg>
              <Link to={`/p/${post._id}`}>{post.like_count.length} Likes</Link>
            </span>
            <span className={styles.category}>
              <svg>
                <use xlinkHref={`${svgIcons}#folder`} />
              </svg>
              <Link to={`/t/${post.tags[0]}`}>{post.tags[0]}</Link>
            </span>
          </div>
          <p className={styles.summary_content}>{post.summary}</p>
          <div className={styles.show_detail_wrapper}>
            <Link to={`/p/${post._id}`}>
              <svg className={styles.icon_more}>
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
