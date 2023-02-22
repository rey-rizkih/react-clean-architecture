import PostList from "@ui/containers/Posts/PostList";
import { usePosts } from "@ui/containers/Posts/Posts.logic";

const Posts = () => {
  const { isLoading, posts } = usePosts();

  return (
    <div className="my-4">
      <h1 className="text-3xl font-bold">Posts</h1>

      <PostList isLoading={isLoading} posts={posts} />

      <hr />
    </div>
  );
};

export default Posts;
