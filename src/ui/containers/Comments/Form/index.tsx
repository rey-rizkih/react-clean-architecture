import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import type { ICommentParams } from "@entities/Comment";

export type ErrorsForm<T = {}> = {
  [K in keyof T]?: { message?: string };
};

export interface CommentFormProps {
  isLoading: boolean;
  onSubmit: (
    data: ICommentParams,
    event?: React.BaseSyntheticEvent<object, any, any> | undefined,
  ) => void;
}

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

const CommentForm = ({ isLoading, onSubmit }: CommentFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICommentParams>({
    resolver: yupResolver(schema),
    defaultValues: {
      body: "",
      email: "",
      name: "",
    },
  });

  return (
    <form className="my-4 w-full" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="input-name">
        <span className="mb-1 block">Name</span>
        <input
          {...register("name")}
          id="input-name"
          className="mb-2 w-full border px-2 py-1 md:w-1/3"
          type="text"
          aria-invalid={errors?.name ? "true" : "false"}
        />

        {errors?.name && (
          <p role="alert" className="text-sm text-red-600">
            *) {errors.name?.message}
          </p>
        )}
      </label>

      <label htmlFor="input-email">
        <span className="mb-1 block">Email</span>
        <input
          {...register("email")}
          id="input-email"
          className="mb-2 w-full border px-2 py-1 md:w-1/3"
          type="email"
          aria-label="input email"
          aria-invalid={errors?.email ? "true" : "false"}
        />

        {errors?.email && (
          <p role="alert" className="text-sm text-red-600">
            *) {errors.email?.message}
          </p>
        )}
      </label>

      <label htmlFor="input-body" className="mb-2 block">
        <span className="mb-1 block">body</span>
        <textarea
          {...register("body")}
          id="input-body"
          className="w-full border px-2 py-1"
          aria-label="input body"
          aria-invalid={errors?.body ? "true" : "false"}
        />

        {errors?.body && (
          <p role="alert" className="text-sm text-red-600">
            *) {errors.body?.message}
          </p>
        )}
      </label>

      <button
        type="submit"
        className="rounded-md border bg-cyan-600 px-3 py-1 text-white"
        disabled={isLoading}
      >
        {isLoading ? "body..." : "body"}
      </button>
    </form>
  );
};

export default CommentForm;
