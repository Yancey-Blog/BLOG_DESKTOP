export interface AboutStoreType {
  abouts: IAbout[];
  getAboutData: () => void;
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