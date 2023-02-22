import AxiosHttpClient from "@infrastructures/AxiosHttpClient";
import LocalStorage from "@infrastructures/LocalStorage";

import type { IHttpClient } from "@infrastructures/protocols/HttpClient";
import type { IStorage } from "@infrastructures/protocols/Storage";

export interface IInfrastructures {
  http: IHttpClient;
  storage: IStorage;
}

export const infrastructures = (): IInfrastructures => ({
  http: new AxiosHttpClient(),
  storage: new LocalStorage(window.localStorage),
});

export default infrastructures;
