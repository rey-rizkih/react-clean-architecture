import type { CommentPayload } from "@dto/CommentDto";
import HttpResponseMapper from "@mapper/HttpResponseMapper";
import type { Comment } from "@model/Comment";
import type { CommentRepository } from "@repository/CommentRepository";
import HttpClientRepository from "@repository/HttpClientRepository";

class CommentRepositoryImpl extends HttpClientRepository implements CommentRepository {
  public async getComments(postId: number): Promise<Comment[]> {
    const comments = await this.httpClient.request({
      method: "get",
      url: `${this.baseURL}/posts/${postId}/comments`,
    });

    return new HttpResponseMapper<Comment[]>(comments, []).data;
  }

  public async addComment(postId: number, data: CommentPayload): Promise<Comment> {
    const comment = await this.httpClient.request({
      method: "post",
      url: `${this.baseURL}/posts/${postId}/comments`,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      data,
    });

    return new HttpResponseMapper<Comment>(comment).data;
  }
}

export default CommentRepositoryImpl;
