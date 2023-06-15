import { Link } from "react-router-dom";

import type { Post } from "@model/Post";

export interface PostListProps {
  isLoading: boolean;
  posts?: Post[];
}

const PostList = ({ isLoading, posts }: PostListProps) => {
  if (isLoading) return <div>Loading...</div>;

  if (!posts) return <div>Posts Not Found</div>;

  return (
    <ol className="list-inside list-decimal">
      {posts.map((post) => (
        <li key={post.id} className="cursor-pointer text-blue-500 underline">
          <Link to={"/" + post.id}>{post.title}</Link>
        </li>
      ))}
    </ol>
  );
};

export default PostList;
