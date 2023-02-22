import Di from "@di/index";
import { useCallback, useState } from "react";

import type { ICommentParams } from "@entities/Comment";
import type { SubmitHandler } from "react-hook-form";

export const useComment = (postId: number) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddComment: SubmitHandler<ICommentParams> = useCallback(
    async (values) => {
      setIsLoading(true);

      try {
        const comment = await new Di().comment.addComment(postId, values);

        console.log(comment);
      } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);

        alert(message);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return { isLoading, handleAddComment };
};
