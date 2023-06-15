import type { HttpClient } from "@infra/protocol/HttpClient";
import type { Storage } from "@infra/protocol/Storage";
import HttpResponseMapper from "@mapper/HttpResponseMapper";
import type { User } from "@model/User";
import HttpClientRepository from "@repository/HttpClientRepository";
import type { UserRepository } from "@repository/UserRepository";

class UserRepositoryImpl extends HttpClientRepository implements UserRepository {
  constructor(
    readonly baseURL: string,
    readonly httpClient: HttpClient,
    readonly storage: Storage,
  ) {
    super(baseURL, httpClient);
  }

  public async getUsers(): Promise<User[]> {
    const users = await this.httpClient.request({
      method: "get",
      url: `${this.baseURL}/users`,
    });

    return new HttpResponseMapper<User[]>(users, []).data;
  }

  public getUserLocal(): User | null {
    return this.storage.getObject<User>("user");
  }
}

export default UserRepositoryImpl;
