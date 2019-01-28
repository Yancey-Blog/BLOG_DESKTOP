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
  public async getUserData(): Promise<AxiosResponse<IUser>> {
    return GET('/userInfo', null, '');
  }

  public async getWorkExperienceData(): Promise<AxiosResponse<IWorkExperience[]>> {
    return GET('/workExperience', null, '');
  }

  public async getProgramExperienceData(): Promise<AxiosResponse<IProgramExperience[]>> {
    return GET('/programExperience', null, '');
  }
}


const cvService = new CVService();

export default cvService;