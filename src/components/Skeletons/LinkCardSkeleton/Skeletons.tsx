import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './Skeletons.module.scss';

class Skeletons extends React.Component<any> {
  public render() {
    return (
      <>
        {Array.from({ length: 7 }).map((v, k) => (
          <div className={styles.skeleton_wrapper} key={k}>
            <span className={styles.meta}>
              <Skeleton width={'8rem'} />
              <Skeleton width={'14rem'} />
            </span>
            <Skeleton width={'4.2rem'} height={'4.2rem'} />
          </div>
        ))}
      </>
    );
  }
}

export default Skeletons;
