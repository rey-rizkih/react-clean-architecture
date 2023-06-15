import type { HttpClient } from "main/infrastructures/protocol/HttpClient";

class HttpClientRepository {
  constructor(readonly baseURL: string, readonly httpClient: HttpClient) {}
}

export default HttpClientRepository;
