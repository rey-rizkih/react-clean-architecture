import type { PostUseCase } from "adapter/useCases/PostUseCase";
import infrastructures from "./infrastructures";
import repositories from "./repository";
import useCases from "./useCases";

class Di {
  readonly post: PostUseCase;

  constructor() {
    const infrastructure = infrastructures();
    const repository = repositories(infrastructure);
    const useCase = useCases(repository);

    this.post = useCase.post;
  }
}
export const di = new Di();
export default Di;
