import type { IUserDto } from "@dtos/User";

export interface IUserRepository {
  getUsers(): Promise<IUserDto[]>;
  getUser(id: number): Promise<IUserDto | undefined>;
  destroy(reason?: string): void;
}
