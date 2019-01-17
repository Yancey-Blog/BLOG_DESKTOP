import * as React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import cs from 'classnames';
import _ from 'lodash';
import Search from '@components/Post/Search/Search';
import styles from './Header.module.scss';
import routePath from '@constants/routePath';
import { svgSprite } from '@constants/constants';
import svgIcons from '@assets/images/yancey-official-blog-svg-icons.svg';
import { IArticleProps, IHeaderState } from '../../../types/article';

const headerList = {
  home: {
    url: routePath.home,
    icon: svgSprite.home,
  },
  blog: {
    url: routePath.blog,
    icon: svgSprite.blog,
  },
  archive: {
    url: routePath.archive,
    icon: svgSprite.archive,
  },
  music: {
    url: routePath.music,
    icon: svgSprite.music,
  },
  apps: {
    url: routePath.apps,
    icon: svgSprite.apps,
  },
  CV: {
    url: routePath.cv,
    icon: svgSprite.cv,
  },
};

@inject('articleStore')
@observer
class Header extends React.Component<IArticleProps, IHeaderState> {
  constructor(props: IArticleProps) {
    super(props);
    this.state = {
      isTop: true,
    };
  }

  public componentDidMount() {
    this.switchNavbarBackgroundColor();
  }

  public switchNavbarBackgroundColor = () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    if (!top) {
      this.setState({
        isTop: true,
      });
    }
    window.addEventListener(
      'scroll',
      _.throttle(() => {
        const tops =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (!tops) {
          this.setState({
            isTop: true,
          });
        } else {
          this.setState({
            isTop: false,
          });
        }
      }, 150),
    );
  };

  public render() {
    const { isTop } = this.state;
    const { articleStore } = this.props;
    return (
      <header
        className={cs(
          styles.yancey_common_header,
          'no-user-select',
          isTop ? styles.clear_navbar_bg : '',
        )}
      >
        <Link to={routePath.home} className={styles.yancey_logo}>
          Yancey Official Blog
        </Link>
        <nav>
          <ul>
            {Object.keys(headerList).map(key => (
              <li className={styles.yancey_nav_item} key={key}>
                <Link to={headerList[key].url}>
                  <svg
                    className={cs(styles.header_icon, styles[`icon_${key}`])}
                  >
                    <use xlinkHref={`${svgIcons}${headerList[key].icon}`} />
                  </svg>
                  <span className={styles.menu_name}>{key}</span>
                </Link>
              </li>
            ))}
            <li
              className={styles.yancey_nav_item}
              onClick={() => articleStore!.toggleShowSearch()}
            >
              <svg className={cs(styles.header_icon, styles.icon_search)}>
                <use xlinkHref={`${svgIcons}${svgSprite.search2}`} />
              </svg>
            </li>
          </ul>
          <Search />
        </nav>
      </header>
    );
  }
}

export default Header;
