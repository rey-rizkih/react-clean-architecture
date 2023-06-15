import AccessDeniedError from "@error/accessDenied";
import UnexpectedError from "@error/unexpected";
import { HttpStatusCode } from "axios";

import type { HttpResponse } from "main/infrastructures/protocol/HttpClient";

class HttpResponseMapper<R> implements HttpResponse<R> {
  readonly statusCode?: HttpStatusCode;
  readonly data: R | any;

  constructor(response: HttpResponse<R>, defaultValue?: R) {
    this.statusCode = response?.statusCode;

    if (!this.statusCode) {
      this.data = defaultValue;
      return;
    }

    switch (true) {
      case this.statusCode === HttpStatusCode.Ok ||
        response.statusCode === HttpStatusCode.Created ||
        response.statusCode === HttpStatusCode.Accepted:
        this.data = response?.data ?? defaultValue;
        return;

      case this.statusCode === HttpStatusCode.NoContent:
        this.data = defaultValue;
        return;

      case this.statusCode === HttpStatusCode.Forbidden:
        throw new AccessDeniedError();

      default:
        throw new UnexpectedError();
    }
  }
}

export default HttpResponseMapper;
