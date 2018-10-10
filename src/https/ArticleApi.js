import { GET } from './axios';

class ArticleApi {
  getDataByPage = curPage => GET(`/articles/page/${curPage}`, {});

  getAllTags = () => GET('/allTags', {});

  getDataByTag = curTag => GET(`/articlesByTag?tag=${curTag}`, {});

  getDataByTitle = title => GET(`/articlesByTitle?title=${title}`, {});

  getTop7Data = () => GET('/articlesByPV', {});
}

const articleApi = new ArticleApi();

export default articleApi;
