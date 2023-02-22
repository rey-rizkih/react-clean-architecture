import HttpResponseMapper from "@common/mapper/HttpResponseMapper";
import HttpClientRepository from "@common/repository/HttpClientRepository";
import type { ICommentDto, ICommentBody } from "@dtos/Comment";

class CommentRepository extends HttpClientRepository {
  async getComments(postId: number): Promise<ICommentDto[]> {
    const comments = await this.httpClient.request({
      method: "get",
      url: `${this.baseURL}/posts/${postId}/comments`,
    });

    return new HttpResponseMapper<ICommentDto[]>(comments, []).body;
  }

  async addComment(postId: number, body: ICommentBody): Promise<ICommentDto> {
    const comment = await this.httpClient.request({
      method: "post",
      url: `${this.baseURL}/posts/${postId}/comments`,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body,
    });

    return new HttpResponseMapper<ICommentDto>(comment).body;
  }

  destroy(reason?: string) {
    this.httpClient.destroy(reason);
  }
}
export default CommentRepository;
