import HttpResponseMapper from "@common/mapper/HttpResponseMapper";
import HttpClientRepository from "@common/repository/HttpClientRepository";
import type { IUserDto } from "@dtos/User";

class UserRepository extends HttpClientRepository {
  async getUsers(): Promise<IUserDto[]> {
    const users = await this.httpClient.request({
      method: "get",
      url: this.baseURL + "/users",
    });

    return new HttpResponseMapper<IUserDto[]>(users, []).body;
  }

  async getUser(id: number): Promise<IUserDto | undefined> {
    const user = await this.httpClient.request({
      method: "get",
      url: this.baseURL + "/users/" + id,
    });

    return new HttpResponseMapper<IUserDto>(user).body;
  }

  destroy(reason?: string) {
    this.httpClient.destroy(reason);
  }
}

export default UserRepository;
