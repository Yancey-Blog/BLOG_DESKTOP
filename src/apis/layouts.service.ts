import { GET } from '../tools/axios';

import { AxiosResponse } from 'axios';

import { IPlayer, IGlobalStatus } from '../types/layout';

class LayoutsService {
  public getGlobalStatus(): Promise<AxiosResponse<IGlobalStatus>> {
    return GET(`/globalStatus`, null, '');
  }

  public getPlayers(): Promise<AxiosResponse<IPlayer[]>> {
    return GET(`/litePlayers`, null, '');
  }
}

const layoutsService = new LayoutsService();

export default layoutsService;
