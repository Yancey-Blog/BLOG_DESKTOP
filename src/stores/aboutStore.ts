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

import {
  setToast
} from '@tools/tools';

class AboutStore {
  @observable public abouts: IAbout[] = [];

  public getAbouts = async () => {
    try {
      const res = await aboutService.getAbouts();
      runInAction(() => {
        this.abouts = res.data;
      });
    } catch (e) {
      setToast('获取关于失败');
    }
  };
}

const aboutStore = new AboutStore();

export default aboutStore;