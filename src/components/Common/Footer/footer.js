import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import styles from './footer.module.css';
import svgIcons from '../../../assets/image/yancey-official-blog-svg-icons.svg';

const copyright = {
  about: {
    url: '/about',
    name: 'About',
  },
  privacyPolicy: {
    url: '/legal',
    name: 'Privacy Policy',
  },
  apps: {
    url: '/apps',
    name: 'Apps',
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
                  <Link to={copyright[key].url}>
                    {copyright[key].name}
                  </Link>
                </li>
              ))
            }
            <li className={styles['copyright-item']}>
              <a href="mailto:team@yanceyleo.com">
                Contact
              </a>
            </li>
          </ul>
        </section>
      </footer>
    );
  }
}

export default Footer;
