

export interface IFieldError {
  field: string;
  message: string;
}

export interface IResponseError {
  err: string | IFieldError[];
}

export interface IResponse<T> {
  status: number;
  date: number;
  data: T;
  token?: string;
}
