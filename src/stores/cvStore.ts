import {
  observable,
  runInAction,
} from 'mobx';
import {
  cvService,
} from '../apis/index.service';
import {
  IUser,
  IWorkExperience,
  IProgramExperience,
} from '../types/cv';

import {
  setToast
} from '@tools/tools';

class CVStore {
  @observable public user: IUser = {
    avatar: '',
    city: '',
    position: '',
    self_introduction: '',
    user_name: '',
  };
  @observable public workExperience: IWorkExperience[] = [];
  @observable public programExperience: IProgramExperience[] = [];

  public getUser = async () => {
    try {
      const res = await cvService.getUser();
      runInAction(() => {
        this.user = res.data;
      });
    } catch (e) {
      setToast('获取个人信息失败');
    }
  };

  public getWorkExperience = async () => {
    try {
      const res = await cvService.getWorkExperience();
      runInAction(() => {
        this.workExperience = res.data;
      });
    } catch (e) {
      setToast('获取工作经历失败');
    }
  };

  public getProgramExperience = async () => {
    try {
      const res = await cvService.getProgramExperience();
      runInAction(() => {
        this.programExperience = res.data;
      });
    } catch (e) {
      setToast('获取项目经历失败');
    }
  };
}

const cvStore = new CVStore();

export default cvStore;