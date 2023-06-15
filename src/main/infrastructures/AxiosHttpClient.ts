import axios, { AxiosError, AxiosResponse } from "axios";

import type {
  HttpResponse,
  HttpClient,
  HttpRequest,
} from "main/infrastructures/protocol/HttpClient";

class AxiosHttpClient implements HttpClient {
  async request(option: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        ...option,
        data: option?.data,
      });
    } catch (error) {
      const err = error as AxiosError;

      axiosResponse = err?.response!;
    }

    return {
      statusCode: axiosResponse?.status,
      data: axiosResponse?.data,
    };
  }
}

export default AxiosHttpClient;
