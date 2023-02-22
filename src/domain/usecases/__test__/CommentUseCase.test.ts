import Di from "@di";
import AxiosHttpClient from "@infrastructures/AxiosHttpClient";
import CommentUseCase from "@usecases/CommentUseCase";

const spyHttpClientRequest = jest.spyOn(AxiosHttpClient.prototype, "request");
const spyHttpClientDestroy = jest.spyOn(AxiosHttpClient.prototype, "destroy");

describe("Comment Use Case", () => {
  let commentUseCase: CommentUseCase;

  beforeEach(() => {
    commentUseCase = new Di().comment;
  });

  test("getComments should call request correctly", async () => {
    spyHttpClientRequest.mockImplementation(() =>
      Promise.resolve({
        statusCode: 200,
        body: "test-data",
      }),
    );

    await expect(commentUseCase.getComments(1)).resolves.toBe("test-data");

    expect(spyHttpClientRequest).toBeCalledWith({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts/1/comments",
    });
  });

  test("addComment should return response correctly", async () => {
    spyHttpClientRequest.mockImplementation(() =>
      Promise.resolve({
        statusCode: 200,
        body: "test-success",
      }),
    );

    const mockBody = {
      name: "test-name",
      body: "test-body",
      email: "test-email",
    };

    await expect(commentUseCase.addComment(1, mockBody)).resolves.toBe(
      "test-success",
    );
    expect(spyHttpClientRequest).toBeCalledWith({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts/1/comments",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: mockBody,
    });
  });

  test("destroy should return call destroy with reason", async () => {
    commentUseCase.destroy("test-destroy");

    expect(spyHttpClientDestroy).toBeCalledWith("test-destroy");
  });
});
