import React, { Component } from 'react';
import './player.css';
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
import {
  GET, POST, PUT, DELETE,
} from '../../../https/axios';

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
    // this.getAllBlog();
    // this.getBlogByTitle();
    // this.addBlog();
    // this.updateBlog();
  }

  componentWillUnmount() {
  }

  initAPlayer() {
    GET('/aplayers', {}).then((res) => {
      this.setState({
        audioList: res.data,
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

  // getAllBlog() {
  //   GET('/blog', {}).then((res) => {
  //     console.log(res.data);
  //   }).catch((error) => {
  //     console.log(error.message);
  //   });
  // }
  //
  // getBlogByTitle() {
  //   GET('/blog/yanceyyanceyyanceyyanceyyancey1', {}).then((res) => {
  //     console.log(res.data);
  //   }).catch((error) => {
  //     console.log(error.message);
  //   });
  // }
  //
  // addBlog() {
  //   const params = {
  //     url: 'https://git.yancey.app/',
  //     poster: 'https://api.leoyancey.com/api/sayaka.jpg',
  //     publish_date: '2018-08-09',
  //     last_modified_date: '2018-08-09',
  //     title: '山本彩',
  //     summary: '山本彩山本彩山本彩山本彩山本彩山本彩山本彩山本彩山本彩',
  //     like_num: 100,
  //     comment_num: 100,
  //     category: 'Music',
  //   };
  //   POST('/blog', params).then((res) => {
  //     console.log(res.data);
  //   });
  // }
  //
  // updateBlog() {
  //   const params = {
  //     title: '大声点撒的撒的撒大教堂',
  //   };
  //   PUT('/blog/5b6b9dfc025d944092fead44', params).then((res) => {
  //     console.log(`${res.data}`);
  //   });
  // }

  render() {
    return (
      <div id="aplayer" />
    );
  }
}


export default Player;
