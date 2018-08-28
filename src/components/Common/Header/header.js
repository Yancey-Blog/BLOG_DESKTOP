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
  photo: {
    url: '/photo',
    icon: '#photo-camera',
  },
  resume: {
    url: '/resume',
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
    this.state = {};
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    return (
      <header className={cs(styles['yancey-common-header'], 'no-user-select')}>
        <a href="/" className={styles['yancey-logo']}>
          Yancey Official Blog
        </a>
        <nav className="yancey-nav-wrapper">
          <ul className="yancey-nav-list">
            {
              Object.keys(navInfo).map(key => (
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
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
