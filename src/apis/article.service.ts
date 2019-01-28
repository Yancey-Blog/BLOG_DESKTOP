import {
  GET,
  PUT,
} from '../tools/axios';

import {
  AxiosResponse
} from 'axios';

import {
  IArticleDetail,
  IArchive,
  IDetail,
  ILike,
  IIncreasePV,
} from '../types/article';

import {
  ipify
} from '../constants/constants';


class ArticleService {
  public async getPostById(id: string): Promise<AxiosResponse<IDetail>> {
    return GET(`/articles/${id}`, null, '');
  }

  public async getPostsByPage(page: number): Promise<AxiosResponse<IArticleDetail[]>> {
    return GET(`/articleList/page/${page}`, null, '');
  }

  public async getPostsByTitle(title: string): Promise<AxiosResponse<IArticleDetail[]>> {
    return GET(`/articlesByTitle?q=${title}`, null, '');
  }

  public async getAllTags(): Promise<AxiosResponse<string[]>> {
    return GET('/allTags', null, '');
  }

  public async getPostsByTag(tag: string): Promise<AxiosResponse<IArticleDetail[]>> {
    return GET(`/articlesByTag?tag=${tag}`, null, '');
  }

  public async getHots(): Promise<AxiosResponse<IArticleDetail[]>> {
    return GET('/articlesByPV', null, '');
  }

  public async getArchives(): Promise<AxiosResponse<IArchive[]>> {
    return GET('/archives', null, '');
  }

  public async handleLikes(id: string, ip: string): Promise<AxiosResponse<ILike>> {
    return PUT(`/likes/${id}?ip=${ip}`, null, '');
  }

  public async getLikes(id: string, ip: string): Promise<AxiosResponse<ILike>> {
    return GET(`/likes/${id}?ip=${ip}`, null, '');
  }

  public async getIp(): Promise<AxiosResponse<string>> {
    return GET(ipify, null, '');
  }

  public async increasePV(id: string): Promise<AxiosResponse<IIncreasePV>> {
    return PUT(`/articlePV/${id}`, null, '');
  }

}

const articleService = new ArticleService();

export default articleService;