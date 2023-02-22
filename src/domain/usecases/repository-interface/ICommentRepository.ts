import type { ICommentDto, ICommentBody } from "@dtos/Comment";

export interface ICommentRepository {
  getComments(postId: number): Promise<ICommentDto[]>;
  addComment(postId: number, body: ICommentBody): Promise<ICommentDto>;
  destroy(reason?: string): void;
}
