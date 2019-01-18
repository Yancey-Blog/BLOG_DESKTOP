import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import styles from './LinkCard.module.scss';
import { middleThumbSuffix } from '@constants/constants';
import routePath from '@constants/routePath';
import { domain } from '@constants/constants';
import { IArticleProps, IArticleDetail } from '../../../types/article';

@inject('articleStore')
@observer
class LinkCard extends React.Component<IArticleProps, {}> {
  constructor(props: IArticleProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { articleStore } = this.props;
    return (
      <ul>
        {articleStore!.hots.map((item: IArticleDetail) => (
          <li className={styles.card_item} key={item._id}>
            <Link to={`${routePath.blogDetail}${item._id}`}>
              <span
                className={styles.card_bg}
                style={{
                  backgroundImage: `url(${
                    item.header_cover
                  }${middleThumbSuffix})`,
                }}
              />
              <span className={styles.card_content}>
                <span>
                  <span className={styles.card_title}>{item.title}</span>
                  <span className={styles.card_url}>
                    {`${domain}${routePath.blogDetail}${item._id}`}
                  </span>
                </span>
                <span className={styles.card_img_cell}>
                  <img
                    src={`${item.header_cover}${middleThumbSuffix}`}
                    alt={item.title}
                  />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default LinkCard;
