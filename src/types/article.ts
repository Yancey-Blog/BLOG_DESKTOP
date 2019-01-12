export interface ArticleStoreType {
  posts: IArticleDetail[];
  hots: IArticleDetail[];
  tags: string[];
  archives: IArchive[];
  curPage: number;
  total: number;
  showSearch: boolean;
  toggleShowSearch: () => void;
  onPageChange: () => void;
  onSearchChange: (e: any) => void;
  getPostsByPage: () => void;
  getPostsByTitle: (title: string) => void;
  getAllTags: () => void;
  getPostsByTag: (tag ? : string) => void;
  getHots: () => void;
  getArchives: () => void;
}

export interface IArticleProps {
  articleStore ? : ArticleStoreType;
  location ? : any;
}

export interface IArticleDetail {
  _id: string;
  header_cover: string;
  title: string;
  summary ? : string;
  content ? : string;
  publish_date: string;
  last_modified_date ? : string;
  tags: string[];
  like_count: string[];
  pv_count: number;
}

export interface IArchive {
  _id: {
    year: number
  };
  data: {
    month: number;
    data: IArchiveMonth[];
  }
}

export interface IArchiveMonth {
  day: number;
  id: string;
  pv_count: number;
  title: string;
}