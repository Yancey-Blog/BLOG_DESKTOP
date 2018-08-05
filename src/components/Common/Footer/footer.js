import React, { Component } from 'react';
import cs from 'classnames';
import styles from './footer.module.css';
import svgIcons from '../../../assets/image/yancey-official-blog-svg-icons.svg';

const copyright = {
  about: {
    url: '/',
    lang: {
      en: 'About',
      ja: 'Yanceyについて',
    },
  },
  privacyPolicy: {
    url: '/',
    lang: {
      en: 'Privacy Policy',
      ja: 'プライバシーポリシー',
    },
  },
  apps: {
    url: '/apps',
    lang: {
      en: 'Apps',
      ja: 'クライアント',
    },
  },
  contact: {
    url: 'mailto:team@yanceyleo.com',
    lang: {
      en: 'Contact',
      ja: 'メール',
    },
  },
  sayaka: {
    url: 'http://www.yamamotosayaka.jp/',
    lang: {
      en: 'Sayaka',
      ja: 'さやか',
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
      <footer className={cs(styles['yancey-common-footer'], 'no-user-select')}>
        <section className="creator-wrapper">
          <p className={styles.creator}>
            Brought to you with
            <svg className={styles['icon-heart']}>
              <use xlinkHref={`${svgIcons}#heart`} />
            </svg>
            by Yancey
          </p>
        </section>
        <hr className={styles['dot-split']} />
        <section className={styles['copyright-wrapper']}>
          <p className={styles.copyright}>
            Copyright &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            Yancey Inc. All rights reserved.
          </p>
          <ul className="copyright-list">
            {
              Object.keys(copyright).map(key => (
                <li className={styles['copyright-item']} key={key}>
                  <a href={copyright[key].url}>
                    {copyright[key].lang.en}
                  </a>
                </li>
              ))
            }
          </ul>
        </section>
      </footer>
    );
  }
}

export default Footer;
