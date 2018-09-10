import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import styles from './header.module.css';
import svgIcons from '../../../assets/image/yancey-official-blog-svg-icons.svg';

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
  RSS: {
    url: '/rss',
    icon: '#rss-symbol',
  },
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  handleKeyDown() {
  }

  showSearch() {
    this.setState({
      showSearch: true,
    });
  }

  closeSearch() {
    this.setState({
      showSearch: false,
    });
  }

  render() {
    const { showSearch } = this.state;
    return (
      <header className={cs(styles['yancey-common-header'], 'no-user-select')}>
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
              onClick={() => this.showSearch()}
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
          showSearch
            ? (
              <div className={styles.search_full_screen}>
                <svg
                  className={cs(styles['header-icon'], styles.icon_close)}
                  onClick={() => this.closeSearch()}
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
                    <input type="text" id="search" placeholder="Search" />
                  </label>
                </div>
                <figure className={styles.miku_chan} />
              </div>
            )
            : null
        }
      </header>
    );
  }
}

export default Header;
