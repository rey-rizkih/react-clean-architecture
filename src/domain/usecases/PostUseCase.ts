import type { IPost, IPostDetail } from "@entities/Post";
import type { ICommentRepository } from "@usecases/repository-interface/ICommentRepository";
import type { IPostRepository } from "@usecases/repository-interface/IPostRepository";

class PostUseCase {
  constructor(
    private readonly postRepo: IPostRepository,
    private readonly commentRepo: ICommentRepository,
  ) {}

  async getPosts(): Promise<IPost[]> {
    return await this.postRepo.getPosts();
  }

  async getPost(id: number): Promise<IPostDetail | null> {
    const post = await this.postRepo.getPost(id);
    const comments = await this.commentRepo.getComments(id);

    if (post)
      return {
        ...post,
        comments,
      };

    return null;
  }

  destroy(reason?: string) {
    this.postRepo.destroy(reason);
  }
}

export default PostUseCase;
