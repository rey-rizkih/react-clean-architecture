import CommentRepository from "@repositories/CommentRepository";
import PostRepository from "@repositories/PostRepository";
import UserRepository from "@repositories/UserRepository";

import type { IInfrastructures } from "@di/infrastructures";

export interface IRepositories {
  user: UserRepository;
  post: PostRepository;
  comment: CommentRepository;
}

const repositories = (infrastructure: IInfrastructures): IRepositories => {
  const baseURL = "https://jsonplaceholder.typicode.com";

  return {
    user: new UserRepository(baseURL, infrastructure.http),
    post: new PostRepository(baseURL, infrastructure.http),
    comment: new CommentRepository(baseURL, infrastructure.http),
  };
};

export default repositories;
