export interface IPaginationRequest<T> {
  page: number;
  pageSize: number;
  filters: Partial<T>;
}

export interface IPaginationResponse<T> {
  page: number;
  pageSize: number;
  data: T[];
  quantity: number;
}
