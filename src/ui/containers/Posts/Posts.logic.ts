import { useEffect, useState } from "react";

import Di from "@di";

import type { IPost } from "@entities/Post";

export const usePosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const postService = new Di().post;

    const doGetPosts = async () => {
      try {
        setIsLoading(true);

        const posts = await postService.getPosts();

        if (posts) setPosts(posts);
      } catch (error: any) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    doGetPosts();

    return () => {
      postService.destroy("Cleanup useEffect");
    };
  }, []);

  return { isLoading, posts };
};
