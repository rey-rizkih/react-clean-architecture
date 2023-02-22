import { HttpStatusCode } from "axios";
import AccessDeniedError from "@common/errors/accessDenied";
import UnexpectedError from "@common/errors/unexpected";

import type { HttpResponse } from "@infrastructures/protocols/HttpClient";

class HttpResponseMapper<R> implements HttpResponse<R> {
  readonly statusCode?: HttpStatusCode;
  readonly body: R | any;

  constructor(response: HttpResponse<R>, defaultValue?: R) {
    this.statusCode = response?.statusCode;

    if (!this.statusCode) {
      this.body = defaultValue;
      return;
    }

    switch (true) {
      case this.statusCode === HttpStatusCode.NoContent:
        this.body = defaultValue;
        return;

      case this.statusCode === HttpStatusCode.Forbidden:
        throw new AccessDeniedError();

      case this.statusCode === HttpStatusCode.Ok:
        this.body = response?.body ?? defaultValue;
        return;

      default:
        throw new UnexpectedError();
    }
  }
}

export default HttpResponseMapper;
