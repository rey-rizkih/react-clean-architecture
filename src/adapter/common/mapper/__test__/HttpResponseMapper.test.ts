import { HttpStatusCode } from "axios";

import HttpResponseMapper from "@common/mapper/HttpResponseMapper";

import type { HttpResponse } from "@infrastructures/protocols/HttpClient";

describe("Http Response Mapper", () => {
  const responseCases: {
    name: string;
    result: string;
    response: HttpResponse;
  }[] = [
    {
      name: "not has status",
      result: "mock-default-value",
      response: {},
    },
    {
      name: "has status",
      result: "mock-default-value",
      response: { statusCode: HttpStatusCode.Ok },
    },
    {
      name: "has status no content",
      result: "mock-default-value",
      response: { statusCode: HttpStatusCode.NoContent },
    },
    {
      name: "has status and response",
      result: "mock-response-value",
      response: { body: "mock-response-value", statusCode: HttpStatusCode.Ok },
    },
  ];

  test.each(responseCases)(
    "Http Response Mapper when $name",
    ({ response, result }) => {
      const httpResponse = new HttpResponseMapper(
        response,
        "mock-default-value",
      );

      expect(httpResponse.body).toBe(result);
    },
  );

  const throwErrorCases: {
    name: string;
    statusCode: HttpStatusCode;
    result: string;
  }[] = [
    {
      name: "Forbidden",
      statusCode: HttpStatusCode.Forbidden,
      result: "Access denied!",
    },
    {
      name: "Unexpected",
      statusCode: HttpStatusCode.InternalServerError,
      result: "Oops, Somethin went wrong, please try again later!",
    },
  ];
  test.each(throwErrorCases)(
    "Http Response Mapper when statusCode is $name",
    ({ statusCode, result }) => {
      expect(() => {
        new HttpResponseMapper({ statusCode });
      }).toThrow(result);
    },
  );
});
