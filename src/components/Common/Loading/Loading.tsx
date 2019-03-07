import * as React from 'react';
import { loading } from '@constants/constants';

class Loading extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    const styles = {
      position: 'fixed' as 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      margin: 'auto',
      width: 0,
      height: 0,
      textAlign: 'center' as 'center',
      color: '#000000',
      opacity: 0.2,
      background: `url(${loading}) no-repeat center center`,
    }

    return (
      <figure style={styles}/>
    );
  }
}

export default Loading;
