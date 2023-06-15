import type { HttpStatusCode } from "axios";

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  data?: any;
  headers?: any;
};

export interface HttpClient<R = any> {
  request: (options: HttpRequest) => Promise<HttpResponse<R>>;
}

export type HttpMethod = "post" | "get" | "put" | "delete";

export type HttpResponse<T = any> = {
  statusCode?: HttpStatusCode;
  data?: T;
};
