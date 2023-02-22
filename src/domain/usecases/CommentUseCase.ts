import type { ICommentDto } from "@dtos/Comment";
import type { IComment, ICommentParams } from "@entities/Comment";
import type { ICommentRepository } from "@usecases/repository-interface/ICommentRepository";

class CommentUseCase {
  constructor(private readonly commentRepo: ICommentRepository) {}

  async getComments(postId: number): Promise<ICommentDto[]> {
    return await this.commentRepo.getComments(postId);
  }

  async addComment(postId: number, params: ICommentParams): Promise<IComment> {
    return await this.commentRepo.addComment(postId, params);
  }

  destroy(reason?: string) {
    this.commentRepo.destroy(reason);
  }
}

export default CommentUseCase;
