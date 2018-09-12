import React, { Component } from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import './about.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
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
    return (
      <main className="about-wrapper">
        <div className="container">
          <div className="timeline">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=11)' }} data-year="2011">
                  <div className="swiper-slide-content">
                    <span className="timeline-year">
                      2011
                    </span>
                    <h4 className="timeline-title">
                      Our nice super title
                    </h4>
                    <p className="timeline-text">
                      Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=12)' }} data-year="2012">
                  <div className="swiper-slide-content">
                    <span className="timeline-year">
                      2012
                    </span>
                    <h4 className="timeline-title">
                      Our nice super title
                    </h4>
                    <p className="timeline-text">
                      Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=13)' }} data-year="2013">
                  <div className="swiper-slide-content">
                    <span className="timeline-year">
                      2013
                    </span>
                    <h4 className="timeline-title">
                      Our nice super title
                    </h4>
                    <p className="timeline-text">
                      Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=14)' }} data-year="2014">
                  <div className="swiper-slide-content">
                    <span className="timeline-year">
                      2014
                    </span>
                    <h4 className="timeline-title">
                      Our nice super title
                    </h4>
                    <p className="timeline-text">
                      Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=15)' }} data-year="2015">
                  <div className="swiper-slide-content">
                    <span className="timeline-year">
                      2015
                    </span>
                    <h4 className="timeline-title">
                      Our nice super title
                    </h4>
                    <p className="timeline-text">
                      Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=16)' }} data-year="2016">
                  <div className="swiper-slide-content">
                    <span className="timeline-year">
                      2016
                    </span>
                    <h4 className="timeline-title">
                      Our nice super title
                    </h4>
                    <p className="timeline-text">
                      Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
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
