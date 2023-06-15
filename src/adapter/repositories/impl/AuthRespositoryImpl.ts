import type { User } from "@model/User";
import type { AuthRepository } from "@repository/AuthRepository";
import LocalStorageRepository from "@repository/LocalStorageRepository";

class AuthRepositoryImpl extends LocalStorageRepository implements AuthRepository {
  public signIn(payload: User): void {
    this.storage.set("user", JSON.stringify(payload));
  }

  public signOut(): void {
    this.storage.remove("user");
  }
}

export default AuthRepositoryImpl;
