import { GET } from '../tools/axios';

import { AxiosResponse } from 'axios';

import { IAnnouncement, IMotto, IProject, ICover } from '../types/home';

class HomeService {
  public async getAnnouncement(): Promise<AxiosResponse<IAnnouncement>> {
    return GET('/latestAnnouncements', null, '');
  }

  public async getMotto(): Promise<AxiosResponse<IMotto>> {
    return GET('/latestMotto', null, '');
  }

  public async getProject(): Promise<AxiosResponse<IProject[]>> {
    return GET('/latestThreeProjects', null, '');
  }

  public async getCover(
    curId: string,
    position: string,
  ): Promise<AxiosResponse<ICover>> {
    return GET(`/covers/${curId}?position=${position}`, null, '');
  }
}

const homeService = new HomeService();

export default homeService;
