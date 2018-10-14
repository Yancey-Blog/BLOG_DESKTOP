import React, { Component } from 'react';
import cs from 'classnames';
import Helmet from 'react-helmet';
import { inject, observer } from 'mobx-react/index';
import styles from './cv.module.css';
import svgIcons from '../../assets/image/yancey-official-blog-svg-icons.svg';

@inject('cvStore')
@observer
class CV extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const { cvStore } = this.props;
    cvStore.getUserInfoData();
    cvStore.getProgramExperienceData();
    cvStore.getWorkExperienceData();
  }

  componentWillUnmount() {
  }

  render() {
    const { cvStore } = this.props;
    return (
      <main className={styles.cv_wrapper}>
        <Helmet>
          <title>
            CV | Yancey Inc.
          </title>
        </Helmet>
        <section className={styles.cv_basic_container}>
          <figure
            className={styles.avatar}
            style={{ backgroundImage: `url(${cvStore.userInfoData.avatar})` }}
          />
          <div className={styles.cv_basic}>
            <p className={cs(styles.identity, styles.name)}>
              {cvStore.userInfoData.user_name}
            </p>
            <p className={styles.identity}>
              <span>
                Gender:
                {' '}
              </span>
              Man
            </p>
            <p className={styles.identity}>
              <span>
                City:
                {' '}
              </span>
              {cvStore.userInfoData.city}
            </p>
            <p className={styles.identity}>
              <span>
                Age:
                {' '}
              </span>
              {new Date().getFullYear() - 1996}
            </p>
            <p className={styles.identity}>
              <span>
                Work Experience:
                {' '}
              </span>
              {new Date().getFullYear() - 2017}
              {' '}
              {new Date().getFullYear() - 2017 > 1 ? 'years' : 'year'}
            </p>
            <p className={styles.identity}>
              <span>
                Position:
                {' '}
              </span>
              Front-end developer
            </p>
            <p className={cs(styles.identity, styles.media)}>
              <span>
                GitHub:
                {' '}
              </span>
              <a href="https://github.com/YanceyOfficial" target="_blank" rel="noopener noreferrer">
                YanceyOfficial
              </a>
            </p>
            <p className={cs(styles.identity, styles.media)}>
              <span>
                Email:
                {' '}
              </span>
              <a href="mailto:team@yanceyleo.com">
                team@yanceyleo.com
              </a>
            </p>
            <div className={styles.self_introduction}>
              <p className={styles.self_introduction_content}>
                {cvStore.userInfoData.self_introduction}
              </p>
            </div>
          </div>
        </section>
        <section className={styles.cv_detail_container}>
          <div className={styles.cv_detail_item}>
            <svg className={styles.item_icon}>
              <use xlinkHref={`${svgIcons}#history`} />
            </svg>
            <span className={styles.item_name}>
              Work Experience
            </span>
          </div>
          {
            Object.keys(cvStore.workExperienceData).map(key => (
              <div className={styles.detail_wrapper} key={key}>
                <div className={styles.summary}>
                  <div className="company_info">
                    <p className={styles.company_name}>
                      {cvStore.workExperienceData[key].enterprise_name}
                    </p>
                    <p className={styles.position}>
                      {cvStore.workExperienceData[key].position}
                    </p>
                    <p className={styles.work_range}>
                      {cvStore.workExperienceData[key].in_service[0]}
                      {' '}
                      ~
                      {' '}
                      {cvStore.workExperienceData[key].in_service[1]}
                    </p>
                  </div>
                </div>
                <div className={styles.work_content}>
                  <p className={styles.work_content_detail}>
                    {cvStore.workExperienceData[key].work_content}
                  </p>
                  <p className={styles.technology_stack}>
                    Tech:
                    {' '}
                    {cvStore.workExperienceData[key].work_technology_stack.toString()}
                  </p>
                </div>
              </div>
            ))
          }
          <div className={styles.cv_detail_item}>
            <svg className={styles.item_icon}>
              <use xlinkHref={`${svgIcons}#code`} />
            </svg>
            <span className={styles.item_name}>
              Program Experience
            </span>
          </div>
          {
            Object.keys(cvStore.programExperienceData).map(key => (
              <div className={styles.detail_wrapper} key={key}>
                <div className={styles.summary}>
                  <figure className={styles.logo} />
                  <div className="company_info">
                    <p className={styles.company_name}>
                      <a
                        href={cvStore.programExperienceData[key].program_url}
                        className={styles.program_name}
                      >
                        {cvStore.programExperienceData[key].program_name}
                      </a>
                    </p>
                  </div>
                </div>
                <div className={styles.work_content}>
                  <p className={styles.work_content_detail}>
                    {cvStore.programExperienceData[key].program_content}
                  </p>
                  <p className={styles.technology_stack}>
                    Tech:
                    {' '}
                    {cvStore.programExperienceData[key].program_technology_stack.toString()}
                  </p>
                </div>
              </div>
            ))
          }
          <div className={styles.cv_detail_item}>
            <svg className={styles.item_icon}>
              <use xlinkHref={`${svgIcons}#mortarboard`} />
            </svg>
            <span className={styles.item_name}>
              Education
            </span>
          </div>
          <div className={styles.detail_wrapper}>
            <div className={cs(styles.summary)}>
              <div className="company_info">
                <p className={styles.position}>
                  Institute of Disaster Prevention Science and Technology
                </p>
                <p className={styles.work_range}>
                  Sep 2014 to Jun 2018
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default CV;
