import * as React from 'react';
import styles from './Legal.module.scss';
import { mail } from '../../constant/constant';

class License extends React.Component<{}, {}> {
  constructor(props: object) {
    super(props);
    this.state = {};
  }

  public componentWillMount() {
    window.scrollTo(0, 0);
  }

  public render() {
    return (
      <section>
        <div className={styles.legal_header_container}>
          <h1 className={styles.legal_header}>License</h1>
          <p className={styles.legal_intro}>
            We use the Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA
            4.0) for the website.
          </p>
        </div>
        <figure className={styles.split_img} />
        <ul className={styles.legal_list}>
          <li className={styles.legal_item}>
            <p>
              The <strong>source code and techniques,</strong> covered in our
              tutorials, are free for use in your personal and commercial
              projects. The <strong>text and images of our articles,</strong>{' '}
              however, are copyrighted and may not be used or copied without
              written permission (this includes translation of the articles in
              different languages).
            </p>
            <p>
              You <strong>can</strong> use, modify and build upon our code for
              your (or your clients’) personal and commercial projects with no
              attribution necessary.
            </p>
            <p>
              You are <strong>not allowed</strong> to redistribute our demo
              files directly (you are encouraged to share a link to the
              tutorials instead).
            </p>
            <p>
              If you plan to include our source code in site templates or to
              package it with other forms of digital content, meant for direct
              selling on online marketplaces (such as ThemeForest, ActiveDen
              etc.), you are required to <strong>include a back-link</strong>{' '}
              to the article in question on Tutorialzine.com.
            </p>
            <p>
              Feel free to{' '}
              <a
                href={`mailto:${mail}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                contact us
              </a>{' '}
              if you have any questions about our licensing terms.
            </p>
          </li>
          <li className={styles.legal_item}>
            <h2>
              Owner and Data Controller
              <span className={styles.split_line} />
            </h2>
            <p>Yancey Inc.</p>
            <p>Contact email: {mail}</p>
            <p>
              Date of last revision: <br />
              Sunday, December 16, 2018
            </p>
          </li>
        </ul>
      </section>
    );
  }
}

export default License;
