export interface AboutStoreType {
  abouts: IAbout[];
  getAbouts: () => void;
}

export interface IAboutProps {
  aboutStore: AboutStoreType;
}

export interface IAbout {
  cover: string;
  introduction: string;
  release_date: string;
  title: string;
  __v: number;
  _id: string
}