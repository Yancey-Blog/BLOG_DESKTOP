import {
  GET,
} from '../tools/axios';

import {
  AxiosResponse
} from 'axios';

import {
  IAnnouncement,
  IPlayer,
} from '../types/layout';

class LayoutsService {
  public async getAnnouncementData(): Promise < AxiosResponse < IAnnouncement >> {
    return GET(`/latestAnnouncements`, null, '');
  }

  public async getPlayerData(): Promise < AxiosResponse < IPlayer[] >> {
    return GET(`/litePlayers`, null, '');
  }
}


const layoutsService = new LayoutsService();

export default layoutsService;