import {
  observable,
  runInAction,
  action,
  computed,
} from 'mobx';
import {
  articleService
} from '../apis/index.service';
import {
  IArticleDetail
} from '../types/article';

import history from '../history';

class ArticleStore {
  @observable public posts: IArticleDetail[] = [];
  @observable public hots: IArticleDetail[] = [];
  @observable public tags: string[] = [];
  @observable public curPage: number = 1;
  @observable public total: number = 0;
  @observable public showSearch: boolean = false;

  constructor() {
    this.posts = [];
    this.hots = [];
    this.tags = [];
    this.curPage = 1;
    this.total = 0;
    this.showSearch = false;
  }

  @action public toggleShowSearch = () => {
    this.showSearch = !this.showSearch;
  };

  @action public onSearchChange = (e: any) => {
    const event = e || window.event;
    const key = event.which || event.keyCode || event.charCode;
    if (key === 13) {
      history.push(`/search?q=${event.target.value}`);
      this.getPostsByTitle(event.target.value);
      this.showSearch = false;
    }
  };

  @action public onPageChange = (current: number) => {
    this.curPage = current;
    this.getPostsByPage();
  };

  @computed get curTag() {
    return document.location.pathname.split('/').slice(-1)[0];
  }

  public getPostsByPage = async () => {
    try {
      const res = await articleService.getPostsByPage(this.curPage);
      runInAction(() => {
        this.posts = res.data;
        this.total = parseInt(res.headers.amount, 10);
        window.scrollTo(0, 0);
        this.curPage = 1;
      });
    } catch (e) {
      // todo
    } finally {
      // todo
    }
  };

  public getPostsByTitle = async (title: string) => {
    try {
      const res = await articleService.getPostsByTitle(title);
      runInAction(() => {
        this.posts = res.data;
      });
    } catch (e) {
      // todo
    }
  };

  public getAllTags = async () => {
    try {
      const res = await articleService.getAllTags();
      runInAction(() => {
        this.tags = res.data;
      });
    } catch (e) {
      // todo
    }
  };

   public getPostsByTag = async (tag = this.curTag) => {
    try {
      const res = await articleService.getPostsByTag(tag);
      runInAction(() => {
        this.posts = res.data;
      });
    } catch (e) {
      // todo  
    }
  };

  public getHots = async () => {
    try {
      const res = await articleService.getHots();
      runInAction(() => {
        this.hots = res.data;
      });
    } catch (e) {
      // todo
    }
  };
}

const articleStore = new ArticleStore();

export default articleStore;