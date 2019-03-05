import {
  observable,
  runInAction
} from 'mobx';

import {
  homeService
} from '../apis/index.service';

import {
  webpSuffix
} from '../constants/constants';

import {
  IProject,
} from '../types/home';

class HomeStore {
  @observable public announcement: string = '';
  @observable public motto: string = '';
  @observable public projects: IProject[] = [];
  @observable public coverUrl: string = '';

  constructor() {
    this.announcement = '';
    this.motto = '';
    this.projects = [];
    this.coverUrl = '';
  }

  public getAnnouncementData = async () => {
    try {
      const res = await homeService.getAnnouncementData();
      runInAction(() => {
        this.announcement = res.data.content;
      });
    } catch (e) {
      // todo
    } finally {
      // todo
    }
  }

  public getMottoData = async () => {
    try {
      const res = await homeService.getMottoData();
      runInAction(() => {
        this.motto = res.data.content;
      });
    } catch (e) {
      // todo
    } finally {
      // todo
    }
  }

  public getProjectData = async () => {
    try {
      const res = await homeService.getProjectData();
      runInAction(() => {
        this.projects = res.data;
      });
    } catch (e) {
      // todo
    }
  };

  public loadBgImg = (imageUrl) => {
    const isWebp = window.localStorage.isWebp === 'true';
    const backgroundDOM = document.getElementById('background');
    const background = new Image();
    background.src = isWebp ? `${imageUrl}${webpSuffix}` : imageUrl;
    // tslint:disable-next-line:only-arrow-functions
    background.onload = function () {
      if (backgroundDOM) {
        backgroundDOM.style.cssText = `background-image: url(${background.src}); opacity: 1`
      }
    }
  }

  public getCoverData = async (position: string) => {
    let curId = window.localStorage.cover_id;
    if (!curId) {
      curId = 0;
    }
    try {
      const res = await homeService.getCoverData(curId, position);
      runInAction(() => {
        this.coverUrl = res.data.url;
        window.localStorage.setItem('cover_id', res.data._id);
      });
      if (this.coverUrl) {
        this.loadBgImg(this.coverUrl);
      }
    } catch (e) {
      // todo
    }
  };

}

const homeStore = new HomeStore();

export default homeStore;