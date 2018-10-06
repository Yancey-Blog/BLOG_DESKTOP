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
    GET('/litePlayers', {})
      .then((res) => {
        const arr = [];
        for (let i = 0; i < res.data.length; i += 1) {
          const obj = {
            name: res.data[i].title,
            artist: res.data[i].artist,
            url: res.data[i].music_file_url,
            cover: res.data[i].cover,
            lrc: res.data[i].lrc,
          };
          arr.push(obj);
        }
        this.setState({
          audioList: arr,
        });
        const { audioList } = this.state;
        const ap = new APlayer({
          container: document.getElementById('aplayer'),
          fixed: true,
          lrcType: 1,
          audio: audioList,
        });
        ap.lrc.show();
      })
      .catch((error) => {
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
