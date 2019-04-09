interface LayoutsStoreType {
  players: IPlayer[];
  globalStatus: IGlobalStatus;
  isHomePage: boolean;
  getPlayers: () => void;
  getGlobalStatus: () => void;
  getLocalPath: () => void;
}

export interface ILayoutsProps {
  layoutsStore ? : LayoutsStoreType;
}

export interface IPlayer {
  __v: number;
  _id: string;
  title: string;
  artist: string;
  show: boolean;
  music_file_url: string;
  lrc: string;
  cover: string;
  upload_date: string;
}

export interface IAPlayer {
  name: string;
  artist: string;
  url: string;
  cover: string;
  lrc: string;
}

export interface IGlobalStatus {
  full_site_gray: boolean;
  __v: number;
  _id: string;
}