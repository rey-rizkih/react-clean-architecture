import type { IPostDetail } from "@entities/Post";

export interface PostDetailProps {
  isLoading: boolean;
  post?: IPostDetail;
}

const PostDetail = ({ isLoading, post }: PostDetailProps) => {
  if (isLoading) return <div>Loading...</div>;

  if (!post) return <div>Post Not Found</div>;

  return (
    <div className="my-4">
      <h1 className="mb-3 text-xl font-bold">{post.title}</h1>

      <p> {post.body}</p>
    </div>
  );
};

export default PostDetail;
