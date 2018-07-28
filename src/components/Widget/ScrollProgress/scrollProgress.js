import React, { Component } from 'react';
import $ from 'jquery';
import './scrollProgress.css';

class ScrollProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.handleScrollProgress();
  }

  componentWillUnmount() {
  }

  handleScrollProgress() {
    $(window).on('resize scroll', function () {
      const totalHeight = $(document).height();
      const viewPortHeight = $(window).height();
      const ratio = $(this).scrollTop() / (totalHeight - viewPortHeight) * 100;
      $('.scroll-progress').css('width', `${ratio}%`);
    });
  }

  render() {
    return (
      <div className="scroll-progress" />
    );
  }
}


export default ScrollProgress;
