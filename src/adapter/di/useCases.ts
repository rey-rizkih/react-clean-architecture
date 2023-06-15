import type { PostUseCase } from "@useCase/PostUseCase";
import PostUseCaseImpl from "@useCase/impl/PostUseCaseImpl";
import type { Repositories } from "./repository";
import type { UserUseCase } from "@useCase/UserUseCase";
import type { AuthUseCase } from "@useCase/AuthUseCase";
import AuthUseCaseImpl from "@useCase/impl/AuthCaseImpl";
import UserUseCaseImpl from "@useCase/impl/UserUseCaseImpl";

export interface UseCase {
  auth: AuthUseCase;
  post: PostUseCase;
  user: UserUseCase;
}

const useCases = (repositories: Repositories): UseCase => ({
  auth: new AuthUseCaseImpl(repositories.auth, repositories.user),
  post: new PostUseCaseImpl(repositories.post, repositories.comment, repositories.user),
  user: new UserUseCaseImpl(repositories.user),
});

export default useCases;
