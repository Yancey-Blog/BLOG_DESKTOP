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
            <Skeleton width={'16.5rem'} height={'16.5rem'} />
            <div style={styles}>
              <Skeleton width={'6rem'} />
            </div>
            <div>
              <Skeleton width={'10rem'} />
            </div>
            <div style={{ marginTop: '.4rem' }}>
              <Skeleton width={'4rem'} />
            </div>
            <div style={styles}>
              <Skeleton width={'8rem'} />
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Skeletons;
