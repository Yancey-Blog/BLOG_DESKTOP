import { GET } from './axios';

class ArticleApi {
  getDataByPage = curPage => GET(`/articleList/page/${curPage}`, {});

  getAllTags = () => GET('/allTags', {});

  getDataByTag = curTag => GET(`/articlesByTag?tag=${curTag}`, {});

  getDataByTitle = title => GET(`/articlesByTitle?q=${title}`, {});

  getTop7Data = () => GET('/articlesByPV', {});

  getArticleById = id => GET(`/articles/${id}`, {});
}

const articleApi = new ArticleApi();

export default articleApi;
