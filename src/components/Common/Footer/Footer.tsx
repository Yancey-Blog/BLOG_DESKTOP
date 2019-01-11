import * as React from 'react';
import { Link } from 'react-router-dom';
import svgIcons from '../../../assets/images/yancey-official-blog-svg-icons.svg';
import styles from './Footer.module.scss';
import { svgSprite, socialMedia } from '../../../constant/constant';

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

class Footer extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <footer className={styles.yancey_common_footer}>
        <section>
          <p className={styles.creator}>
            Brought to you with
            <svg className={styles.icon_heart}>
              <use xlinkHref={`${svgIcons}${svgSprite.heart}`} />
            </svg>
            by Yancey
          </p>
        </section>
        <hr className={styles.dot_split} />
        <section className={styles.copyright_wrapper}>
          <p className={styles.copyright}>
            Copyright &copy; {new Date().getFullYear()} Yancey Inc. All rights
            reserved.
          </p>
          <ul className='copyright_list'>
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
      </footer>
    );
  }
}

export default Footer;
