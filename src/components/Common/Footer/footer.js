import React, { Component } from 'react';
import styles from './footer.module.css';

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

  render() {
    return (
      <footer className={styles['yancey-common-footer']}>
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
                    <span>
                      {blogInfo[key].lang.ja}
                    </span>
                  </a>
                ))
            }
          </div>
          <div className={styles['switch-language']}>
            <span className={styles.english}>
              English
            </span>
            <span className="japanese">
              日本語
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
