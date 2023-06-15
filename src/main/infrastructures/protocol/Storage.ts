export interface Storage {
  get(name: string): string | null;
  getObject<T>(name: string): T | null;
  set(name: string, value: string): void;
  remove(name: string): void;
}
