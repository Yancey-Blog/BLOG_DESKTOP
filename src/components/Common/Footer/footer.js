import React, { Component } from 'react';
import cs from 'classnames';
import styles from './footer.module.css';
import svgIcons from '../../../assets/image/yancey-official-blog-svg-icons.svg';
import socialMedia from '../../../utils/socialMedia';

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
            { new Date().getFullYear() }
            {' '}
            Yancey Inc. All rights reserved.
          </p>
          <p className={styles.motto}>
            死は生の対極としてではなく、その一部として存在している。
          </p>
        </div>
        <div className={styles['footer-social-media-wrapper']}>
          <ul>
            <li className={styles['footer-social-media-item']}>
              <a href={socialMedia.github.url} target="_blank" rel="noopener noreferrer">
                <svg className={cs(styles['footer-icon'], 'icon-github')}>
                  <use xlinkHref={`${svgIcons}${socialMedia.github.icon}`} />
                </svg>
              </a>
            </li>
            <li className={styles['footer-social-media-item']}>
              <a href={socialMedia.googlePlus.url} target="_blank" rel="noopener noreferrer">
                <svg className={cs(styles['footer-icon'], 'icon-google-plus')}>
                  <use xlinkHref={`${svgIcons}${socialMedia.googlePlus.icon}`} />
                </svg>
              </a>
            </li>
            <li className={styles['footer-social-media-item']}>
              <a href={socialMedia.twitter.url} target="_blank" rel="noopener noreferrer">
                <svg className={cs(styles['footer-icon'], 'icon-twitter')}>
                  <use xlinkHref={`${svgIcons}${socialMedia.twitter.icon}`} />
                </svg>
              </a>
            </li>
            <li className={styles['footer-social-media-item']}>
              <a href={socialMedia.instagram.url} target="_blank" rel="noopener noreferrer">
                <svg className={cs(styles['footer-icon'], 'icon-instagram')}>
                  <use xlinkHref={`${svgIcons}${socialMedia.instagram.icon}`} />
                </svg>
              </a>
            </li>
            <li className={styles['footer-social-media-item']}>
              <a href={socialMedia.facebook.url} target="_blank" rel="noopener noreferrer">
                <svg className={cs(styles['footer-icon'], 'icon-facebook')}>
                  <use xlinkHref={`${svgIcons}${socialMedia.facebook.icon}`} />
                </svg>
              </a>
            </li>
            <li className={styles['footer-social-media-item']}>
              <a href={socialMedia.soundCloud.url} target="_blank" rel="noopener noreferrer">
                <svg className={cs(styles['footer-icon'], 'icon-soundcloud')}>
                  <use xlinkHref={`${svgIcons}${socialMedia.soundCloud.icon}`} />
                </svg>
              </a>
            </li>
            <li className={styles['footer-social-media-item']}>
              <a href={socialMedia.reddit.url} target="_blank" rel="noopener noreferrer">
                <svg className={cs(styles['footer-icon'], 'icon-reddit')}>
                  <use xlinkHref={`${svgIcons}${socialMedia.reddit.icon}`} />
                </svg>
              </a>
            </li>
            <li className={styles['footer-social-media-item']}>
              <a href={socialMedia.email.url} rel="noopener noreferrer">
                <svg className={cs(styles['footer-icon'], 'icon-email')}>
                  <use xlinkHref={`${svgIcons}${socialMedia.email.icon}`} />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
