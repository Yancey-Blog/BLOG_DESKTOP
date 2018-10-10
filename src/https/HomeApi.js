import { GET } from './axios';

class HomeApi {
  getLatestMotto = () => GET('latestMotto', {});

  getCoverData = id => GET(`/covers/${id}`, {});

  switchCover = (id, params) => GET(`/covers/${id}`, params);

  getNewReleaseData = () => GET('latestThreeProjects', {});

  getAnnouncementData = () => GET('latestAnnouncements', {});
}

const homeApi = new HomeApi();

export default homeApi;
