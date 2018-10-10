import { GET } from './axios';

class CVApi {
  getUserInfoData = () => GET('/userInfo', {});

  getProgramExperienceData = () => GET('/programExperience', {});

  getWorkExperienceData = () => GET('/workExperience', {});
}

const cvApi = new CVApi();

export default cvApi;
