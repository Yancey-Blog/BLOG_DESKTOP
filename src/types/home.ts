import {
  ArticleStoreType
} from './article';

interface IHomeStore {
  announcement: string;
  motto: string;
  projects: IProject[];
  coverUrl: string;
  getAnnouncementData: () => void;
  getMottoData: () => void;
  getProjectData: () => void;
  loadBgImg: () => void;
  getCoverData: (position ? : string) => void;
}

export interface IHomeProps {
  homeStore ? : IHomeStore;
  articleStore ? : ArticleStoreType;
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