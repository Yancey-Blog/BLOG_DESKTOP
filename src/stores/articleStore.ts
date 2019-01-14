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
  IArticleDetail,
  IArchive,
  IDetail,
} from '../types/article';

import history from '../history';

import {
  sortBy
} from '../tools/tools';

class ArticleStore {
  @observable public posts: IArticleDetail[] = [];
  @observable public hots: IArticleDetail[] = [];
  @observable public tags: string[] = [];
  @observable public archives: IArchive[] = [];
  @observable public curPage: number = 1;
  @observable public total: number = 0;
  @observable public showSearch: boolean = false;
  @observable public likeNum: number = 0;
  @observable public isLiked: boolean = false;
  @observable public curIp: string = '';
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

  constructor() {
    this.posts = [];
    this.hots = [];
    this.tags = [];
    this.archives = [];
    this.curPage = 1;
    this.total = 0;
    this.showSearch = false;
    this.likeNum = 0;
    this.isLiked = false;
    this.curIp = '';
    this.detail = {
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

  public getArchives = async () => {
    try {
      const res = await articleService.getArchives();
      runInAction(() => {
        this.archives = res.data.sort(sortBy('_id', 'year'));
      });
    } catch (e) {
      // todo
    }
  };

  public getPostById = async (id: string) => {
    history.push(`/p/${id}`);
    window.scrollTo(0, 0);
    try {
      const res = await articleService.getPostById(id);
      runInAction(() => {
        this.detail = res.data;
      });
    } catch (e) {
      history.push('/404');
    }
  };

  public handleLikes = async () => {
    try {
      const res = await articleService.handleLikes(window.location.pathname.split('/').slice(-1)[0], this.curIp);
      runInAction(() => {
        this.likeNum = res.data.like_number;
      });
    } catch (e) {
      // todo
    }
  };

  public getLikes = async (id: string, ip: string) => {
    try {
      const res = await articleService.getLikes(id, ip);
      runInAction(() => {
        this.isLiked = res.data.liked;
      });
    } catch (e) {
      // todo
    }
  };

  public getIp = async () => {
    try {
      const res = await articleService.getIp();
      runInAction(() => {
        this.curIp = res.data;
      });
    } catch (e) {
      // todo
    }
  };

  public increasePV = async (id: string) => {
    try {
      await articleService.increasePV(id);
    } catch (e) {
      // todo
    }
  };
}

const articleStore = new ArticleStore();

export default articleStore;