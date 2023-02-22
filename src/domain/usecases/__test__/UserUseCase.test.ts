import Di from "@di";
import AxiosHttpClient from "@infrastructures/AxiosHttpClient";
import UserUseCase from "@usecases/UserUseCase";

const spyHttpClientRequest = jest.spyOn(AxiosHttpClient.prototype, "request");
const spyHttpClientDestroy = jest.spyOn(AxiosHttpClient.prototype, "destroy");

describe("User Repository", () => {
  let userUseCase: UserUseCase;

  beforeEach(() => {
    userUseCase = new Di().user;
  });

  test("getUsers should call request correctly", async () => {
    spyHttpClientRequest.mockImplementation(() =>
      Promise.resolve({
        statusCode: 200,
        body: [
          {
            address: {
              geo: {
                lat: "124",
                lng: "124",
              },
            },
          },
        ],
      }),
    );

    await expect(userUseCase.getUsers()).resolves.toStrictEqual([
      { address: { geo: { lat: 124, lng: 124 } } },
    ]);

    expect(spyHttpClientRequest).toBeCalledWith({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
    });
  });

  const userCases = [
    {
      name: "has response",
      body: {
        address: {
          geo: {
            lat: "124",
            lng: "124",
          },
        },
      },
      result: {
        address: {
          geo: {
            lat: 124,
            lng: 124,
          },
        },
      },
    },
    {
      name: "has not response",
      body: null,
      result: null,
    },
  ];
  test.each(userCases)(
    "getUser should call request correctly when $name",
    async ({ body, result }) => {
      spyHttpClientRequest.mockImplementation(() =>
        Promise.resolve({
          statusCode: 200,
          body,
        }),
      );

      await expect(userUseCase.getUser(1)).resolves.toStrictEqual(result);

      expect(spyHttpClientRequest).toBeCalledWith({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users/1",
      });
    },
  );

  test("destroy should return call destroy with reason", async () => {
    userUseCase.destroy("test-destroy");

    expect(spyHttpClientDestroy).toBeCalledWith("test-destroy");
  });
});
