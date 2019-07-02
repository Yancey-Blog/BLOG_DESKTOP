import { GET } from '../tools/axios';

import { AxiosResponse } from 'axios';

import { IAnnouncement, IMotto, IProject, ICover } from '../types/home';

class HomeService {
  public getAnnouncement(): Promise<AxiosResponse<IAnnouncement>> {
    return GET('/latestAnnouncements', null, '');
  }

  public getMotto(): Promise<AxiosResponse<IMotto>> {
    return GET('/latestMotto', null, '');
  }

  public getProject(): Promise<AxiosResponse<IProject[]>> {
    return GET('/latestThreeProjects', null, '');
  }

  public getCover(
    curId: string,
    position: string,
  ): Promise<AxiosResponse<ICover>> {
    return GET(`/covers/${curId}?position=${position}`, null, '');
  }
}

const homeService = new HomeService();

export default homeService;
