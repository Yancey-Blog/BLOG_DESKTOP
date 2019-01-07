interface MusicStoreType {
  liveToursData: ILiveTours[];
  featuredRecordsData: IFeaturedRecords[];
  yanceyMusicData: IYanceyMusic[];
  getLiveTours: () => void;
  getFeaturedRecords: () => void;
  getYanceyMusic: () => void;
}

export interface IMusicProps {
  musicStore ? : MusicStoreType;
}

export interface ILiveTours {
  poster: string;
  title: string;
  upload_date: string;
}

export interface IFeaturedRecords {
  album_name: string;
  artist: string;
  buy_url: string;
  cover: string;
  release_date: string;
  _id: string;
}

export interface IYanceyMusic {
  title: string;
  soundCloud_url: string;
  cover: string;
  release_date: string;
  _id: string;
}