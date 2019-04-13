import {
  observable,
  runInAction
} from 'mobx';

import {
  layoutsService
} from '../apis/index.service';

import {
  IAPlayer,
  IGlobalStatus,
} from '../types/layout';

import APlayer from 'aplayer';

import {
  setToast
} from '@tools/tools';

class LayoutsStore {
  @observable public players: IAPlayer[] = [];
  @observable public globalStatus: IGlobalStatus = {
    full_site_gray: false,
    __v: 0,
    _id: '',
  };
  @observable public isHomePage = true;

  public getPlayers = async () => {
    try {
      const res = await layoutsService.getPlayers();
      runInAction(() => {
        res.data.map(item => {
          this.players.push({
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
          audio: layoutsStore!.players,
        });
        ap.lrc.show();
      });
    } catch (error) {
      setToast('获取播放器失败');
    }
  }

  public getGlobalStatus = async () => {
    try {
      const res = await layoutsService.getGlobalStatus();
      runInAction(() => {
        this.globalStatus = res.data;
      });
    } catch (e) {
      setToast('获取全局状态失败');
    }
  };

  public getLocalPath = () => {
    this.isHomePage = window.localStorage.curPath === '/';
  }
}

const layoutsStore = new LayoutsStore();

export default layoutsStore;