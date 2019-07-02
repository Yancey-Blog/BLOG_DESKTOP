import * as React from 'react';
import _ from 'lodash';
import styles from './ScrollToTop.module.scss';

class ScrollToTop extends React.Component<{}, {}> {
  private backToTop = React.createRef<HTMLDivElement>();
  constructor(props: {}) {
    super(props);
    this.state = {};
    this.backToTop = React.createRef();
  }

  public componentDidMount() {
    this.handlePosition();
  }

  public scrollToTop = () => {
    let timer: number = 0;
    cancelAnimationFrame(timer);
    const startTime = +new Date();
    const b = document.body.scrollTop || document.documentElement.scrollTop;
    const d = 500;
    const c = b;
    timer = requestAnimationFrame(function func() {
      const t = d - Math.max(0, startTime - +new Date() + d);
      document.documentElement.scrollTop = document.body.scrollTop =
        (t * -c) / d + b;
      timer = requestAnimationFrame(func);
      if (t === d) {
        cancelAnimationFrame(timer);
      }
    });
  };

  public handlePosition = () => {
    const backToTop = this.backToTop.current;
    if (backToTop) {
      window.addEventListener(
        'scroll',
        _.throttle(() => {
          const tops =
            document.documentElement.scrollTop || document.body.scrollTop;
          if (tops > 800) {
            backToTop.style.top = '-10rem';
          } else {
            backToTop.style.top = '-60rem';
          }
        }, 150),
      );
    }
  };

  public render() {
    return (
      <div
        className={styles.back_to_top}
        onClick={this.scrollToTop}
        ref={this.backToTop}
      />
    );
  }
}

export default ScrollToTop;
