import * as React from 'react';
import { Link } from 'react-router-dom';
import svgIcons from '@assets/images/yancey-official-blog-svg-icons.svg';
import styles from './Footer.module.scss';
import routePath from '@constants/routePath';
import { svgSprite, socialMedia } from '@constants/constants';

const copyright = {
  about: {
    url: routePath.about,
    name: 'About',
  },
  privacyPolicy: {
    url: routePath.legal,
    name: 'Privacy Policy',
  },
  apps: {
    url: routePath.apps,
    name: 'Apps',
  },
};

class Footer extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <footer className={styles.yancey_common_footer}>
        <div className={styles.footer_container}>
          <p className={styles.creator}>
            Brought to you with
            <svg className={styles.icon_heart}>
              <use xlinkHref={`${svgIcons}${svgSprite.heart}`} />
            </svg>
            by Yancey
          </p>

          <hr className={styles.dot_split} />
          <section className={styles.copyright_wrapper}>
            <p className={styles.copyright}>
              Copyright &copy; {new Date().getFullYear()} Yancey Inc. All rights
              reserved.
            </p>
            <ul>
              {Object.keys(copyright).map(key => (
                <li className={styles.copyright_item} key={key}>
                  <Link to={copyright[key].url}>{copyright[key].name}</Link>
                </li>
              ))}
              <li className={styles.copyright_item}>
                <a href={socialMedia.email.url}>Contact</a>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;
