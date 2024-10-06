import { createAction, props } from "@ngrx/store";
import { IUserDto } from "../interfaces/api/dtos/IUserDto";



export const loginAction = createAction(
  '[Auth] Login',
  props<{ token: string, user: IUserDto }>()
);

export const logoutAction = createAction('[Auth] Logout');
