import type { AuthRepository } from "@repository/AuthRepository";
import type { CommentRepository } from "@repository/CommentRepository";
import type { PostRepository } from "@repository/PostRepository";
import AuthRepositoryImpl from "@repository/impl/AuthRespositoryImpl";
import CommentRepositoryImpl from "@repository/impl/CommentRepostoryImpl";
import PostRepositoryImpl from "@repository/impl/PostRepositoryImpl";
import type { Infrastructures } from "./infrastructures";
import { UserRepository } from "@repository/UserRepository";
import UserRepositoryImpl from "@repository/impl/UserRepositoryImpl";

export interface Repositories {
  auth: AuthRepository;
  comment: CommentRepository;
  post: PostRepository;
  user: UserRepository;
}

const repositories = (infrastructure: Infrastructures): Repositories => {
  const baseURL = "https://jsonplaceholder.typicode.com";

  return {
    auth: new AuthRepositoryImpl(infrastructure.storage),
    comment: new CommentRepositoryImpl(baseURL, infrastructure.http),
    post: new PostRepositoryImpl(baseURL, infrastructure.http),
    user: new UserRepositoryImpl(baseURL, infrastructure.http, infrastructure.storage),
  };
};

export default repositories;
