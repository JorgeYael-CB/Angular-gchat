import { IUserDto } from "../dtos/IUserDto";
import { IResponseSucces } from "../IResponseSucces";


export interface IRegisterUser extends IResponseSucces<IUserDto> {}
