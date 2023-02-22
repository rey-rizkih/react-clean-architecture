import CommentUseCase from "@usecases/CommentUseCase";
import PostUseCase from "@usecases/PostUseCase";
import UserUseCase from "@usecases/UserUseCase";

import type { IRepositories } from "@di/repositorys";

export interface IUseCases {
  user: UserUseCase;
  post: PostUseCase;
  comment: CommentUseCase;
}

const useCases = (repositories: IRepositories): IUseCases => ({
  user: new UserUseCase(repositories.user),
  post: new PostUseCase(repositories.post, repositories.comment),
  comment: new CommentUseCase(repositories.comment),
});

export default useCases;
