import HttpResponseMapper from "@common/mapper/HttpResponseMapper";
import HttpClientRepository from "@common/repository/HttpClientRepository";
import type { IPostDto } from "@dtos/Post";

class PostRepository extends HttpClientRepository {
  async getPosts(): Promise<IPostDto[]> {
    const posts = await this.httpClient.request({
      method: "get",
      url: `${this.baseURL}/posts`,
    });

    return new HttpResponseMapper<IPostDto[]>(posts, []).body;
  }

  async getPost(postId: number): Promise<IPostDto | undefined> {
    const post = await this.httpClient.request({
      method: "get",
      url: `${this.baseURL}/posts/${postId}`,
    });

    return new HttpResponseMapper<IPostDto>(post).body;
  }

  destroy(reason?: string) {
    this.httpClient.destroy(reason);
  }
}
export default PostRepository;
