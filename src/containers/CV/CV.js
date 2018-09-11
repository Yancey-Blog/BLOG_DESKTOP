import React, { Component } from 'react';
import cs from 'classnames';
import styles from './cv.module.css';
import { GET } from '../../https/axios';
import svgIcons from '../../assets/image/yancey-official-blog-svg-icons.svg';

class CV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    // this.getData();
  }

  componentWillUnmount() {
  }

  getData() {
    GET('/articles', {})
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    return (
      <main className={styles.cv_wrapper}>
        <section className={styles.cv_basic_container}>
          <figure className={styles.avatar} />
          <div className={styles.cv_basic}>
            <p className={cs(styles.identity, styles.name)}>
              Yancey Leo
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
                A full stack software engineer with 20 years of professional experience in many programming languages, frameworks, and environments.
              </p>
              <p className={styles.self_introduction_content}>
                Expert in translating business requirements into robust technical solutions that are delivered on time.
              </p>
              <p className={styles.self_introduction_content}>
                11 years working remotely as both a solo full stack developer as well as a member of a geographically distributed Agile team.
              </p>
              <p className={styles.self_introduction_content}>
                Currently seeking a position working with the latest JavaScript web, mobile, and server technologies including React/Redux/GraphQL, Angular, Node.js, Express, Redis, MongoDB,
                PostgreSQL/MySQL, et al.
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
          <div className={styles.detail_wrapper}>
            <div className={styles.summary}>
              <figure className={styles.logo} />
              <div className="company_info">
                <p className={styles.company_name}>
                  Hawaii Medical Service Association - Honolulu, HI
                </p>
                <p className={styles.position}>
                  Senior Software Engineer
                </p>
                <p className={styles.work_range}>
                  Aug 2016 to Present
                </p>
              </div>
            </div>
            <div className={styles.work_content}>
              <p className={styles.work_content_detail}>
                Brought on board to help meet increasing development demands of yancey public faciing website, hmsa.com. Developed new modules and refactored others to cohere with changes
                introduced by the Affordable Care Act. Refactored dozens of web pages and controls to meet Section 508 web accessibility standards. Helped develop new web module for healthcare
                providers. Lead effort to provide unit testing and code coverage across all C# and JavaScript code. Helped develop automated testing procedures using Selenium. Helped prepare
                transition of build process and testing environments to Microsoft Azure.
              </p>
              <p className={styles.technology_stack}>
                Tech: .NET, C#, MVC, WCF, Web Api, Entity Framework, Unity Framework, MSTest, Moq, Selenium, Bootstrap, AJAX, jQuery, Grunt, LESS, Apache Lucene, Team Foundation Server (TFS), SQL
                Server, Azure
              </p>
            </div>
          </div>
          <div className={styles.cv_detail_item}>
            <svg className={styles.item_icon}>
              <use xlinkHref={`${svgIcons}#code`} />
            </svg>
            <span className={styles.item_name}>
              Program Experience
            </span>
          </div>
          <div className={styles.detail_wrapper}>
            <div className={styles.summary}>
              <figure className={styles.logo} />
              <div className="company_info">
                <p className={styles.company_name}>
                  Program name Program name Program name
                </p>
                <p className={styles.position}>
                  Senior Software Engineer
                </p>
                <p className={styles.work_range}>
                  Aug 2016 to Present
                </p>
              </div>
            </div>
            <div className={styles.work_content}>
              <p className={styles.work_content_detail}>
                Brought on board to help meet increasing development demands of yancey public faciing website, hmsa.com. Developed new modules and refactored others to cohere with changes
                introduced by the Affordable Care Act. Refactored dozens of web pages and controls to meet Section 508 web accessibility standards. Helped develop new web module for healthcare
                providers. Lead effort to provide unit testing and code coverage across all C# and JavaScript code. Helped develop automated testing procedures using Selenium. Helped prepare
                transition of build process and testing environments to Microsoft Azure.
              </p>
              <p className={styles.technology_stack}>
                Tech: .NET, C#, MVC, WCF, Web Api, Entity Framework, Unity Framework, MSTest, Moq, Selenium, Bootstrap, AJAX, jQuery, Grunt, LESS, Apache Lucene, Team Foundation Server (TFS), SQL
                Server, Azure
              </p>
            </div>
          </div>
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
                  Harvard University
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
