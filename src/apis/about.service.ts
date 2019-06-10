import {
  GET,
} from '../tools/axios';

import {
  AxiosResponse,
} from 'axios';

import {
  IAbout,
} from '../types/about';

class AboutService {
  public getAbouts(): Promise < AxiosResponse < IAbout[] >> {
    return GET('/abouts', null, '');
  }
}


const aboutService = new AboutService();

export default aboutService;