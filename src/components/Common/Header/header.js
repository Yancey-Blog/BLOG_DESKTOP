import React, { Component } from 'react';
import cs from 'classnames';
import styles from './header.module.css';
import svgIcons from '../../../assets/image/yancey-official-blog-svg-icons.svg';

const navbarInfo = {
  home: {
    url: '/',
    icon: '#home',
    language: {
      en: 'HOME',
      ja: 'ホーム',
      zh_cn: '主頁',
    },
  },
  blog: {
    url: '/blog',
    icon: '#blogger-letter-logotype',
    language: {
      en: 'BLOG',
      ja: 'ブログ',
      zh_cn: '博客',
    },
  },
  archive: {
    url: '/archive',
    icon: '#archive-black-box',
    language: {
      en: 'ARCHIVE',
      ja: 'アーカイブ',
      zh_cn: '歸檔',
    },
  },
  music: {
    url: '/music',
    icon: '#music-player',
    language: {
      en: 'MUSIC',
      ja: 'ミュージック',
      zh_cn: '音樂',
    },
  },
  photo: {
    url: '/photo',
    icon: '#photo-camera',
    language: {
      en: 'PHOTO',
      ja: '写真',
      zh_cn: '寫真',
    },
  },
  resume: {
    url: '/resume',
    icon: '#curriculum-vitae',
    language: {
      en: 'RESUME',
      ja: '履歴書',
      zh_cn: '簡歷',
    },
  },
  client: {
    url: '/client',
    icon: '#app-store-apple-symbol',
    language: {
      en: 'CLIENT',
      ja: 'クライアント',
      zh_cn: '客戶端',
    },
  },
  rss: {
    url: '/rss',
    icon: '#rss-symbol',
    language: {
      en: 'RSS',
      ja: 'RSS',
      zh_cn: 'RSS',
    },
  },
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  getlang = () => {
    this.setState({ lang: 'ja' });
  };

  render() {
    const { lang } = this.state;
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
                      {navbarInfo[key].language[lang]}
                    </span>
                  </a>
                </li>
              ))
            }
          </ul>
          <button onClick={this.getlang}>
            cccc
          </button>
        </nav>
      </header>
    );
  }
}

export default Header;
