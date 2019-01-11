import * as React from 'react';
import { observer, inject } from 'mobx-react';
import cs from 'classnames';
import Helmet from 'react-helmet';
import styles from './CV.module.scss';
import svgIcons from '../../assets/images/yancey-official-blog-svg-icons.svg';
import { socialMedia } from '../../constant/constant';
import { ICVProps, IWorkExperience, IProgramExperience } from '../../types/cv';

@inject('cvStore')
@observer
class CV extends React.Component<ICVProps, {}> {
  constructor(props: ICVProps) {
    super(props);
    this.state = {};
  }

  public componentWillMount() {
    window.scrollTo(0, 0);
  }

  public componentDidMount() {
    const { cvStore } = this.props;
    cvStore.getUserData();
    cvStore.getWorkExperienceData();
    cvStore.getProgramExperienceData();
  }

  public render() {
    const { cvStore } = this.props;
    return (
      <main className={styles.cv_wrapper}>
        <Helmet>
          <title>CV | Yancey Inc.</title>
        </Helmet>
        <section className={styles.cv_basic_container}>
          <figure
            className={styles.avatar}
            style={{ backgroundImage: `url(${cvStore!.user.avatar})` }}
          />
          <div className={styles.cv_basic}>
            <p className={cs(styles.identity, styles.name)}>
              {cvStore!.user.user_name}
            </p>
            <p className={styles.identity}>
              <span>Gender: </span>
              Man
            </p>
            <p className={styles.identity}>
              <span>City: </span>
              {cvStore!.user.city}
            </p>
            <p className={styles.identity}>
              <span>Age: </span>
              {new Date().getFullYear() - 1996}
            </p>
            <p className={styles.identity}>
              <span>Work Experience: </span>
              {new Date().getFullYear() - 2017}{' '}
              {new Date().getFullYear() - 2017 > 1 ? 'years' : 'year'}
            </p>
            <p className={styles.identity}>
              <span>Position: </span>
              Front-end developer
            </p>
            <p className={cs(styles.identity, styles.media)}>
              <span>GitHub: </span>
              <a
                href={socialMedia.github.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                YanceyOfficial
              </a>
            </p>
            <p className={cs(styles.identity, styles.media)}>
              <span>Email: </span>
              <a href={socialMedia.email.url}>
                {socialMedia.email.url.split(':')[1]}
              </a>
            </p>
            <div className={styles.self_introduction}>
              <p className={styles.self_introduction_content}>
                {cvStore!.user.self_introduction}
              </p>
            </div>
          </div>
        </section>
        <section className={styles.cv_detail_container}>
          <div className={styles.cv_detail_item}>
            <svg className={styles.item_icon}>
              <use xlinkHref={`${svgIcons}#history`} />
            </svg>
            <span className={styles.item_name}>Work Experience</span>
          </div>
          {cvStore!.workExperience.map((item: IWorkExperience) => (
            <div className={styles.detail_wrapper} key={item._id}>
              <div className={styles.summary}>
                <div>
                  <p className={styles.company_name}>{item.enterprise_name}</p>
                  <p className={styles.position}>{item.position}</p>
                  <p className={styles.work_range}>
                    {item.in_service[0]} ~ {item.in_service[1]}
                  </p>
                </div>
              </div>
              <div className={styles.work_content}>
                <p className={styles.work_content_detail}>
                  {item.work_content}
                </p>
                <p className={styles.technology_stack}>
                  Tech: {item.work_technology_stack.toString()}
                </p>
              </div>
            </div>
          ))}
          <div className={styles.cv_detail_item}>
            <svg className={styles.item_icon}>
              <use xlinkHref={`${svgIcons}#code`} />
            </svg>
            <span className={styles.item_name}>Program Experience</span>
          </div>
          {cvStore!.programExperience.map((item: IProgramExperience) => (
            <div className={styles.detail_wrapper} key={item._id}>
              <div className={styles.summary}>
                <figure className={styles.logo} />
                <div>
                  <p className={styles.company_name}>
                    <a href={item.program_url} className={styles.program_name}>
                      {item.program_name}
                    </a>
                  </p>
                </div>
              </div>
              <div className={styles.work_content}>
                <p className={styles.work_content_detail}>
                  {item.program_content}
                </p>
                <p className={styles.technology_stack}>
                  Tech: {item.program_technology_stack.toString()}
                </p>
              </div>
            </div>
          ))}
          <div className={styles.cv_detail_item}>
            <svg className={styles.item_icon}>
              <use xlinkHref={`${svgIcons}#mortarboard`} />
            </svg>
            <span className={styles.item_name}>Education</span>
          </div>
          <div className={styles.detail_wrapper}>
            <div className={cs(styles.summary)}>
              <div>
                <p className={styles.position}>
                  Institute of Disaster Prevention Science and Technology
                </p>
                <p className={styles.work_range}>Sep 2014 to Jun 2018</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default CV;
