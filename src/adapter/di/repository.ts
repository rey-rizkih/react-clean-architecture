import type { CommentRepository } from "@repository/CommentRepository";
import type { PostRepository } from "@repository/PostRepository";
import type { Infrastructures } from "./infrastructures";
import PostRepositoryImpl from "@repository/impl/PostRepositoryImpl";
import CommentRepositoryImpl from "@repository/impl/CommentRepostoryImpl";

export interface Repositories {
  post: PostRepository;
  comment: CommentRepository;
}

const repositories = (infrastructure: Infrastructures): Repositories => {
  const baseURL = "https://jsonplaceholder.typicode.com";

  return {
    post: new PostRepositoryImpl(baseURL, infrastructure.http),
    comment: new CommentRepositoryImpl(baseURL, infrastructure.http),
  };
};

export default repositories;
