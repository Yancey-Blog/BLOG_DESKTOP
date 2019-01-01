import {
  observable, configure, runInAction,
} from 'mobx';
import { homeApi } from '../https/index';

configure({
  strict: 'always',
});

class HomeStore {
  @observable mottoData;

  @observable newReleaseData;

  @observable announcementData;

  @observable coverUrl;

  @observable curCoverId;

  constructor() {
    this.homeApi = homeApi;
    this.mottoData = '';
    this.newReleaseData = [];
    this.announcementData = '';
    this.coverUrl = '';
    this.curCoverId = '';
  }

  loadBgImg = () => {
    const background = new Image();
    background.src = this.coverUrl;
    background.onload = function () {
      const loadbackground = document.getElementById('background');
      loadbackground.style.backgroundImage = `url(${background.src})`;
      loadbackground.style.animationName = 'fadein';
      loadbackground.style.opacity = 1;
    };
  }

  getLatestMotto = async () => {
    try {
      const response = await this.homeApi.getLatestMotto();
      runInAction(() => {
        this.mottoData = response.data.content;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  getNewReleaseData = async () => {
    try {
      const response = await this.homeApi.getNewReleaseData();
      runInAction(() => {
        this.newReleaseData = response.data;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  getAnnouncementData = async () => {
    try {
      const response = await this.homeApi.getAnnouncementData();
      runInAction(() => {
        this.announcementData = response.data.content;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  getCoverData = async () => {
    let id = window.localStorage.cover_id;
    if (!id) {
      id = 0;
    }
    try {
      const response = await this.homeApi.getCoverData(id);
      runInAction(() => {
        this.coverUrl = response.data.url;
        this.curCoverId = response.data._id; // eslint-disable-line
      });
      if (this.coverUrl) {
        this.loadBgImg();
      }
      window.localStorage.setItem('cover_id', response.data._id); // eslint-disable-line
    } catch (e) {
      console.log('unknown error');
    }
  };

  switchCoverData = async (position, id) => {
    const params = {
      position,
    };
    try {
      const response = await this.homeApi.switchCover(id, params);
      runInAction(() => {
        this.coverUrl = response.data.url;
        this.curCoverId = response.data._id; // eslint-disable-line
      });
      window.localStorage.setItem('cover_id', response.data._id); // eslint-disable-line
      if (this.coverUrl) {
        this.loadBgImg();
      }
      window.localStorage.setItem('cover_id', response.data._id); // eslint-disable-line
    } catch (e) {
      console.log('unknown error');
    }
  };
}

const homeStore = new HomeStore(homeApi);

export default homeStore;
