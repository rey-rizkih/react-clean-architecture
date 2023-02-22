import type { IPostDto } from "@dtos/Post";

export interface IPostRepository {
  getPosts(): Promise<IPostDto[]>;
  getPost(id: number): Promise<IPostDto | undefined>;
  destroy(reason?: string): void;
}
