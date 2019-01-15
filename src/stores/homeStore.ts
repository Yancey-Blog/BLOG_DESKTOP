import {
  observable,
  runInAction
} from 'mobx';

import {
  homeService
} from '../apis/index.service';

import {
  webpSuffix
} from '../constant/constant';

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

  public loadBgImg = () => {
    const isWebp = window.localStorage.isWebp === 'true';
    const background = new Image();
    background.src = isWebp ? `${this.coverUrl}${webpSuffix}` : this.coverUrl;
    // tslint:disable-next-line:only-arrow-functions
    background.onload = function () {
      const loadbackground = document.getElementById('background');
      if (loadbackground) {
        const styleSheet = document.styleSheets.item(0);
        (styleSheet as CSSStyleSheet).insertRule(`#background::before{background-image: url(${background.src})}`, (styleSheet as CSSStyleSheet).cssRules.length);
        loadbackground.style.opacity = '1';
      }

    };
  };

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
        this.loadBgImg();
      }
    } catch (e) {
      // todo
    }
  };

}

const homeStore = new HomeStore();

export default homeStore;