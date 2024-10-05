import { IResponse } from "./IResponse";

export interface IFieldError {
  field: string;
  message: string;
}

export type TypeError = string | IFieldError[];

export interface IResponseError extends IResponse {
  err: TypeError;
}
