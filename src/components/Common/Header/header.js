import React, { Component } from 'react';
import { observable, configure, action } from 'mobx';
import { observer } from 'mobx-react';
import cs from 'classnames';
import styles from './header.module.css';
import svgIcons from '../../../assets/image/yancey-official-blog-svg-icons.svg';

configure({ enforceActions: true });

const navbarInfo = {
  home: {
    url: '/',
    icon: '#home',
    language: {
      en: 'Home',
      ja: 'ホーム',
    },
  },
  blog: {
    url: '/blog',
    icon: '#blogger-letter-logotype',
    language: {
      en: 'Blog',
      ja: 'ブログ',
    },
  },
  archive: {
    url: '/archive',
    icon: '#archive-black-box',
    language: {
      en: 'Archive',
      ja: 'アーカイブ',
    },
  },
  music: {
    url: '/music',
    icon: '#music-player',
    language: {
      en: 'Music',
      ja: 'ミュージック',
    },
  },
  client: {
    url: '/apps',
    icon: '#app-store-apple-symbol',
    language: {
      en: 'Apps',
      ja: 'APPS',
    },
  },
  photo: {
    url: '/photo',
    icon: '#photo-camera',
    language: {
      en: 'Photo',
      ja: '写真',
    },
  },
  resume: {
    url: '/resume',
    icon: '#curriculum-vitae',
    language: {
      en: 'Resume',
      ja: '履歴書',
    },
  },
  rss: {
    url: '/rss',
    icon: '#rss-symbol',
    language: {
      en: 'RSS',
      ja: 'RSS',
    },
  },
};

@observer
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
    const { msg } = this.props;
    return (
      <header className={cs(styles['yancey-common-header'], 'no-user-select')}>
        <a href="/" className={styles['yancey-logo']}>
          Yancey Official Blog
        </a>
        <nav className={styles['yancey-navbar-wrapper']}>
          <ul className="yancey-navbar-list">
            {
              Object.keys(navbarInfo).map(key => (
                <li className={styles['yancey-navbar-item']} key={key}>
                  <a href={navbarInfo[key].url}>
                    <svg className={cs(styles['header-icon'], styles[`icon-${key}`])}>
                      <use xlinkHref={`${svgIcons}${navbarInfo[key].icon}`} />
                    </svg>
                    <span className={styles['menu-name']}>
                      {navbarInfo[key].language[msg]}
                    </span>
                  </a>
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
