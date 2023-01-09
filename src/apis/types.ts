export type WriteItemParam = {
  title: string;
  body: string;
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
};
