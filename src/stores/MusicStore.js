import {
  observable, configure, runInAction,
} from 'mobx';
import { musicApi } from '../https/index';

configure({
  strict: 'always',
});

class MusicStore {
  @observable liveTourData;

  @observable musicNoteData;

  @observable featuredRecordData;

  @observable yanceyMusicData;

  constructor() {
    this.musicApi = musicApi;
    this.liveTourData = [];
    this.musicNoteData = [];
    this.featuredRecordData = [];
    this.yanceyMusicData = [];
  }

  getLiveToursData = async () => {
    try {
      const response = await this.musicApi.getLiveToursData();
      runInAction(() => {
        this.liveTourData = response.data;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  getRecordsData = async () => {
    try {
      const response = await this.musicApi.getRecordsData();
      runInAction(() => {
        this.featuredRecordData = response.data;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  getYanceyMusicData = async () => {
    try {
      const response = await this.musicApi.getYanceyMusicData();
      runInAction(() => {
        this.yanceyMusicData = response.data;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };
}

const musicStore = new MusicStore(musicApi);

export default musicStore;
