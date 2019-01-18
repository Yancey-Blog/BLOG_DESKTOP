import * as React from 'react';
import { observer, inject } from 'mobx-react';
import cs from 'classnames';
import _ from 'lodash';
import styles from './Search.module.scss';
import svgIcons from '@assets/images/yancey-official-blog-svg-icons.svg';
import { webpSuffix, miku, svgSprite } from '@constants/constants';
import { IArticleProps } from '../../../types/article';

@inject('articleStore')
@observer
class Search extends React.Component<IArticleProps, {}> {
  constructor(props: IArticleProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { articleStore } = this.props;
    const isWebp = window.localStorage.isWebp === 'true';
    return (
      <span>
        {articleStore!.showSearch ? (
          <div className={styles.search_full_screen}>
            <svg
              className={cs(styles.header_icon, styles.icon_close)}
              onClick={() => articleStore!.toggleShowSearch()}
            >
              <use xlinkHref={`${svgIcons}${svgSprite.close}`} />
            </svg>
            <div className={styles.search_cell}>
              <p className={styles.search_title}>find something?</p>
              <svg className={styles.search_icon}>
                <use xlinkHref={`${svgIcons}${svgSprite.search2}`} />
              </svg>
              <label htmlFor='search'>
                <input
                  type='text'
                  id='search'
                  placeholder='Search'
                  onKeyUp={e => articleStore!.onSearchChange(e)}
                />
              </label>
            </div>
            <figure
              className={styles.miku_chan}
              style={{
                backgroundImage: `url(${
                  isWebp ? `${miku}${webpSuffix}` : miku
                })`,
              }}
            />
          </div>
        ) : null}
      </span>
    );
  }
}

export default Search;
