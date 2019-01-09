import {
  GET,
} from '../tools/axios';

import {
  AxiosResponse
} from 'axios';

import {
  IArticleDetail
} from '../types/article';


class ArticleService {
  public async getPostById(id: string): Promise < AxiosResponse < IArticleDetail >> {
    return GET(`/articles/${id}`, null, '');
  }

  public async getPostsByPage(page: number): Promise < AxiosResponse < IArticleDetail[] >> {
    return GET(`/articleList/page/${page}`, null, '');
  }

  public async getPostsByTitle(title: string): Promise < AxiosResponse < IArticleDetail[] >> {
    return GET(`/articlesByTitle?q=${title}`, null, '');
  }
}

const articleService = new ArticleService();

export default articleService;