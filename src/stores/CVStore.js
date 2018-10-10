import {
  observable, configure, runInAction,
} from 'mobx';
import { cvApi } from '../https/index';

configure({
  strict: 'always',
});

class CVStore {
  @observable userInfoData;

  @observable programExperienceData;

  @observable workExperienceData;

  constructor() {
    this.cvApi = cvApi;
    this.userInfoData = {};
    this.programExperienceData = [];
    this.workExperienceData = [];
  }

  getUserInfoData = async () => {
    try {
      const response = await this.cvApi.getUserInfoData();
      runInAction(() => {
        this.userInfoData = response.data;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  getProgramExperienceData = async () => {
    try {
      const response = await this.cvApi.getProgramExperienceData();
      runInAction(() => {
        this.programExperienceData = response.data;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  getWorkExperienceData = async () => {
    try {
      const response = await this.cvApi.getWorkExperienceData();
      runInAction(() => {
        this.workExperienceData = response.data;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };
}

const cvStore = new CVStore(cvApi);

export default cvStore;
