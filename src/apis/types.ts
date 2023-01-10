export type WriteItemParam = {
  title: string;
  body: string;
};

export type GetItemsResult = {
  items: Item[];
  pageInfo: PageInfo;
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
