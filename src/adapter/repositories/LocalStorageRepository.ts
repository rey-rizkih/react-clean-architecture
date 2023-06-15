import type { Storage } from "@infra/protocol/Storage";

class LocalStorageRepository {
  constructor(readonly storage: Storage) {}
}

export default LocalStorageRepository;
