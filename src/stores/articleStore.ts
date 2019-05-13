import { observable, runInAction, action, computed } from 'mobx';
import { articleService } from '../apis/index.service';
import { IArticleDetail, IArchive, IDetail } from '../types/article';

import history from '../history';

import routePath from '@constants/routePath';

import { sortBy, setToast } from '@tools/tools';

class ArticleStore {
  @observable public posts: IArticleDetail[] = [];
  @observable public hots: IArticleDetail[] = [];
  @observable public tags: string[] = [];
  @observable public archives: IArchive[] = [];
  @observable public total: number = 0;
  @observable public showSearch: boolean = false;
  @observable public likeNum: number = 0;
  @observable public isLiked: boolean = false;
  @observable public curIp: string = '';
  @observable public totalArticlesCount: number = 0;
  @observable public isDetailLoading: boolean = false;
  @observable public isSummaryLoading: boolean = false;
  @observable public detail: IDetail = {
    curArticle: {
      _id: '',
      header_cover: '',
      title: '',
      summary: '',
      content: '',
      publish_date: '',
      last_modified_date: '',
      tags: [],
      like_count: [],
      pv_count: 0,
    },
    nextArticle: {
      id: '',
      header_cover: '',
      title: '',
    },
    previousArticle: {
      id: '',
      header_cover: '',
      title: '',
    },
  };

  @action public toggleShowSearch = () => {
    this.showSearch = !this.showSearch;
  };

  @action public onSearchChange = (e: any) => {
    const event = e || window.event;
    const key = event.which || event.keyCode || event.charCode;
    if (key === 13) {
      history.push({
        pathname: routePath.search,
        search: `?q=${event.target.value}`,
      });
      this.getPostsByTitle(event.target.value);
      this.showSearch = false;
    }
  };

  @action public onPageChange = async (current: number) => {
    history.push({ pathname: routePath.blog, search: `?page=${current}` });
    await this.getPostsByPage(current);
    window.scroll(0, 0);
  };

  @computed get curPath() {
    return history.location.pathname.slice(1);
  }

  public getPostsByPage = async (page: number) => {
    this.isSummaryLoading = true;
    try {
      const res = await articleService.getPostsByPage(page);
      runInAction(() => {
        this.posts = res.data;
        this.total = parseInt(res.headers.amount, 10);
      });
    } catch (e) {
      setToast(`获取第 ${page} 页失败`);
    } finally {
      this.isSummaryLoading = false;
    }
  };

  public getPostsByTitle = async (title: string) => {
    try {
      const res = await articleService.getPostsByTitle(title);
      runInAction(() => {
        this.posts = res.data;
      });
    } catch (e) {
      setToast('检索失败');
    }
  };

  public getAllTags = async () => {
    try {
      const res = await articleService.getAllTags();
      runInAction(() => {
        this.tags = res.data;
      });
    } catch (e) {
      setToast('获取标签失败');
    }
  };

  public getPostsByTag = async (tag = this.curPath) => {
    try {
      const res = await articleService.getPostsByTag(tag);
      runInAction(() => {
        this.posts = res.data;
      });
    } catch (e) {
      setToast('无法获取此标签下的文章');
    }
  };

  public getHots = async () => {
    try {
      const res = await articleService.getHots();
      runInAction(() => {
        this.hots = res.data;
      });
    } catch (e) {
      setToast('获取 PV 失败');
    }
  };

  public getArchives = async () => {
    try {
      const res = await articleService.getArchives();
      runInAction(() => {
        this.archives = res.data.sort(sortBy('_id', 'year'));
        this.archives.forEach((value: any) =>
          value.data.forEach(
            (val: any) => (this.totalArticlesCount += val.data.length),
          ),
        );
      });
    } catch (e) {
      setToast('获取归档失败');
    }
  };

  public getPostById = async (id: string) => {
    this.isDetailLoading = true;
    history.push(`${routePath.blogDetail}${id}`);
    try {
      const res = await articleService.getPostById(id);
      runInAction(() => {
        this.detail = res.data;
      });
    } catch (e) {
      setToast('获取文章失败');
      history.push(routePath.notFound);
    } finally {
      this.isDetailLoading = false;
    }
  };

  public handleLikes = async () => {
    try {
      const res = await articleService.handleLikes(this.curPath, this.curIp);
      runInAction(() => {
        this.likeNum = res.data.like_number;
      });
    } catch (e) {
      setToast('点赞失败');
    }
  };

  public getLikes = async (id: string, ip: string) => {
    try {
      const res = await articleService.getLikes(id, ip);
      runInAction(() => {
        this.isLiked = res.data.liked;
      });
    } catch (e) {
      setToast('获取点赞信息失败');
    }
  };

  public getIp = async () => {
    try {
      const res = await articleService.getIp();
      runInAction(() => {
        this.curIp = res.data;
      });
    } catch (e) {
      setToast('无法获取你的IP');
    }
  };

  public increasePV = async (id: string) => {
    try {
      await articleService.increasePV(id);
    } catch (e) {
      setToast('增加 PV 失败');
    }
  };
}

const articleStore = new ArticleStore();

export default articleStore;
