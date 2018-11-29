import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import styles from './apps.module.css';

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <main className={cs(styles.apps_wrapper, 'no-user-select')}>
        <Helmet>
          <title>
            Apps | Yancey Inc.
          </title>
        </Helmet>
        <section className={cs(styles.platform, styles.mobile_wrapper)}>
          <h3 className={styles.platform_title}>
            DOWNLOAD YANCEY BLOG APP FOR
          </h3>
          <h1 className={styles.platform_type}>
            Phones
          </h1>
          <div className={styles.phone_list}>
            <Link to="/">
              <figure className={cs(styles.phone_item, styles.mobile_android)}>
                <span className={styles.platform_name}>
                Android
                </span>
              </figure>
            </Link>
            <Link to="/">
              <figure className={cs(styles.phone_item, styles.mobile_iOS)}>
                <span className={styles.platform_name}>
                iOS
                </span>
              </figure>
            </Link>
          </div>
          <p className={styles.mobile_download_url}>
            Visit
            {' '}
            <Link to="/apps">
              https://www.yanceyleo.com/apps
            </Link>
            {' '}
            on your mobile phone to install.
          </p>
        </section>
        <section className={cs(styles.platform, styles.desktop_wrapper)}>
          <h3 className={styles.platform_title}>
            DOWNLOAD YANCEY BLOG APP FOR
          </h3>
          <h1 className={styles.platform_type}>
            Mac or Windows PC
          </h1>
          <figure className={styles.desktop_mac} />
          <p className={styles.mac_version_support}>
            Mac OS X 10.9 and higher. By clicking the Download button, you agree to our
            {' '}
            <Link to="/legal">
              Terms & Privacy Policy.
            </Link>
          </p>
          <button
            className={styles.download_btn}
            type="button"
          >
            <Link to="/">
              DOWNLOAD FOR MAC OS X
            </Link>
          </button>
          <p className={styles.not_mac}>
            NOT ON A MAC?
          </p>
          <p className={styles.window_download_url}>
            <Link to="/">
              Download for Windows 8 and higher (64-bit)
            </Link>
          </p>
        </section>
        <section className={styles.overlay}>
          <dialog open>
            <h1>
              Sorry
            </h1>
            <p>
              Those apps are currently under construction.
              <br />
              Please check back at a later time.
            </p>
            <button type="button">
              <Link to="/">
                Go Home
              </Link>
            </button>
          </dialog>
        </section>
      </main>
    );
  }
}

export default Archive;
