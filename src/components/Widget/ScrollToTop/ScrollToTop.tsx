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
    let time: number = 0;
    document.documentElement.scrollTop -= 100;
    if (document.documentElement.scrollTop <= 0) {
      window.cancelAnimationFrame(time);
    } else {
      time = window.requestAnimationFrame(this.scrollToTop);
    }
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
