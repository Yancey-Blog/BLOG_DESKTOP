import { observable, runInAction } from 'mobx';

import { musicService } from '../apis/index.service';

import { setToast } from '@tools/tools';

import { ILiveTours, IFeaturedRecords, IYanceyMusic } from '../types/music';

class MusicStore {
  @observable public liveTours: ILiveTours[] = [];
  @observable public featuredRecords: IFeaturedRecords[] = [];
  @observable public yanceyMusic: IYanceyMusic[] = [];
  @observable public isLiveToursLoading = false;
  @observable public isYanceyMusicLoading = false;

  public getLiveTours = async () => {
    this.isLiveToursLoading = true;
    try {
      const res = await musicService.getLiveTours();
      runInAction(() => {
        this.liveTours = res.data;
      });
    } catch (error) {
      setToast('获取演唱会现场图失败');
    } finally {
      this.isLiveToursLoading = false;
    }
  };

  public getFeaturedRecords = async () => {
    try {
      const res = await musicService.getFeaturedRecords();
      runInAction(() => {
        this.featuredRecords = res.data;
      });
    } catch (error) {
      setToast('获取精选唱片失败');
    }
  };

  public getYanceyMusic = async () => {
    this.isYanceyMusicLoading = true;
    try {
      const res = await musicService.getYanceyMusic();
      runInAction(() => {
        this.yanceyMusic = res.data;
      });
    } catch (error) {
      setToast('获取我的作品失败');
    } finally {
      this.isYanceyMusicLoading = false;
    }
  };
}

const musicStore = new MusicStore();

export default musicStore;
