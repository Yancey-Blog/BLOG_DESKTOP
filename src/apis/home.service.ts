import {
  GET,
} from '../tools/axios';

import {
  AxiosResponse
} from 'axios';

import {
  IAnnouncement,
  IMotto,
  IProject,
  ICover,
} from '../types/home';

class HomeService {
  public async getAnnouncementData(): Promise<AxiosResponse<IAnnouncement>> {
    return GET('/latestAnnouncements', null, '');
  }

  public async getMottoData(): Promise<AxiosResponse<IMotto>> {
    return GET('/latestMotto', null, '');
  }

  public async getProjectData(): Promise<AxiosResponse<IProject[]>> {
    return GET('/latestThreeProjects', null, '');
  }

  public async getCoverData(curId: string, position: string): Promise<AxiosResponse<ICover>> {
    return GET(`/covers/${curId}?position=${position}`, null, '');
  }
}


const homeService = new HomeService();

export default homeService;