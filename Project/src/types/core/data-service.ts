export interface IDataService<T> {
  getData(keyword: T): Promise<string>;
}
