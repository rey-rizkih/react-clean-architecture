import type { User } from "@model/User";

export interface UserUseCase {
  getUsers(): Promise<User[]>;
  getUserLocal(): User | null;
}
