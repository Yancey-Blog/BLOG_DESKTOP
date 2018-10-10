import {
  action, observable, configure, runInAction, computed,
} from 'mobx';
import { articleApi } from '../https/index';
import history from '../history';

configure({
  strict: 'always',
});

class ArticleStore {
  @observable summaryData;

  @observable TagData;

  @observable top7Data;

  @observable curPage;

  @observable totalAmount;

  @observable showSearch;

  constructor() {
    this.articleApi = articleApi;
    this.summaryData = [];
    this.TagData = [];
    this.top7Data = [];
    this.curPage = 1;
    this.totalAmount = 1;
    this.showSearch = false;
  }

  getSummaryData = async () => {
    try {
      const response = await this.articleApi.getDataByPage(this.curPage);
      runInAction(() => {
        this.summaryData.splice(0, this.summaryData.length);
        this.summaryData = response.data;
        this.totalAmount = parseInt(response.headers.amount, 10);
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
    if (key == 13) {
      history.push('/blog');
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
