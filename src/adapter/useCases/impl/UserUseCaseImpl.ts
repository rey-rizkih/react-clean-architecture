import type { User } from "@model/User";
import type { UserRepository } from "@repository/UserRepository";
import type { UserUseCase } from "@useCase/UserUseCase";

class UserUseCaseImpl implements UserUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  public async getUsers(): Promise<User[]> {
    return this.userRepo.getUsers();
  }

  public getUserLocal(): User | null {
    return this.userRepo.getUserLocal();
  }
}

export default UserUseCaseImpl;
