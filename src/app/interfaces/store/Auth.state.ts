import { IUserDto } from "../api/dtos/IUserDto";



export interface IAuthState {
  token?: string;
  user?: IUserDto;
  isLogged: boolean;
}
