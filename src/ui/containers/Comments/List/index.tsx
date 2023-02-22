import type { IComment } from "@entities/Comment";

export interface CommentListProps {
  isLoading: boolean;
  comments?: IComment[];
}

const CommentList = ({ isLoading, comments = [] }: CommentListProps) => {
  if (isLoading) return <div>Loading...</div>;

  if (!comments) return <div>Post Not Found</div>;

  return (
    <ol className="my-4 list-decimal">
      {comments.map((comment) => (
        <li className="mb-4 ml-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold">{comment.name}</h2>
            <i className="text-sm">({comment.email})</i>
          </div>

          <q className="pb">{comment.body}</q>
        </li>
      ))}
    </ol>
  );
};

export default CommentList;
