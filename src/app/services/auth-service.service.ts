import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private url: string = 'http://localhost:8080/api/auth';

  constructor(){}


  public registerUser(){}

  public loginUser(){}

  public updateUser(){}

  public getUserByParams(){}

  public validateToken(){}

  public verifyAccount(){}

  public verifyCodeAuth(){}

  public updatePasswordOrEmail(){}

  public delete(){}


}
