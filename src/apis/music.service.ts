import {
  GET,
} from '../tools/axios';

import {
  AxiosResponse
} from 'axios';

import {
  ILiveTours, 
  IFeaturedRecords,
  IYanceyMusic,
} from '../types/music';

class MusicService {
  public async getLiveTours(): Promise<AxiosResponse<ILiveTours[]>> {
    return GET(`/liveTours`, null, '');
  }

  public async getFeaturedRecords(): Promise<AxiosResponse<IFeaturedRecords[]>> {
    return GET(`/latestFourFeaturedRecords`, null, '');
  }

  public async getYanceyMusic(): Promise<AxiosResponse<IYanceyMusic[]>> {
    return GET(`/yanceyMusic`, null, '');
  }
}

const musicService = new MusicService();

export default musicService;