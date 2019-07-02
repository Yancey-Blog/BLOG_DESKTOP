import * as React from 'react';
import styles from './Card.module.scss';
import { ICardProps } from '../../types/cv';

class Card extends React.Component<ICardProps, {}> {
  constructor(props: ICardProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const {
      type,
      name,
      position,
      inService,
      programLink,
      detail,
      techStack,
    } = this.props;
    return (
        <div className={styles.detail_wrapper}>
          <div className={styles.summary}>
            <div>
              <p className={styles.company_name}>
                {type === 'Work Experience' ? (
                  <>{name}</>
                ) : (
                  <a href={programLink} className={styles.program_name}>
                    {name}
                  </a>
                )}
              </p>
              {type === 'Work Experience' ? (
                <>
                  <p className={styles.position}>{position}</p>
                  <p className={styles.work_range}>
                    {inService[0]} ~ {inService[1]}
                  </p>
                </>
              ) : null}
            </div>
          </div>
          <div className={styles.work_content}>
            <p className={styles.work_content_detail}>{detail}</p>
            <p className={styles.technology_stack}>
              Tech: {techStack.toString()}
            </p>
          </div>
        </div>
    );
  }
}

export default Card;
