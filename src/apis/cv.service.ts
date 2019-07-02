import { GET } from '../tools/axios';

import { AxiosResponse } from 'axios';

import { IUser, IWorkExperience, IProgramExperience } from '../types/cv';

class CVService {
  public getUser(): Promise<AxiosResponse<IUser>> {
    return GET('/userInfo', null, '');
  }

  public getWorkExperience(): Promise<AxiosResponse<IWorkExperience[]>> {
    return GET('/workExperience', null, '');
  }

  public getProgramExperience(): Promise<AxiosResponse<IProgramExperience[]>> {
    return GET('/programExperience', null, '');
  }
}

const cvService = new CVService();

export default cvService;
