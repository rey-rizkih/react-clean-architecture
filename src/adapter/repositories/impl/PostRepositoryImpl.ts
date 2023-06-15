import type { PostPayload, PostResponse } from "@dto/PostDto";
import HttpResponseMapper from "@mapper/HttpResponseMapper";
import HttpClientRepository from "@repository/HttpClientRepository";
import type { PostRepository } from "@repository/PostRepository";

class PostRepositoryImpl extends HttpClientRepository implements PostRepository {
  public async getPosts(): Promise<PostResponse[]> {
    const posts = await this.httpClient.request({
      method: "get",
      url: `${this.baseURL}/posts`,
    });

    return new HttpResponseMapper<PostResponse[]>(posts, []).data;
  }

  public async getPost(id: number): Promise<PostResponse> {
    const post = await this.httpClient.request({
      method: "get",
      url: `${this.baseURL}/posts/${id}`,
    });

    return new HttpResponseMapper<PostResponse>(post).data;
  }

  public async addPost(data: PostPayload): Promise<PostResponse> {
    const posts = await this.httpClient.request({
      method: "post",
      url: `${this.baseURL}/posts`,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      data,
    });

    return new HttpResponseMapper(posts).data;
  }
}

export default PostRepositoryImpl;
