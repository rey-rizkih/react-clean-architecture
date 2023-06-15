import type { PostUseCase } from "@useCase/PostUseCase";
import PostUseCaseImpl from "@useCase/impl/PostUseCaseImpl";
import type { Repositories } from "./repository";

export interface UseCase {
  post: PostUseCase;
}

const useCases = (repositories: Repositories): UseCase => ({
  post: new PostUseCaseImpl(repositories.post, repositories.comment),
});

export default useCases;
