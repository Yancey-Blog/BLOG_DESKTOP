import React, { Component } from 'react';
import _ from 'lodash';
import './backToTop.css';

class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.backToTop = React.createRef();
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.handlePosition();
  }

  componentWillUnmount() {
  }

  scrollToTop = () => {
    document.documentElement.scrollTop -= 100;
    if (document.documentElement.scrollTop <= 0) {
      window.cancelAnimationFrame(this.scrollToTop);
    } else {
      window.requestAnimationFrame(this.scrollToTop);
    }
  };

  handleKeyDown = () => {
  };

  handlePosition = () => {
    const backToTop = this.backToTop.current;
    window.addEventListener('scroll', _.throttle(() => {
      const tops = document.documentElement.scrollTop || document.body.scrollTop;
      if (tops > 800) {
        backToTop.style.top = '-10rem';
      } else {
        backToTop.style.top = '-60rem';
      }
    }, 150));
  };

  render() {
    return (
      <div
        className="back_to_top"
        onClick={this.scrollToTop}
        onKeyDown={this.handleKeyDown}
        role="link"
        tabIndex="0"
        ref={this.backToTop}
      />
    );
  }
}

export default BackToTop;
