import React, { Component } from 'react';
import './player.css';
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
import { GET, POST } from '../../../https/axios';

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
    // this.initAPlayer();
    this.addBlog();
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

  addBlog() {
    const params = {
      url: 'https://git.yancey.app/',
      poster: 'https://api.leoyancey.com/api/sayaka.jpg',
      publish_date: '2018-08-08',
      last_modified_date: '2018-08-08',
      title: 'bulid_git_server_on_CentOS',
      summary: 'bulid_git_server_on_CentOSbulid_git_server_on_CentOSbulid_git_server_on_CentOSbulid_git_server_on_CentOS',
      like_num: 100,
      comment_num: 100,
      category: 'Linux',
    };
    POST('/blog', params).then((res) => {
      console.log(res);
    });
  }

  render() {
    return (
      <div id="aplayer" />
    );
  }
}


export default Player;
