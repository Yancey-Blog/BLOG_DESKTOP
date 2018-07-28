import React, { Component } from 'react';
import './player.css';
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
import { GET } from '../../../https/axios';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioList: [],
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.initAPlayer();
  }

  componentWillUnmount() {
  }

  initAPlayer() {
    GET('/music.json', {}).then((res) => {
      this.setState({
        audioList: res.data.audio,
      });
      const { audioList } = this.state;
      const ap = new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        lrcType: 1,
        audio: audioList,
      });
      ap.lrc.show();
    }).catch((error) => {
      // todo
    });
  }

  render() {
    return (
      <div id="aplayer" />
    );
  }
}


export default Player;
