import {
  GET,
} from '../tools/axios';

import {
  AxiosResponse
} from 'axios';

import {
  IUser,
  IWorkExperience,
  IProgramExperience,
} from '../types/cv';

class CVService {
  public async getUser(): Promise < AxiosResponse < IUser >> {
    return GET('/userInfo', null, '');
  }

  public async getWorkExperience(): Promise < AxiosResponse < IWorkExperience[] >> {
    return GET('/workExperience', null, '');
  }

  public async getProgramExperience(): Promise < AxiosResponse < IProgramExperience[] >> {
    return GET('/programExperience', null, '');
  }
}


const cvService = new CVService();

export default cvService;