import { useComment } from "@ui/containers/Comments/Comments.logic";
import CommentList from "@ui/containers/Comments/List";
import CommentForm from "@ui/containers/Comments/Form";

import type { CommentListProps } from "@ui/containers/Comments/List";

export interface CommentsProps extends CommentListProps {
  postId: number;
}

const Comments = ({ postId, isLoading, comments = [] }: CommentsProps) => {
  const { isLoading: isCommentLoading, handleAddComment } = useComment(postId);

  return (
    <div className="my-4">
      <CommentList isLoading={isLoading} comments={comments} />
      <hr />

      <CommentForm isLoading={isCommentLoading} onSubmit={handleAddComment} />
    </div>
  );
};

export default Comments;
