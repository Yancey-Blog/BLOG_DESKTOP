import React, { Component } from 'react';
import $ from 'jquery';
import './backToTop.css';

class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.handlePosition();
  }

  componentWillUnmount() {
  }

  scrollToTop = () => {
    $('html,body').animate({ scrollTop: '0px' }, 800);
  };

  handleKeyDown = () => {
  };

  handlePosition() {
    const backToTop = $('.back-to-top');
    $(window).on('resize scroll', function () {
      if ($(this).scrollTop() > 800) {
        backToTop.css('top', '-10rem');
      } else {
        backToTop.css('top', '-60rem');
      }
    });
  }

  render() {
    return (
      <div
        className="back-to-top"
        onClick={this.scrollToTop}
        onKeyDown={this.handleKeyDown}
        role="link"
        tabIndex="0"
      />
    );
  }
}

export default BackToTop;
