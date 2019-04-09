import {
  GET,
} from '../tools/axios';

import {
  AxiosResponse
} from 'axios';

import {
  IPlayer,
  IGlobalStatus,
} from '../types/layout';

class LayoutsService {
  public async getGlobalStatus(): Promise<AxiosResponse<IGlobalStatus>> {
    return GET(`/globalStatus`, null, '');
  }

  public async getPlayers(): Promise<AxiosResponse<IPlayer[]>> {
    return GET(`/litePlayers`, null, '');
  }
}


const layoutsService = new LayoutsService();

export default layoutsService;