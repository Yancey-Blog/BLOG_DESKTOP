import {
  observable,
  runInAction
} from 'mobx';

import {
  setToast
} from '@tools/tools';

import {
  homeService
} from '../apis/index.service';

import {
  webpSuffix
} from '../constants/constants';

import {
  IProject
} from '../types/home';

class HomeStore {
  @observable public announcement: string = '';
  @observable public motto: string = '';
  @observable public projects: IProject[] = [];
  @observable public coverUrl: string = '';

  public getAnnouncement = async () => {
    try {
      const res = await homeService.getAnnouncement();
      runInAction(() => {
        this.announcement = res.data.content;
      });
    } catch (e) {
      setToast('获取 Announcement 失败');
    }
  };

  public getMotto = async () => {
    try {
      const res = await homeService.getMotto();
      runInAction(() => {
        this.motto = res.data.content;
      });
    } catch (e) {
      setToast('获取 Motto 失败');
    }
  };

  public getProject = async () => {
    try {
      const res = await homeService.getProject();
      runInAction(() => {
        this.projects = res.data;
      });
    } catch (e) {
      setToast('获取 Projects 失败');
    }
  };

  public loadBgImg = (imageUrl: string) => {
    const isWebp = window.localStorage.isWebp === 'true';
    const backgroundDOM = document.getElementById('background');
    const background = new Image();
    background.src = isWebp ? `${imageUrl}${webpSuffix}` : imageUrl;
    background.onload = () => {
      if (backgroundDOM) {
        backgroundDOM.style.cssText = `background-image: url(${
          background.src
        }); opacity: 1`;
      }
    };
  };

  public getCover = async (position: string) => {
    let curId = window.localStorage.cover_id;
    if (!curId) {
      curId = 0;
    }
    try {
      const res = await homeService.getCover(curId, position);
      runInAction(() => {
        this.coverUrl = res.data.url;
        window.localStorage.setItem('cover_id', res.data._id);
      });
      if (this.coverUrl) {
        this.loadBgImg(this.coverUrl);
      }
    } catch (e) {
      setToast('获取 Cover 失败');
    }
  };
}

const homeStore = new HomeStore();

export default homeStore;