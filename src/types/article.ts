export interface ArticleStoreType {
  posts: IArticleDetail[];
  curPage: number;
  isAutoLoad: boolean;
  isManualLoad: boolean;
  isLoading: boolean;
  postAmouts: boolean;
  total: number;
  getData: (page: number) => void;
}

export interface IArticleDetail {
  _id: string;
  header_cover: string;
  title: string;
  summary?: string;
  content ? : string;
  publish_date: string;
  last_modified_date ? : string;
  tags: string[];
  like_count: string[];
  pv_count: number;
}