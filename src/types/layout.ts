interface LayoutsStoreType {
  animatable: boolean;
  visible: boolean;
  themeType: boolean;
  announcement: string;
  playerData: IPlayer[];
  toggleMenu: () => void;
  handleTransitionEnd: () => void;
  handleSwitch: () => void;
  getAnnouncementData: () => void;
  getPlayerData: () => void;
}

export interface ILayoutsProps {
  layoutsStore ? : LayoutsStoreType;
}

export interface IAnnouncement {
  __v: number;
  _id: string;
  content: string;
  upload_date: string;
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