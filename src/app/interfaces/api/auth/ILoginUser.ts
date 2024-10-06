import { IUserDto } from "../dtos/IUserDto";
import { IResponseSucces } from "../IResponseSucces";


export interface ILoginUser extends IResponseSucces<IUserDto> {}
