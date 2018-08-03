import React, { Component } from 'react';
import cs from 'classnames';
import styles from './footer.module.css';
import svgIcons from '../../../assets/image/yancey-official-blog-svg-icons.svg';

const blogInfo = {
  aboutMe: {
    url: '/',
    lang: {
      en: 'About Me',
      ja: 'ヤンシーについて',
    },
  },
  privacyPolicy: {
    url: '/',
    lang: {
      en: 'Privacy Policy',
      ja: 'プライバシーポリシー',
    },
  },
  client: {
    url: '/client',
    lang: {
      en: 'Client',
      ja: 'クライアント',
    },
  },
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleKeyDown = () => {
  };

  render() {
    const { msg, switchLang } = this.props;
    return (
      <footer className={cs(styles['yancey-common-footer'], 'no-user-select')}>
        <div className={styles['copyright-motto-wrapper']}>
          <p className={styles.copyright}>
            Copyright &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            Yancey Inc. All rights reserved.
          </p>
          <p className={styles.motto}>
            死は生の対極としてではなく、その一部として存在している。
          </p>
        </div>
        <div className={styles['blog-info-wrapper']}>
          <div className={styles['blog-info-list']}>
            {
              Object.keys(blogInfo)
                .map(key => (
                  <a
                    href={blogInfo[key].url}
                    className={styles['blog-info-item']}
                    key={key}
                  >
                    <span className={msg === 'ja' ? styles.fuck : ''}>
                      {blogInfo[key].lang[msg]}
                    </span>
                  </a>
                ))
            }
          </div>
          <div className={styles['switch-language']}>
            <span
              role="link"
              tabIndex="0"
              className={cs(styles.language, 'english')}
              onClick={() => switchLang('en')}
              onKeyDown={this.handleKeyDown}

            >
              <svg className={styles['language-icon']}>
                <use xlinkHref={`${svgIcons}#united-kingdom`} />
              </svg>
            </span>
            <span
              role="link"
              tabIndex="0"
              className={cs(styles.language, 'japanese')}
              onClick={() => switchLang('ja')}
              onKeyDown={this.handleKeyDown}
            >
                    <svg className={styles['language-icon']}>
                <use xlinkHref={`${svgIcons}#japan`} />
              </svg>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
