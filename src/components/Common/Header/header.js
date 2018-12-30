import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react/index';
import cs from 'classnames';
import _ from 'lodash';
import styles from './header.module.css';
import svgIcons from '../../../assets/image/yancey-official-blog-svg-icons.svg';
import { aliOSS, webp } from '../../../utils/tools';

const navInfo = {
  home: {
    url: '/',
    icon: '#home',
  },
  blog: {
    url: '/blog',
    icon: '#blogger-letter-logotype',
  },
  archive: {
    url: '/archive',
    icon: '#archive-black-box',
  },
  music: {
    url: '/music',
    icon: '#music-player',
  },
  apps: {
    url: '/apps',
    icon: '#app-store-apple-symbol',
  },
  CV: {
    url: '/cv',
    icon: '#curriculum-vitae',
  },
};

@inject('articleStore')
@observer
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.switchNavbarBackgroundColor();
  }

  switchNavbarBackgroundColor = () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    if (!top) {
      this.setState({
        isTop: true,
      });
    }
    window.addEventListener('scroll', _.throttle(() => {
      const tops = document.documentElement.scrollTop || document.body.scrollTop;
      if (!tops) {
        this.setState({
          isTop: true,
        });
      } else {
        this.setState({
          isTop: false,
        });
      }
    }, 150));
  };

  handleKeyDown() {
  }

  render() {
    const { articleStore } = this.props;
    const { isTop } = this.state;
    const miku = `${aliOSS}/miku.gif`;
    const isWebp = window.localStorage.isWebp;
    return (
      <header className={cs(styles['yancey-common-header'], 'no-user-select', isTop ? styles['clear-navbar-bg'] : '')}>
        <a href="/" className={styles['yancey-logo']}>
          Yancey Official Blog
        </a>
        <nav className="yancey-nav-wrapper">
          <ul className="yancey-nav-list">
            {
              Object.keys(navInfo)
                .map(key => (
                  <li className={styles['yancey-nav-item']} key={key}>
                    <Link to={navInfo[key].url}>
                      <svg className={cs(styles['header-icon'], styles[`icon-${key}`])}>
                        <use xlinkHref={`${svgIcons}${navInfo[key].icon}`} />
                      </svg>
                      <span className={styles['menu-name']}>
                        {key}
                      </span>
                    </Link>
                  </li>
                ))
            }
            <li
              className={styles['yancey-nav-item']}
              onClick={() => articleStore.onShowSearchChange()}
              onKeyDown={this.handleKeyDown}
              role="tab"
            >
              <svg className={cs(styles['header-icon'], styles.icon_search)}>
                <use xlinkHref={`${svgIcons}#magnifying-glass`} />
              </svg>
            </li>
          </ul>
        </nav>
        {
          articleStore.showSearch
            ? (
              <div className={styles.search_full_screen}>
                <svg
                  className={cs(styles['header-icon'], styles.icon_close)}
                  onClick={() => articleStore.onCloseSearchChange()}
                >
                  <use xlinkHref={`${svgIcons}#close`} />
                </svg>
                <div className={styles.search_cell}>
                  <p className={styles.search_title}>
                    find something?
                  </p>
                  <svg className={styles.search_icon}>
                    <use xlinkHref={`${svgIcons}#magnifying-glass`} />
                  </svg>
                  <label htmlFor="search">
                    <input
                      type="text"
                      id="search"
                      placeholder="Search"
                      onKeyUp={e => articleStore.onSearchChange(e)}
                    />
                  </label>
                </div>
                <figure
                  className={styles.miku_chan}
                  style={{ backgroundImage: `url(${isWebp ? `${miku}${webp}` : miku})` }}
                />
              </div>
            )
            : null
        }
      </header>
    );
  }
}

export default Header;
