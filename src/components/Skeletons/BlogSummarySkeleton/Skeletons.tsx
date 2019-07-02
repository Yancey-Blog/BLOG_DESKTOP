import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import classnames from 'classnames';
import styles from './Skeletons.module.scss';

class Skeletons extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  public render() {
    return (
      <>
        {Array.from({ length: 10 }).map((v, k) => (
          <div
            className={classnames(
              styles.skeleton_wrapper,
              k % 2 !== 0 ? styles.skeleton_wrapper_reverse : '',
            )}
            key={k}
          >
            <div className={styles.meta}>
              <Skeleton width={'60%'} height={'12px'} />
              <div className={styles.title}>
                <Skeleton width={'100%'} height={'24px'} />
              </div>
              <div className={styles.info}>
                <Skeleton width={'2.7rem'} height={'12px'} />
                <Skeleton width={'2.7rem'} height={'12px'} />
                <Skeleton width={'2.7rem'} height={'12px'} />
              </div>
              <div className={styles.summary}>
                <Skeleton count={4} width={'100%'} height={'15px'} />
                <Skeleton width={'80%'} height={'15px'} />
              </div>
              <Skeleton width={'2rem'} height={'12px'} />
            </div>
            <div className={styles.img}>
              <Skeleton height={'15rem'} />
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Skeletons;
