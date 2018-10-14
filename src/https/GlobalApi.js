import { GET } from './axios';

class GlobalApi {
  getData = () => GET('/globalStatus', {});
}

const globalApi = new GlobalApi();

export default globalApi;
