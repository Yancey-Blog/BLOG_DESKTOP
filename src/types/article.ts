export interface ArticleStoreType {
  posts: IArticleDetail[];
  curPage: number;
  total: number;
  showSearch: boolean;
  toggleShowSearch: () => void;
  onSearchChange: (e: any) => void;
  getPostsByPage: () => void;
  getPostsByTitle: (title: string) => void;
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