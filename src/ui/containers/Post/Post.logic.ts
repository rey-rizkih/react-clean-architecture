import { useEffect, useState } from "react";

import Di from "@di";

import type { IPostDetail } from "@entities/Post";

export const usePost = (id: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState<IPostDetail>();

  useEffect(() => {
    const service = new Di().post;

    const asyncFnc = async () => {
      try {
        setIsLoading(true);

        const post = await service.getPost(id);

        if (post) setPost(post);
      } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);

        alert(message);
      } finally {
        setIsLoading(false);
      }
    };
    asyncFnc();

    return () => {
      service.destroy("Cleanup useEffect");
    };
  }, []);

  return { isLoading, post };
};
