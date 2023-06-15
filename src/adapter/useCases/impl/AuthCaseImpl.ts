import type { AuthRepository } from "@repository/AuthRepository";
import type { UserRepository } from "@repository/UserRepository";
import type { AuthUseCase } from "@useCase/AuthUseCase";

class AuthUseCaseImpl implements AuthUseCase {
  constructor(
    private readonly authRepo: AuthRepository,
    private readonly userRepo: UserRepository,
  ) {}

  public async signIn(): Promise<void> {
    const users = await this.userRepo.getUsers();

    if (!users.length) {
      return;
    }

    /** get random index */
    const index = Math.floor(Math.random() * 9);

    this.authRepo.signIn(users[index]);
  }

  public signOut(): void {
    this.authRepo.signOut();
  }
}

export default AuthUseCaseImpl;
