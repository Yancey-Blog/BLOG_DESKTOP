import * as React from 'react';
import { observer, inject } from 'mobx-react';
import cs from 'classnames';
import Title from '@components/Common/Title/Title';
import styles from './CV.module.scss';
import svgIcons from '@assets/images/yancey-official-blog-svg-icons.svg';
import { socialMedia, svgSprite, webpSuffix } from '@constants/constants';
import { ICVProps, IWorkExperience, IProgramExperience } from '../../types/cv';

import Card from '@components/CV/Card';

@inject('cvStore')
@observer
class CV extends React.Component<ICVProps, {}> {
  constructor(props: ICVProps) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    const { cvStore } = this.props;
    cvStore.getUser();
    cvStore.getWorkExperience();
    cvStore.getProgramExperience();
  }

  public render() {
    const {
      cvStore: { user, workExperience, programExperience },
    } = this.props;
    const isWebp = window.localStorage.isWebp === 'true';
    return (
      <main className={styles.cv_wrapper}>
        <Title title='CV' />
        <section className={styles.cv_basic_container}>
          <figure
            className={styles.avatar}
            style={{
              backgroundImage: `url(${
                isWebp ? `${user.avatar}${webpSuffix}` : user.avatar
              })`,
            }}
          />
          <div className={styles.cv_basic}>
            <p className={cs(styles.identity, styles.name)}>{user.user_name}</p>
            <p className={styles.identity}>
              <span>Gender: </span>
              Man
            </p>
            <p className={styles.identity}>
              <span>City: </span>
              {user.city}
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
                {user.self_introduction}
              </p>
            </div>
          </div>
        </section>
        <section className={styles.cv_detail_container}>
          <div className={styles.cv_detail_item}>
            <svg className={styles.item_icon}>
              <use xlinkHref={`${svgIcons}${svgSprite.history}`} />
            </svg>
            <span className={styles.item_name}>Work Experience</span>
          </div>
          {workExperience.map((item: IWorkExperience) => (
            <Card
              key={item._id}
              type='workExperience'
              name={item.enterprise_name}
              position={item.position}
              inService={item.in_service}
              programLink=''
              detail={item.work_content}
              techStack={item.work_technology_stack}
            />
          ))}
          <div className={styles.cv_detail_item}>
            <svg className={styles.item_icon}>
              <use xlinkHref={`${svgIcons}${svgSprite.code2}`} />
            </svg>
            <span className={styles.item_name}>Program Experience</span>
          </div>
          {programExperience.map((item: IProgramExperience) => (
            <Card
              key={item._id}
              type='programExperience'
              name={item.program_name}
              position=''
              inService={[]}
              programLink={item.program_url}
              detail={item.program_content}
              techStack={item.program_technology_stack}
            />
          ))}
        </section>
      </main>
    );
  }
}

export default CV;
