import {
  action, observable, configure, runInAction, computed,
} from 'mobx';
import history from '../history';
import { articleApi } from '../https/index';

configure({
  strict: 'always',
});

class ArticleStore {
  @observable summaryData;

  @observable TagData;

  @observable top7Data;

  @observable detailData;

  @observable musicData;

  @observable detailTags;

  @observable nextArticle;

  @observable previousArticle;

  @observable curPage;

  @observable totalAmount;

  @observable showSearch;

  @observable curIp;

  @observable likeNum;

  @observable isLiked;

  @observable archiveData;

  constructor() {
    this.articleApi = articleApi;
    this.summaryData = [];
    this.TagData = [];
    this.top7Data = [];
    this.musicData = [];
    this.detailData = {};
    this.nextArticle = {};
    this.previousArticle = {};
    this.detailTags = [];
    this.curPage = 1;
    this.totalAmount = 1;
    this.showSearch = false;
    this.curIp = '';
    this.likeNum = 0;
    this.isLiked = false;
    this.archiveData = [];
  }

  getSummaryData = async () => {
    try {
      const response = await this.articleApi.getDataByPage(this.curPage);
      runInAction(() => {
        this.summaryData.splice(0, this.summaryData.length);
        this.summaryData = response.data;
        this.totalAmount = parseInt(response.headers.amount, 10);
        window.scrollTo(0, 0);
        this.curPage = 1;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  getDataByTag = async () => {
    try {
      const response = await this.articleApi.getDataByTag(this.curTag);
      runInAction(() => {
        this.summaryData.splice(0, this.summaryData.length);
        this.summaryData = response.data;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  getMusicData = async () => {
    try {
      const response = await this.articleApi.getDataByTag('Music');
      runInAction(() => {
        this.musicData = response.data.slice(0, 4);
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  getTagData = async () => {
    try {
      const response = await this.articleApi.getAllTags();
      runInAction(() => {
        this.TagData = response.data;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  getTop7Data = async () => {
    try {
      const response = await this.articleApi.getTop7Data();
      runInAction(() => {
        this.top7Data = response.data;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  getDataByTitle = async (value) => {
    try {
      const response = await this.articleApi.getDataByTitle(value);
      runInAction(() => {
        this.summaryData.splice(0, this.summaryData.length);
        this.summaryData = response.data;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  getArticleById = async (id) => {
    history.push(`/p/${id}`);
    window.scrollTo(0, 0);
    try {
      const response = await this.articleApi.getArticleById(id);
      runInAction(() => {
        this.detailData = response.data.curArticle;
        this.detailTags = response.data.curArticle.tags;
        this.nextArticle = response.data.nextArticle;
        this.previousArticle = response.data.previousArticle;
        this.likeNum = response.data.curArticle.like_count.length;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  increasePV = async (id) => {
    try {
      const response = await this.articleApi.increasePV(id);
      runInAction(() => {
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  getArchive = async () => {
    try {
      const response = await this.articleApi.getArchive();
      runInAction(() => {
        this.archiveData = response.data;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  getIp = async () => {
    try {
      const response = await this.articleApi.getIp();
      runInAction(() => {
        this.curIp = response.data;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  getLikes = async (id, params) => {
    try {
      const response = await this.articleApi.getLikes(id, params);
      runInAction(() => {
        this.isLiked = response.data.liked;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  handleLikes = async () => {
    try {
      const response = await this.articleApi.handleLikes(window.location.pathname.split('/').slice(-1)[0], this.curIp);
      runInAction(() => {
        this.likeNum = response.data.like_number;
      });
    } catch (e) {
      console.log('unknown error');
    }
  };

  @computed get curTag() {
    return document.location.pathname.split('/').slice(-1)[0];
  }

  @action onPageChange = (current, pageSize) => {
    this.curPage = current;
    this.getSummaryData();
  };

  @action onSearchChange = (e) => {
    const event = e || window.event;
    const key = event.which || event.keyCode || event.charCode;
    if (key === 13) {
      history.push(`/search?q=${event.target.value}`);
      this.getDataByTitle(event.target.value);
      this.showSearch = false;
    }
  };

  @action onShowSearchChange = () => {
    this.showSearch = true;
  };

  @action onCloseSearchChange = () => {
    this.showSearch = false;
  };
}

const articleStore = new ArticleStore(articleApi);

export default articleStore;
