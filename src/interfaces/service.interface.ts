export interface Service<T> {
  getAll: () => Promise<T[]>
}
