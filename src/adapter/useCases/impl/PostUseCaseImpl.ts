import AccessDeniedError from "@error/accessDenied";
import { postResponseMapper } from "@mapper/PostMapper";
import type { Post, PostDetail, PostParams } from "@model/Post";
import type { CommentRepository } from "@repository/CommentRepository";
import type { PostRepository } from "@repository/PostRepository";
import type { UserRepository } from "@repository/UserRepository";
import type { PostUseCase } from "@useCase/PostUseCase";

class PostUseCaseImpl implements PostUseCase {
  constructor(
    private readonly postRepo: PostRepository,
    private readonly commentRepo: CommentRepository,
    private readonly userRepo: UserRepository,
  ) {}

  public async getPosts(): Promise<Post[]> {
    const posts = await this.postRepo.getPosts();

    return posts?.map((post) => postResponseMapper(post));
  }

  public async getPost(id: number): Promise<PostDetail | null> {
    const post = await this.postRepo.getPost(id);
    const comments = await this.commentRepo.getComments(id);

    if (post)
      return {
        ...postResponseMapper(post),
        comments,
      };

    return null;
  }

  public async addPost(payload: PostParams): Promise<PostDetail> {
    const user = this.userRepo.getUserLocal();

    if (!user) throw new AccessDeniedError();

    const post = await this.postRepo.addPost({
      title: payload.title,
      body: payload.content,
      userId: user.id,
    });

    return {
      ...postResponseMapper(post),
      comments: [],
    };
  }
}

export default PostUseCaseImpl;
