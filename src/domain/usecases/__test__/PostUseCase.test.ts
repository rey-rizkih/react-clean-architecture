import Di from "@di";
import AxiosHttpClient from "@infrastructures/AxiosHttpClient";
import PostUseCase from "@usecases/PostUseCase";

const spyHttpClientRequest = jest.spyOn(AxiosHttpClient.prototype, "request");
const spyHttpClientDestroy = jest.spyOn(AxiosHttpClient.prototype, "destroy");

describe("Post Use Case", () => {
  let postUseCase: PostUseCase;

  beforeEach(() => {
    postUseCase = new Di().post;
  });

  test("getPosts should call request correctly", async () => {
    spyHttpClientRequest.mockImplementation(() =>
      Promise.resolve({
        statusCode: 200,
        body: "test-data",
      }),
    );

    await expect(postUseCase.getPosts()).resolves.toBe("test-data");

    expect(spyHttpClientRequest).toBeCalledWith({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts",
    });
  });

  const postCases = [
    {
      name: "has post",
      comments: ["test-comments"],
      post: { data: "test-post" },
      result: {
        comments: ["test-comments"],
        data: "test-post",
      },
    },
    {
      name: "has post without comment",
      comments: undefined,
      post: { data: "test-post" },
      result: {
        comments: [],
        data: "test-post",
      },
    },
    {
      name: "has not post",
      comments: undefined,
      post: undefined,
      result: null,
    },
  ];
  test.each(postCases)(
    "getPost should call request correctly when $name",
    async ({ comments, post, result }) => {
      spyHttpClientRequest.mockImplementation(({ url }) => {
        if (url.includes("comments"))
          return Promise.resolve({
            statusCode: 200,
            body: comments,
          });

        return Promise.resolve({
          statusCode: 200,
          body: post,
        });
      });

      await expect(postUseCase.getPost(1)).resolves.toStrictEqual(result);

      expect(spyHttpClientRequest).toBeCalledWith({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/posts/1",
      });
    },
  );

  test("destroy should return call destroy with reason", async () => {
    postUseCase.destroy("test-destroy");

    expect(spyHttpClientDestroy).toBeCalledWith("test-destroy");
  });
});
