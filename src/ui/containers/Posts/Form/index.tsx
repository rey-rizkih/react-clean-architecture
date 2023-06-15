import { useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { PostParams } from "@model/Post";

export type ErrorsForm<T = {}> = {
  [K in keyof T]?: { message?: string };
};

export interface PostFormProps {
  isLoading: boolean;
  onSubmit: (data: PostParams) => void;
}

const schema = yup
  .object({
    title: yup.string().required(),
    content: yup.string().required(),
  })
  .required();

const PostForm = ({ isLoading, onSubmit }: PostFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostParams>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      content: "",
    },
  });
  return (
    <form className="my-4 w-full" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="input-title">
        <span className="mb-1 block">Title</span>
        <input
          {...register("title")}
          id="input-title"
          className="mb-2 w-full border px-2 py-1 md:w-1/3"
          type="text"
          aria-invalid={errors?.title ? "true" : "false"}
        />

        {errors?.title && (
          <p role="alert" className="text-sm text-red-600">
            *) {errors.title?.message}
          </p>
        )}
      </label>

      <label htmlFor="input-content" className="mb-2 block">
        <span className="mb-1 block">Content</span>
        <textarea
          {...register("content")}
          id="input-content"
          className="w-full border px-2 py-1"
          aria-label="input content"
          aria-invalid={errors?.content ? "true" : "false"}
        />

        {errors?.content && (
          <p role="alert" className="text-sm text-red-600">
            *) {errors.content?.message}
          </p>
        )}
      </label>

      <button
        type="submit"
        className="rounded-md border bg-cyan-600 px-3 py-1 text-white"
        disabled={isLoading}
      >
        {isLoading ? "Save..." : "Save"}
      </button>
    </form>
  );
};

export default PostForm;
