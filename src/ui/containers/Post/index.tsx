import { useParams } from "react-router-dom";

import Comments from "@ui/containers/Comments";
import PostDetail from "@ui/containers/Post/PostDetail";

const Post = () => {
  let { id: _id } = useParams();
  const id = Number(_id);

  return (
    <div className="my-4">
      <h1 className="text-3xl font-bold">Posts</h1>

      {/* <PostDetail isLoading={isLoading} post={post} />

      <hr />

      <Comments postId={id} isLoading={isLoading} comments={post?.comments} /> */}
    </div>
  );
};

export default Post;
