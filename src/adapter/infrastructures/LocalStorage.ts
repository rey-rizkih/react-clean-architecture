import type { IStorage } from "@infrastructures/protocols/Storage";

class LocalStorage implements IStorage {
  private storage: any;

  constructor(storage: Window["localStorage"]) {
    this.storage = storage;
  }

  async get(name: string): Promise<string> {
    return await this.storage.getItem(name);
  }

  async set(name: string, value: string): Promise<void> {
    await this.storage.setItem(name, value);
  }

  async remove(name: string): Promise<void> {
    await this.storage.removeItem(name);
  }
}

export default LocalStorage;
