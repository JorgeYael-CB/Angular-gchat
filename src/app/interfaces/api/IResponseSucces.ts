import { IResponse } from "./IResponse";


export interface IResponseSucces<T> extends IResponse {
  data: T;
  token?: string;
}
