import { GET, PUT } from './axios';

class ArticleApi {
  getDataByPage = curPage => GET(`/articleList/page/${curPage}`, {});

  getAllTags = () => GET('/allTags', {});

  getDataByTag = curTag => GET(`/articlesByTag?tag=${curTag}`, {});

  getDataByTitle = title => GET(`/articlesByTitle?q=${title}`, {});

  getTop7Data = () => GET('/articlesByPV', {});

  getArticleById = id => GET(`/articles/${id}`, {});

  increasePV = id => PUT(`/articlePV/${id}`, {});

  getLikes = (id, ip) => GET(`/likes/${id}?ip=${ip}`, {});

  handleLikes = (id, ip) => PUT(`/likes/${id}?ip=${ip}`);

  getIp = () => GET('https://icanhazip.com/');

  getArchive = () => GET('/archives', {});
}

const articleApi = new ArticleApi();

export default articleApi;
