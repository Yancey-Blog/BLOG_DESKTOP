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
}

const articleService = new ArticleService();

export default articleService;