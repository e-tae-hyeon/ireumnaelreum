export type WriteItemParam = {
  title: string;
  body: string;
};

export type GetItemsResult = {
  items: Item[];
  pageInfo: PageInfo;
};

export type UpdateItemParam = {
  itemId: number;
} & WriteItemParam;

export type WriteCommentParam = {
  itemId: number;
  text: string;
};

export type Item = {
  id: number;
  title: string;
  body: string;
  createAt: string;
  updatedAt: string;
  user: User;
  itemStats: ItemStats;
};

export type ItemStats = {
  id: number;
  clicks: number;
  commentsCount: number;
};

export type User = {
  id: number;
  Profile: Profile;
};

export type Profile = {
  nickname: string;
};

export type PageInfo = {
  endCursor: number;
  hasNextPage: boolean;
};

export type Comment = {
  id: number;
  itemId: number;
  text: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
  user: User;
  isLiked: boolean;
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};
