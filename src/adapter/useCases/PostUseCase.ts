import type { Post, PostDetail, PostParams } from "@model/Post";

export interface PostUseCase {
  getPosts(): Promise<Post[]>;
  getPost(id: number): Promise<PostDetail | null>;
  addPost(payload: PostParams): Promise<Post>;
}
