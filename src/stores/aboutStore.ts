import {
  observable,
  runInAction,
} from 'mobx';
import {
  aboutService,
} from '../apis/index.service';
import {
  IAbout,
} from '../types/about';

class AboutStore {
  @observable public abouts: IAbout[] = [];

  constructor() {
    this.abouts = [];
  }

  public getAboutData = async () => {
    try {
      const res = await aboutService.getAboutData();
      runInAction(() => {
        this.abouts = res.data;
      });
    } catch (e) {
      // todo
    }
  };
}

const aboutStore = new AboutStore();

export default aboutStore;