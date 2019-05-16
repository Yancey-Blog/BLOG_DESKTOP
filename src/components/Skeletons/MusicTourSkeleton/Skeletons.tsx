import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
// import styles from './Skeletons.module.scss';

class Skeletons extends React.Component<any> {
  public render() {
    const styles = {
      margin: '1rem 0',
    };
    return (
      <>
        <Skeleton width={'100%'} height={'19.5rem'} />
        <div style={styles}>
          <Skeleton width={'6rem'} height={'12px'} />
        </div>
        <Skeleton width={'18rem'} height={'24px'} />
      </>
    );
  }
}

export default Skeletons;
