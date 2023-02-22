import type { HttpStatusCode } from "axios";

export type IHttpRequest = {
  url: string;
  method: IHttpMethod;
  body?: any;
  headers?: any;
};

export interface IHttpClient<R = any> {
  request: (options: IHttpRequest) => Promise<HttpResponse<R>>;
  destroy: (reason?: string) => void;
}

export type IHttpMethod = "post" | "get" | "put" | "delete";

export type HttpResponse<T = any> = {
  statusCode?: HttpStatusCode;
  body?: T;
};
