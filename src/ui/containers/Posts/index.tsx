import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { addPost, getPosts } from "@service/PostService";
import PostForm from "./Form";
import PostList from "./PostList";

const Posts = () => {
  const queryClient = useQueryClient();
  const postQuery = useQuery(["posts"], getPosts);

  const postMutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  return (
    <div className="my-4">
      <h1 className="text-3xl font-bold">Posts</h1>

      <PostForm isLoading={postMutation.isLoading} onSubmit={postMutation.mutate} />

      <hr />

      <PostList isLoading={postQuery.isLoading} posts={postQuery.data} />

      <hr />
    </div>
  );
};

export default Posts;
