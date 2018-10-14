import {
  observable, configure, runInAction,
} from 'mobx';
import { aboutApi } from '../https/index';

configure({
  strict: 'always',
});

class AboutStore {
  @observable dataSource;

  constructor() {
    this.aboutApi = aboutApi;
    this.dataSource = [];
  }

  getData = async () => {
    try {
      const response = await this.aboutApi.getData();
      runInAction(() => {
        this.dataSource = response.data;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };
}

const aboutStore = new AboutStore(aboutApi);

export default aboutStore;
