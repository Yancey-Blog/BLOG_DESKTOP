import * as React from 'react';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import Title from '@components/Common/Title/Title';
import styles from './Apps.module.scss';
import routePath from '@constants/routePath';
import { domain } from '@constants/constants';

class Apps extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <main className={cs(styles.apps_wrapper, 'no-user-select')}>
        <Title title='Apps' />
        <section className={cs(styles.platform, styles.mobile_wrapper)}>
          <h3 className={styles.platform_title}>
            DOWNLOAD YANCEY BLOG APP FOR
          </h3>
          <h1 className={styles.platform_type}>Phones</h1>
          <div className={styles.phone_list}>
            <Link to={routePath.home}>
              <figure className={cs(styles.phone_item, styles.mobile_android)}>
                <span className={styles.platform_name}>Android</span>
              </figure>
            </Link>
            <Link to={routePath.home}>
              <figure className={cs(styles.phone_item, styles.mobile_iOS)}>
                <span className={styles.platform_name}>iOS</span>
              </figure>
            </Link>
          </div>
          <p className={styles.mobile_download_url}>
            Visit{' '}
            <Link to={routePath.apps}>{`${domain}${routePath.apps}`}</Link> on
            your mobile phone to install.
          </p>
        </section>
        <section className={cs(styles.platform, styles.desktop_wrapper)}>
          <h3 className={styles.platform_title}>
            DOWNLOAD YANCEY BLOG APP FOR
          </h3>
          <h1 className={styles.platform_type}>Mac or Windows PC</h1>
          <figure className={styles.desktop_mac} />
          <p className={styles.mac_version_support}>
            Mac OS X 10.9 and higher. By clicking the Download button, you agree
            to our <Link to={routePath.legal}>Terms & Privacy Policy.</Link>
          </p>
          <button className={styles.download_btn} type='button'>
            <Link to={routePath.home}>DOWNLOAD FOR MAC OS X</Link>
          </button>
          <p className={styles.not_mac}>NOT ON A MAC?</p>
          <p className={styles.window_download_url}>
            <Link to={routePath.home}>
              Download for Windows 8 and higher (64-bit)
            </Link>
          </p>
        </section>
        <section className={styles.overlay}>
          <div>
            <h1>Sorry</h1>
            <p>
              Those apps are currently under construction.
              <br />
              Please check back at a later time.
            </p>
            <button type='button'>
              <Link to={routePath.home}>Go Home</Link>
            </button>
          </div>
        </section>
      </main>
    );
  }
}

export default Apps;
