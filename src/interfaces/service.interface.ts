export interface Service<T> {
  getAll: () => Promise<T[]>
  create: (data: Partial<T>) => Promise<T>
}
