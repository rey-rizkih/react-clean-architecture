import axios, { AxiosError, AxiosResponse } from "axios";

import type {
  HttpResponse,
  IHttpClient,
  IHttpRequest,
} from "@infrastructures/protocols/HttpClient";

class AxiosHttpClient implements IHttpClient {
  private readonly controller = new AbortController();

  async request(option: IHttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        ...option,
        signal: this.controller?.signal,
      });
    } catch (error) {
      const err = error as AxiosError;

      axiosResponse = err?.response!;
    }

    return {
      statusCode: axiosResponse?.status,
      body: axiosResponse?.data,
    };
  }

  destroy(reason?: string): void {
    this.controller?.abort(reason);
  }
}

export default AxiosHttpClient;
