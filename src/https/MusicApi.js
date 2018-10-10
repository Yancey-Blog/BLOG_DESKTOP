import { GET } from './axios';

class MusicApi {
  getLiveToursData = () => GET('/liveTours', {});

  getRecordsData = () => GET('/latestFourFeaturedRecords', {});

  getYanceyMusicData = () => GET('/yanceyMusic', {});
}

const musicApi = new MusicApi();

export default musicApi;
