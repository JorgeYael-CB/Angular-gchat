import { createReducer, on } from "@ngrx/store";
import { IAuthState } from "../interfaces/store/Auth.state";
import { loginAction, logoutAction } from "./AuthStore.actions";



const initialValue: IAuthState = {
  isLogged: false,
};



export const AuthReducer = createReducer(
  initialValue,
  on(loginAction, (state, {token, user}) => ({
    ...state,
    isLogged: true,
    token,
    user,
  })),
  on( logoutAction, (state) => ({
    ...state,
    isLogged: false,
    token: undefined,
    user: undefined
  }))
);
