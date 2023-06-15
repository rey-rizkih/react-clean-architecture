import { di } from "@di";
import type { PostParams } from "@model/Post";

export const getPosts = async () => await di.post.getPosts();

export const getPost = async (id: number) => await di.post.getPost(id);

export const addPost = async (values: PostParams) => await di.post.addPost(values);
