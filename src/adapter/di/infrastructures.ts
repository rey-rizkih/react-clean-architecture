import AxiosHttpClient from "@infra/AxiosHttpClient";
import LocalStorage from "@infra/LocalStorage";
import type { HttpClient } from "@infra/protocol/HttpClient";
import type { Storage } from "@infra/protocol/Storage";

export interface Infrastructures {
  http: HttpClient;
  storage: Storage;
}

export const infrastructures = (): Infrastructures => ({
  http: new AxiosHttpClient(),
  storage: new LocalStorage(window.localStorage),
});

export default infrastructures;
