import type { PostResponse } from "@dto/PostDto";
import type { Post } from "@model/Post";

export const postResponseMapper = (response: PostResponse): Post => ({
  id: response.id,
  userId: response.userId,
  title: response.title,
  content: response.body,
});
