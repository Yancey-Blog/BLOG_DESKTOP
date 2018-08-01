import React, { Component } from 'react';
import cs from 'classnames';
import styles from './header.module.css';
import svgIcons from '../../../assets/image/yancey-official-blog-svg-icons.svg';

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
    const navbarInfo = {
      home: {
        url: '/',
        icon: '#home',
        language: {
          en: 'HOME',
          ja: 'ホーム',
          zh_cn: '主页',
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
        icon: '#open-folder',
        language: {
          en: 'ARCHIVE',
          ja: 'アーカイブ',
          zh_cn: '归档',
        },
      },
      music: {
        url: '/music',
        icon: '#music-player',
        language: {
          en: 'MUSIC',
          ja: 'ミュージック',
          zh_cn: '音乐',
        },
      },
      photo: {
        url: '/photo',
        icon: '#photo-camera',
        language: {
          en: 'PHOTO',
          ja: '写真',
          zh_cn: '相册',
        },
      },
      resume: {
        url: '/resume',
        icon: '#curriculum-vitae',
        language: {
          en: 'RESUME',
          ja: '履歴書',
          zh_cn: '简历',
        },
      },
    };
    return (
      <header className={cs(styles['yancey-common-header'], 'no-user-select')}>
        <a href={navbarInfo.home.url} className={styles['yancey-logo']}>
          Yancey Official Blog
        </a>
        <nav className={styles['yancey-navbar-wrapper']}>
          <ul className="yancey-navbar-list">
            <li className={styles['yancey-navbar-item']}>
              <a href={navbarInfo.home.url}>
                <svg className={cs(styles['header-icon'], styles['icon-home'])}>
                  <use xlinkHref={`${svgIcons}${navbarInfo.home.icon}`} />
                </svg>
                <span className={styles['menu-name']}>
                  {navbarInfo.home.language.en}
                </span>
              </a>
            </li>
            <li className={styles['yancey-navbar-item']}>
              <a href={navbarInfo.blog.url}>
                <svg className={cs(styles['header-icon'], styles['icon-blog'])}>
                  <use xlinkHref={`${svgIcons}${navbarInfo.blog.icon}`} />
                </svg>
                <span className={styles['menu-name']}>
                  {navbarInfo.blog.language.en}
                </span>
              </a>
            </li>
            <li className={styles['yancey-navbar-item']}>
              <a href={navbarInfo.archive.url}>
                <svg className={cs(styles['header-icon'], styles['icon-archive'])}>
                  <use xlinkHref={`${svgIcons}${navbarInfo.archive.icon}`} />
                </svg>
                <span className={styles['menu-name']}>
                  {navbarInfo.archive.language.en}
                </span>
              </a>
            </li>
            <li className={styles['yancey-navbar-item']}>
              <a href={navbarInfo.music.url}>
                <svg className={cs(styles['header-icon'], styles['icon-music'])}>
                  <use xlinkHref={`${svgIcons}${navbarInfo.music.icon}`} />
                </svg>
                <span className={styles['menu-name']}>
                  {navbarInfo.music.language.en}
                </span>
              </a>
            </li>
            <li className={styles['yancey-navbar-item']}>
              <a href={navbarInfo.photo.url}>
                <svg className={cs(styles['header-icon'], styles['icon-photo'])}>
                  <use xlinkHref={`${svgIcons}${navbarInfo.photo.icon}`} />
                </svg>
                <span className={styles['menu-name']}>
                  {navbarInfo.photo.language.en}
                </span>
              </a>
            </li>
            <li className={styles['yancey-navbar-item']}>
              <a href={navbarInfo.resume.url}>
                <svg className={cs(styles['header-icon'], styles['icon-resume'])}>
                  <use xlinkHref={`${svgIcons}${navbarInfo.resume.icon}`} />
                </svg>
                <span className={styles['menu-name']}>
                  {navbarInfo.resume.language.en}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
