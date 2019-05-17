import * as React from 'react';
import Skeleton from 'react-loading-skeleton';

class Skeletons extends React.Component<any> {
  public render() {
    const styles = {
      margin: '.75rem 0',
    };
    return (
      <>
        {Array.from({ length: 4 }).map((v, k) => (
          <div key={k}>
            <Skeleton width={'100%'} height={'6.15rem'} />
            <div style={styles}>
              <Skeleton width={'4rem'} height={'12px'} />
            </div>
            <div style={styles}>
              <Skeleton width={'100%'} />
            </div>
            <Skeleton width={'80%'} />
          </div>
        ))}
      </>
    );
  }
}

export default Skeletons;
