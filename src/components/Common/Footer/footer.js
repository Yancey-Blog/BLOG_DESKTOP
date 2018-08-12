import React, { Component } from 'react';
import cs from 'classnames';
import styles from './footer.module.css';
import svgIcons from '../../../assets/image/yancey-official-blog-svg-icons.svg';

const copyright = {
  about: {
    url: '/',
    name: 'About',
  },
  privacyPolicy: {
    url: '/',
    name: 'Privacy Policy',
  },
  apps: {
    url: '/apps',
    name: 'Apps',
  },
  contact: {
    url: 'mailto:team@yanceyleo.com',
    name: 'Contact',
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
                    {copyright[key].name}
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
