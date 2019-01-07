import {
  observable,
  runInAction,
} from 'mobx';
import {
  articleService
} from '../apis/index.service';
import {
  IArticleDetail
} from '../types/article';

class ArticleStore {
  @observable public posts: IArticleDetail[] = [];
  @observable public curPage: number = 1;
  @observable public isAutoLoad: boolean = true;
  @observable public isManualLoad: boolean = false;
  @observable public isLoading: boolean = false;
  @observable public total: number = 0;

  constructor() {
    this.posts = [];
    this.curPage = 1;
    this.isAutoLoad = true;
    this.isManualLoad = false;
    this.isLoading = false;
    this.total = 0;
  }

  public getData = async (page: number) => {
    this.curPage = page;
    this.isLoading = true;
    try {
      const res = await articleService.getPostsByPage(page);
      runInAction(() => {
        this.posts = [...this.posts, ...res.data];
        if (this.curPage === 3) {
          this.isManualLoad = true;
          this.isAutoLoad = false;
        }
      });
    } catch (e) {
      this.isManualLoad = false;
      this.isAutoLoad = false;
    } finally {
      this.isLoading = false;
    }
  };
}

const articleStore = new ArticleStore();

export default articleStore;