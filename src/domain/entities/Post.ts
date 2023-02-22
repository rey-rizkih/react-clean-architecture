import type { IComment } from "@entities/Comment";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostDetail extends IPost {
  comments: IComment[];
}
