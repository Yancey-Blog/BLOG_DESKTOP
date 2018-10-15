import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { inject, observer } from 'mobx-react/index';
import Swiper from 'swiper/dist/js/swiper.min';
import 'swiper/dist/css/swiper.min.css';
import './about.css';
import { formatJSONDate } from '../../utils/tools';

@inject('aboutStore')
@observer
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  async componentDidMount() {
    const { aboutStore } = this.props;
    await aboutStore.getData();
    this.handleSwiper();
  }

  componentWillUnmount() {
  }

  handleSwiper() {
    const timelineSwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      loop: false,
      speed: 1600,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet(index, className) {
          const year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
          return `<span class="${className}">${year}</span>`;
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          direction: 'horizontal',
        },
      },
    });
  }


  render() {
    const { aboutStore } = this.props;
    return (
      <main className="about-wrapper">
        <Helmet>
          <title>
            About | Yancey Inc.
          </title>
        </Helmet>
        <div className="container">
          <div className="timeline">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {
                  Object.keys(aboutStore.dataSource).map(key => (
                    <div
                      className="swiper-slide"
                      style={{ backgroundImage: `url(${aboutStore.dataSource[key].cover})` }}
                      data-year={formatJSONDate(aboutStore.dataSource[key].release_date).slice(0, 10)}
                    >
                      <div className="swiper-slide-content">
                        <span className="timeline-year">
                          {formatJSONDate(aboutStore.dataSource[key].release_date).slice(0, 10)}
                        </span>
                        <h4 className="timeline-title">
                          {aboutStore.dataSource[key].title}
                        </h4>
                        <p className="timeline-text">
                          {aboutStore.dataSource[key].introduction}
                        </p>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className="swiper-button-prev" />
              <div className="swiper-button-next" />
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default About;
