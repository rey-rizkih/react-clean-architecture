import type { CommentPayload } from "@dto/CommentDto";
import type { Comment } from "@model/Comment";
import type HttpClientRepository from "./HttpClientRepository";

export interface CommentRepository extends HttpClientRepository {
  getComments(postId: number): Promise<Comment[]>;
  addComment(postId: number, data: CommentPayload): Promise<Comment>;
}
