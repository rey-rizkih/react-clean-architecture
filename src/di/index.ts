import infrastructures from "@di/infrastructures";
import repositories from "@di/repositorys";
import useCases from "@di/useCases";

import type CommentUseCase from "@usecases/CommentUseCase";
import type PostUseCase from "@usecases/PostUseCase";
import type UserUseCase from "@usecases/UserUseCase";

export default class Di {
  readonly user: UserUseCase;
  readonly post: PostUseCase;
  readonly comment: CommentUseCase;

  constructor() {
    const infrastructure = infrastructures();
    const repository = repositories(infrastructure);
    const useCase = useCases(repository);

    this.user = useCase.user;
    this.post = useCase.post;
    this.comment = useCase.comment;
  }
}
