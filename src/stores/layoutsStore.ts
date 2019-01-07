import {
  observable,
  action,
  runInAction
} from 'mobx';

import {
  layoutsService
} from '../apis/index.service';

import {
  IAPlayer,
} from '../types/layout';

import APlayer from 'aplayer';

class LayoutsStore {
  @observable public animatable: boolean = false;
  @observable public visible: boolean = false;
  @observable public themeType: boolean = false;
  @observable public announcement: string = '';
  @observable public playerData: IAPlayer[] = [];

  constructor() {
    this.animatable = false;
    this.visible = false;
    this.themeType = false;
    this.announcement = '';
    this.playerData = [];
  }

  @action
  public toggleMenu() {
    this.animatable = true;
    this.visible = !this.visible;
  }

  @action
  public handleTransitionEnd() {
    this.animatable = false;
  }

  @action
  public handleSwitch() {
    this.themeType = !this.themeType;
  }

  public getAnnouncementData = async () => {
    try {
      const res = await layoutsService.getAnnouncementData();
      runInAction(() => {
        this.announcement = res.data.content;
      });
    } catch (error) {
      // todo
    } finally {
      // todo
    }
  }

  public getPlayerData = async () => {
    try {
      const res = await layoutsService.getPlayerData();
      runInAction(() => {
        res.data.map(item => {
          this.playerData.push({
            name: item.title,
            artist: item.artist,
            url: item.music_file_url,
            cover: item.cover,
            lrc: item.lrc,
          })
        })
        const ap = new APlayer({
          container: document.querySelector('#player'),
          fixed: true,
          lrcType: 1,
          audio: layoutsStore!.playerData,
        });
        ap.lrc.show();
      });
    } catch (error) {
      // todo
    } finally {
      // todo
    }
  }

}

const layoutsStore = new LayoutsStore();

export default layoutsStore;