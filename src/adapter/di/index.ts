import type { PostUseCase } from "adapter/useCases/PostUseCase";
import infrastructures from "./infrastructures";
import repositories from "./repository";
import useCases from "./useCases";
import { AuthUseCase } from "@useCase/AuthUseCase";
import { UserUseCase } from "@useCase/UserUseCase";

class Di {
  readonly auth: AuthUseCase;
  readonly post: PostUseCase;
  readonly user: UserUseCase;

  constructor() {
    const infrastructure = infrastructures();
    const repository = repositories(infrastructure);
    const useCase = useCases(repository);

    this.auth = useCase.auth;
    this.post = useCase.post;
    this.user = useCase.user;
  }
}

export default Di;

export const di = new Di();
