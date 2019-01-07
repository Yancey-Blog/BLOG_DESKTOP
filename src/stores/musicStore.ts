import {
  observable,
  runInAction
} from 'mobx';

import {
  musicService
} from '../apis/index.service';

import {ILiveTours, IFeaturedRecords, IYanceyMusic} from '../types/music';

class MusicStore {
  @observable public liveToursData: ILiveTours[] = [];
  @observable public featuredRecordsData: IFeaturedRecords[] = [];
  @observable public yanceyMusicData: IYanceyMusic[] = [];

  constructor() {
    this.liveToursData = [];
    this.featuredRecordsData = [];
    this.yanceyMusicData = [];
  }

  public getLiveTours = async () => {
    try {
      const res = await musicService.getLiveTours();
      runInAction(() => {
        this.liveToursData = res.data;
      });
    } catch (error) {
      // todo
    } finally {
      // todo
    }
  }

  public getFeaturedRecords = async () => {
    try {
      const res = await musicService.getFeaturedRecords();
      runInAction(() => {
        this.featuredRecordsData = res.data;
      });
    } catch (error) {
      // todo
    } finally {
      // todo
    }
  }

  public getYanceyMusic = async () => {
    try {
      const res = await musicService.getYanceyMusic();
      runInAction(() => {
        this.yanceyMusicData = res.data;
      });
    } catch (error) {
      // todo
    } finally {
      // todo
    }
  }

}

const musicStore = new MusicStore();

export default musicStore;