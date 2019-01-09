import {
  observable,
  runInAction,
  action,
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
  @observable public curPage: number = 1;
  @observable public total: number = 0;
  @observable public showSearch: boolean = false;

  constructor() {
    this.posts = [];
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

  public getPostsByPage = async () => {
    try {
      const res = await articleService.getPostsByPage(this.curPage);
      runInAction(() => {
        this.posts = res.data;
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
}

const articleStore = new ArticleStore();

export default articleStore;