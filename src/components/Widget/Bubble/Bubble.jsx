import React, { Component } from 'react';
import _ from 'lodash';

class Circle {
  constructor(radius, color, clearOffset, width, height, ctx, randomColor) {
    const that = this;
    that.pos = {};
    init();

    function init() {
      that.pos.x = Math.random() * width;
      that.pos.y = height + Math.random() * 100;
      that.alpha = 0.1 + Math.random() * clearOffset;
      that.scale = 0.1 + Math.random() * 0.3;
      that.speed = Math.random();
      if (color === 'random') {
        that.color = randomColor();
      } else {
        that.color = color;
      }
    }
    this.draw = function() {
      if (that.alpha <= 0) {
        init();
      }
      that.pos.y -= that.speed;
      that.alpha -= 0.0005;

      const circle = new Path2D();
      circle.arc(that.pos.x, that.pos.y, that.scale * radius, 0, 2 * Math.PI);
      ctx.fillStyle = that.color;
      ctx.fill(circle);
    };
  }
}

class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animateHeader: true,
    };

    this.width = 0;
    this.height = 0;
    this.pos = {};
    this.alpha = 0;
    this.scale = 0;
    this.speed = 0;
    this.circles = [];

    this.canvasRef = React.createRef();
    this.ctx = null;
  }

  componentDidMount() {
    this.initCanvas();
    this.addListeners();
  }

  initCanvas = () => {
    const { density, radius, color, clearOffset } = this.props;

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.canvasRef.current.width = this.width;
    this.canvasRef.current.height = this.height;

    this.ctx = this.canvasRef.current.getContext('2d');

    this.canvasRef.current.parentElement.style.overflow = 'hidden';

    for (let x = 0; x < this.width * density; x += 1) {
      const circle = new Circle(
        radius,
        color,
        clearOffset,
        this.width,
        this.height,
        this.ctx,
        this.randomColor,
      );
      this.circles.push(circle);
    }

    this.animate();
  };

  randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const alpha = Math.random().toPrecision(2);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  animate = () => {
    if (this.state.animateHeader) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      for (var i in this.circles) {
        this.circles[i].draw();
      }
    }
    requestAnimationFrame(this.animate);
  };

  addListeners = () => {
    window.addEventListener(
      'scroll',
      _.throttle(() => {
        if (document.body.scrollTop > this.height) {
          this.setState({
            animateHeader: false,
          });
        } else {
          this.setState({
            animateHeader: true,
          });
        }
      }, 150),
      false,
    );
    window.addEventListener(
      'resize',
      _.throttle(() => {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvasRef.current.width = this.width;
        this.canvasRef.current.height = this.height;
      }, 150),
      false,
    );
  };

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

Bubble.defaultProps = {
  color: 'rgba(255, 255, 255, .5)',
  radius: 16,
  density: 0.3,
  clearOffset: 0.6,
};

export default Bubble;
