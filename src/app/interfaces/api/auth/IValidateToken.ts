import { IUserDto } from "../dtos/IUserDto";
import { IResponseSucces } from "../IResponseSucces";

export interface IValidateToken extends IResponseSucces<IUserDto> {}
