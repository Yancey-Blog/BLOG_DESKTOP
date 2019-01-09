import * as React from 'react';
import 'aplayer/dist/APlayer.min.css';
import './player.scss';

class Player extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    return <div id='player'/>;
  }
}

export default Player;
