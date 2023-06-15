import type { User } from "@model/User";

export interface AuthRepository {
  signIn(payload: User): void;
  signOut(): void;
}
