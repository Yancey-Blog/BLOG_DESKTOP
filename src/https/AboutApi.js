import { GET } from './axios';

class AboutApi {
  getData = () => GET('/abouts', {});
}

const aboutApi = new AboutApi();

export default aboutApi;
