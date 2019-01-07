import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './Legal.module.scss';
import { mail } from '../../constant/constant';
import routePath from '../../constant/routePath';

class Service extends React.Component<{}, {}> {
  constructor(props: object) {
    super(props);
    this.state = {};
  }

  public componentWillMount() {
    window.scrollTo(0, 0);
  }

  public componentDidMount() {
    // todo
  }

  public componentWillUnmount() {
    // todo
  }

  public render() {
    return (
      <section>
        <div className={styles.legal_header_container}>
          <h1 className={styles.legal_header}>Terms of Service</h1>
          <p className={styles.legal_intro}>
            Confidence, like art, never comes from having all the answers it
            comes from being open to all the questions.
          </p>
        </div>
        <figure className={styles.split_img} />
        <ul className={styles.legal_list}>
          <li className={styles.legal_item}>
            <p>
              This website (yanceyleo.com) is a product of Yancey Leo,
              registered at Osaka, Japan (referred to as "we" and "the company"
              in this document). The term "you" refers to the user or viewer of
              our website.
            </p>
            <p>
              This policy and the terms that are contained herein govern Yancey
              Leo's relationship with you in relation to this website. Your
              usage of our website equates to agreement to these terms, and the
              corresponding{' '}
              <Link to={routePath.privacyPrivacy}>privacy policy.</Link>
            </p>
            <h3>Methods of processing</h3>
            <p>
              The use of this website is subject to the following terms of use:
            </p>
            <ul>
              <li>
                <p>
                  The content of the pages of this website is for your general
                  information and use only. It is subject to change without
                  notice.
                </p>
              </li>
              <li>
                <p>
                  Neither we nor any third parties provide any warranty or
                  guarantee as to the accuracy, timeliness, performance,
                  completeness or suitability of the information and materials
                  found or offered on this website for any particular purpose.
                  You acknowledge that such information and materials may
                  contain inaccuracies or errors and we expressly exclude
                  liability for any such inaccuracies or errors to the fullest
                  extent permitted by law.
                </p>
              </li>
              <li>
                <p>
                  Your use of any information or materials on this website is
                  entirely at your own risk, for which we shall not be liable.
                  It shall be your own responsibility to ensure that any
                  products, services or information available through this
                  website meet your specific requirements.
                </p>
              </li>
              <li>
                <p>
                  This website contains material which is owned by or licensed
                  to us. This material includes, but is not limited to, the
                  design, layout, look, appearance and graphics. Reproduction is
                  prohibited other than in accordance with the copyright notice,
                  which forms part of these terms and conditions.
                </p>
              </li>
              <li>
                <p>
                  All trade marks reproduced in this website which are not the
                  property of, or licensed to, the operator are acknowledged on
                  the website.
                </p>
              </li>
              <li>
                <p>
                  Unauthorised use of this website may give rise to a claim for
                  damages and/or be a criminal offence.
                </p>
              </li>
              <li>
                <p>
                  From time to time this website may also include links to other
                  websites. These links are provided for your convenience to
                  provide further information. They do not signify that we
                  endorse the website(s). We have no responsibility for the
                  content of the linked website(s).
                </p>
              </li>
              <li>
                <p>
                  Your use of this website and any dispute arising out of such
                  use of the website is subject to the laws and policies of the
                  European Union.
                </p>
              </li>
            </ul>
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

export default Service;
