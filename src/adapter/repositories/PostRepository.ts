import type { PostPayload, PostResponse } from "@dto/PostDto";
import HttpClientRepository from "./HttpClientRepository";

export interface PostRepository extends HttpClientRepository {
  getPosts(): Promise<PostResponse[]>;
  getPost(id: number): Promise<PostResponse>;
  addPost(payload: PostPayload): Promise<PostResponse>;
}
