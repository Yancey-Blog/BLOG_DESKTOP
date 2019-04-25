import * as React from 'react';
import { observer, inject } from 'mobx-react';
import Title from '@components/Common/Title/Title';
import Swiper from 'swiper/dist/js/swiper.min';
import 'swiper/dist/css/swiper.min.css';
import './About.scss';
import { formatJSONDate } from '@tools/tools';
import { webpSuffix } from '@constants/constants';
import { IAbout, IAboutProps } from '../../types/about';

@inject('aboutStore')
@observer
class About extends React.Component<IAboutProps, {}> {
  constructor(props: IAboutProps) {
    super(props);
    this.state = {};
  }

  public async componentDidMount() {
    const { aboutStore } = this.props;
    await aboutStore.getAbouts();
    this.handleSwiper();
  }

  public handleSwiper() {
    // tslint:disable-next-line:no-unused-expression
    new Swiper('.swiper-container', {
      direction: 'vertical',
      loop: false,
      speed: 1600,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet(index: any, className: any) {
          const year = document
            .querySelectorAll('.swiper-slide')
            [index].getAttribute('data-year');
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

  public render() {
    const {
      aboutStore: { abouts },
    } = this.props;

    const isWebp = window.localStorage.isWebp === 'true';
    return (
      <main>
        <Title title='About' />
        <div className='about-container'>
          <div className='timeline'>
            <div className='swiper-container'>
              <div className='swiper-wrapper'>
                {abouts.map((item: IAbout) => (
                  <div
                    className='swiper-slide'
                    key={item._id}
                    style={{
                      backgroundImage: `url(${
                        isWebp ? `${item.cover}${webpSuffix}` : item.cover
                      })`,
                    }}
                    data-year={formatJSONDate(item.release_date).slice(0, 10)}
                  >
                    <div className='swiper-slide-content'>
                      <span className='timeline-year'>
                        {formatJSONDate(item.release_date).slice(0, 10)}
                      </span>
                      <h4 className='timeline-title'>{item.title}</h4>
                      <p className='timeline-text'>{item.introduction}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='swiper-button-prev' />
              <div className='swiper-button-next' />
              <div className='swiper-pagination' />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default About;
