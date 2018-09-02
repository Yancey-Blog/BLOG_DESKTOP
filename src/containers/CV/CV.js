import React, { Component } from 'react';
import cs from 'classnames';
import styles from './cv.module.css';
import { GET } from '../../https/axios';
import svgIcons from '../../assets/image/yancey-official-blog-svg-icons.svg';

class CV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['https://react-resume-mui.herokuapp.com/'],
    };
  }

  componentWillMount() {
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
          <figure className={styles.avatar}/>
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
              22
            </p>
            <p className={styles.identity}>
              <span>
                Work Experience:
                {' '}
              </span>
              2 years
            </p>
            <p className={styles.identity}>
              <span>
                Expected Salary:
                {' '}
              </span>
              15k ~ 20k
            </p>
            <p className={styles.identity}>
              <span>
                Dream Position:
                {' '}
              </span>
              Front-end developer
            </p>
            <p className={cs(styles.identity, styles.email)}>
              <a href="mailto:team@yanceyleo.com">
                <span>
                  Email:
                  {' '}
                </span>
                team@yanceyleo.com
              </a>
            </p>
            <div className={styles.introduction_wrapper}>
              <p>
                A full stack software engineer with 20 years of professional experience in many programming languages, frameworks, and environments.
              </p>
              <p>
                Expert in translating business requirements into robust technical solutions that are delivered on time.
              </p>
              <p>
                11 years working remotely as both a solo full stack developer as well as a member of a geographically distributed Agile team.
              </p>
              <p>
                Currently seeking a position working with the latest JavaScript web, mobile, and server technologies including React/Redux/GraphQL, Angular, Node.js, Express, Redis, MongoDB,
                PostgreSQL/MySQL, et al.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.cv_detail_container}>
          <div className={styles.work_experience_wrapper}>
            <div className={styles.work_experience_container}>
              <figure className={styles.company_logo}/>
              <div className={styles.company_info}>
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
            <p className={styles.work_content}>
              Brought on board to help meet increasing development demands of yancey public faciing website, hmsa.com. Developed new modules and refactored others to cohere with changes
              introduced by the Affordable Care Act. Refactored dozens of web pages and controls to meet Section 508 web accessibility standards. Helped develop new web module for healthcare
              providers. Lead effort to provide unit testing and code coverage across all C# and JavaScript code. Helped develop automated testing procedures using Selenium. Helped prepare
              transition of build process and testing environments to Microsoft Azure.
            </p>
          </div>
        </section>
      </main>
    );
  }
}

export default CV;
