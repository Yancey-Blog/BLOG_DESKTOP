import { GET, PUT } from '../tools/axios';

import { AxiosResponse } from 'axios';

import {
  IArticleDetail,
  IArchive,
  IDetail,
  ILike,
  IIncreasePV,
} from '../types/article';

import { ipify } from '../constants/constants';

class ArticleService {
  public getPostById(id: string): Promise<AxiosResponse<IDetail>> {
    return GET(`/articles/${id}`, null, '');
  }

  public getPostsByPage(
    page: number,
  ): Promise<AxiosResponse<IArticleDetail[]>> {
    return GET(`/articleList/page/${page}`, null, '');
  }

  public getPostsByTitle(
    title: string,
  ): Promise<AxiosResponse<IArticleDetail[]>> {
    return GET(`/articlesByTitle?q=${title}`, null, '');
  }

  public getAllTags(): Promise<AxiosResponse<string[]>> {
    return GET('/allTags', null, '');
  }

  public getPostsByTag(tag: string): Promise<AxiosResponse<IArticleDetail[]>> {
    return GET(`/articlesByTag?tag=${tag}`, null, '');
  }

  public getHots(): Promise<AxiosResponse<IArticleDetail[]>> {
    return GET('/articlesByPV', null, '');
  }

  public getArchives(): Promise<AxiosResponse<IArchive[]>> {
    return GET('/archives', null, '');
  }

  public handleLikes(id: string, ip: string): Promise<AxiosResponse<ILike>> {
    return PUT(`/likes/${id}?ip=${ip}`, null, '');
  }

  public getLikes(id: string, ip: string): Promise<AxiosResponse<ILike>> {
    return GET(`/likes/${id}?ip=${ip}`, null, '');
  }

  public getIp(): Promise<AxiosResponse<string>> {
    return GET(ipify, null, '');
  }

  public increasePV(id: string): Promise<AxiosResponse<IIncreasePV>> {
    return PUT(`/articlePV/${id}`, null, '');
  }
}

const articleService = new ArticleService();

export default articleService;
