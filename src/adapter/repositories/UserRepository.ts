import HttpClientRepository from "./HttpClientRepository";
import type { User } from "@model/User";

export interface UserRepository extends HttpClientRepository {
  getUsers(): Promise<User[]>;
  getUserLocal(): User | null;
}
