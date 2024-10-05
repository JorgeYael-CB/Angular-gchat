import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterUser } from '../interfaces/api/auth/IRegisterUser';
import { HttpClient } from '@angular/common/http';
import { ILoginUser } from '../interfaces/api/auth/ILoginUser';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private urlBase: string = `http://localhost:8080`;
  private url: string = `${this.urlBase}/api/auth`;

  constructor(private http: HttpClient){}


  public registerUser(body: {email: string, password: string, name: string}): Observable<IRegisterUser>{
    return this.http.post<IRegisterUser>(`${this.url}/reister`, body);
  }

  public loginUser(body: {email: string, password: string}): Observable<ILoginUser>{
    return this.http.post<ILoginUser>(`${this.urlBase}/login`, body);
  }

  public updateUser(){}

  public getUserByParams(){}

  public validateToken(){}

  public verifyAccount(){}

  public verifyCodeAuth(){}

  public updatePasswordOrEmail(){}

  public delete(){}


}
