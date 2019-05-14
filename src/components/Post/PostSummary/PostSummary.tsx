import * as React from 'react';
import cs from 'classnames';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from './PostSummary.module.scss';
import svgIcons from '@assets/images/yancey-official-blog-svg-icons.svg';
import routePath from '@constants/routePath';
import { formatJSONDate } from '@tools/tools';
import { webpSuffix, svgSprite } from '@constants/constants';
import Skeletons from '@components/Skeletons/BlogSummarySkeleton/Skeletons';
import { IArticleDetail, IArticleProps } from '../../../types/article';

@inject('articleStore')
@observer
class PostSummary extends React.Component<IArticleProps, {}> {
  constructor(props: IArticleProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { articleStore } = this.props;
    const isWebp = window.localStorage.isWebp === 'true';

    return (
      <>
        {articleStore!.isSummaryLoading ? (
          <Skeletons />
        ) : (
          articleStore!.posts.map((post: IArticleDetail, key: number) => (
            <article
              className={cs(
                styles.blog_summary_content,
                key % 2 === 0 ? styles.reverse : '',
              )}
              key={post._id}
            >
              <div className={styles.blog_thumb_wrapper}>
                <Link to={`${routePath.blogDetail}${post._id}`}>
                  <figure className={styles.blog_thumb}>
                    <LazyLoadImage
                      className={styles.img}
                      alt={post.title}
                      width='100%'
                      height='100%'
                      effect='blur'
                      src={
                        isWebp
                          ? `${post.header_cover}${webpSuffix}`
                          : post.header_cover
                      }
                    />
                  </figure>
                </Link>
              </div>
              <div className={styles.blog_info}>
                <p className={styles.publish_date}>
                  <svg>
                    <use xlinkHref={`${svgIcons}${svgSprite.time}`} />
                  </svg>
                  Released {formatJSONDate(post.publish_date)}
                </p>
                <Link to={`${routePath.blogDetail}${post._id}`}>
                  <h3 className={styles.title}>{post.title}</h3>
                </Link>
                <div className={styles.extra_info}>
                  <span>
                    <svg>
                      <use xlinkHref={`${svgIcons}${svgSprite.eye}`} />
                    </svg>
                    {post.pv_count} PV
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref={`${svgIcons}${svgSprite.comments1}`} />
                    </svg>
                    <Link to={`${routePath.blogDetail}${post._id}`}>
                      {post.like_count.length}{' '}
                      {post.like_count.length > 1 ? 'Likes' : 'Like'}
                    </Link>
                  </span>
                  <span className={styles.category}>
                    <svg>
                      <use xlinkHref={`${svgIcons}${svgSprite.closeFolder}`} />
                    </svg>
                    <Link to={`${routePath.tag}${post.tags[0]}`}>
                      {post.tags[0]}
                    </Link>
                  </span>
                </div>
                <p className={styles.summary_content}>{post.summary}</p>
                <div className={styles.show_detail_wrapper}>
                  <Link to={`${routePath.blogDetail}${post._id}`}>
                    <svg className={styles.icon_more}>
                      <use xlinkHref={`${svgIcons}${svgSprite.more}`} />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))
        )}
      </>
    );
  }
}

export default trackWindowScroll(PostSummary);
