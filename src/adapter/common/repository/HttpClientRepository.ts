import type { IHttpClient } from "@infrastructures/protocols/HttpClient";

class HttpClientRepository {
  constructor(readonly baseURL: string, readonly httpClient: IHttpClient) {}
}

export default HttpClientRepository;
