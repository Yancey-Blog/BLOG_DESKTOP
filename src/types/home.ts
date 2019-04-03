import { ArticleStoreType } from './article';

export interface IHomeStore {
  announcement: string;
  motto: string;
  projects: IProject[];
  coverUrl: string;
  getAnnouncement: () => void;
  getMotto: () => void;
  getProject: () => void;
  loadBgImg: () => void;
  getCover: (position?: string) => void;
}

export interface IHomeProps {
  homeStore?: IHomeStore;
  articleStore?: ArticleStoreType;
}

export interface IAnnouncement {
  __v: number;
  _id: string;
  content: string;
  upload_date: string;
}

export interface IMotto {
  __v: number;
  _id: string;
  content: string;
  upload_date: string;
}

export interface IProject {
  introduction: string;
  poster: string;
  title: string;
  upload_date: string;
  url: string;
  __v: number;
  _id: string;
}

export interface ICover {
  name: string;
  show: boolean;
  upload_date: string;
  url: string;
  __v: number;
  _id: string;
}
