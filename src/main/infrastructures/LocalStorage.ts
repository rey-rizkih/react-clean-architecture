import type { Storage } from "main/infrastructures/protocol/Storage";

class LocalStorage implements Storage {
  private storage: any;

  constructor(storage: Window["localStorage"]) {
    this.storage = storage;
  }

  get(name: string): string | null {
    return this.storage.getItem(name);
  }

  getObject<T>(name: string): T | null {
    const value = this.get(name);

    if (value) return JSON.parse(value);

    return null;
  }

  set(name: string, value: string | number | object): void {
    let payload;

    switch (typeof value) {
      case "string":
        payload = value;
        break;
      case "number":
        payload = String(value);
        break;

      default:
        payload = JSON.stringify(value);
        break;
    }

    this.storage.setItem(name, payload);
  }

  remove(name: string): void {
    this.storage.removeItem(name);
  }
}

export default LocalStorage;
