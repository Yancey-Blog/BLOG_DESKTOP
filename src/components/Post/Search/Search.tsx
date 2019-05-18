import * as React from 'react';
import { observer, inject } from 'mobx-react';
import cs from 'classnames';
import styles from './Search.module.scss';
import svgIcons from 'assets/images/yancey-official-blog-svg-icons.svg';
import { webpSuffix, miku, svgSprite } from 'constants/constants';
import { IArticleProps } from '../../../types/article';

@inject('articleStore')
@observer
class Search extends React.Component<IArticleProps, {}> {
  private inputRef: React.RefObject<HTMLInputElement>;
  constructor(props: IArticleProps) {
    super(props);
    this.state = {};
    this.inputRef = React.createRef<HTMLInputElement>();
  }

  public componentDidUpdate() {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  public render() {
    const { articleStore } = this.props;
    const isWebp = window.localStorage.getItem('isWebp') === 'true';
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
                  ref={this.inputRef}
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
