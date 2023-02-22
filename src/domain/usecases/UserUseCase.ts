import type { IUserRepository } from "@usecases/repository-interface/IUserRepository";
import type { IUser } from "@entities/User";

class UserUseCase {
  constructor(private readonly userRepo: IUserRepository) {}

  async getUsers(): Promise<IUser[]> {
    const users = await this.userRepo.getUsers();

    return users.map((user) => ({
      ...user,
      address: {
        ...user.address,
        geo: {
          lat: Number(user.address.geo.lat),
          lng: Number(user.address.geo.lng),
        },
      },
    }));
  }

  async getUser(id: number): Promise<IUser | null> {
    const user = await this.userRepo.getUser(id);

    if (user)
      return {
        ...user,
        address: {
          ...user.address,
          geo: {
            lat: Number(user.address.geo.lat),
            lng: Number(user.address.geo.lng),
          },
        },
      };

    return null;
  }

  destroy(reason?: string) {
    this.userRepo.destroy(reason);
  }
}

export default UserUseCase;
