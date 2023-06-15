import { postResponseMapper } from "@mapper/PostMapper";
import { Post, PostDetail, PostParams } from "@model/Post";
import { CommentRepository } from "@repository/CommentRepository";
import { PostRepository } from "@repository/PostRepository";
import { PostUseCase } from "@useCase/PostUseCase";

class PostUseCaseImpl implements PostUseCase {
  constructor(
    private readonly postRepo: PostRepository,
    private readonly commentRepo: CommentRepository,
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
    const post = await this.postRepo.addPost({
      title: payload.title,
      body: payload.content,
      userId: 1,
    });

    return {
      ...postResponseMapper(post),
      comments: [],
    };
  }
}

export default PostUseCaseImpl;
