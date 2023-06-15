import type { Comment } from "./Comment";

export interface Post {
  id: number;
  title: string;
  content: string;
  userId: number;
}

export interface PostParams {
  title: string;
  content: string;
}

export interface PostDetail extends Post {
  comments: Comment[];
}
