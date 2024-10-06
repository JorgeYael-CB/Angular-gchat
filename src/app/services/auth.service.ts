import { Injectable, signal } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { IRegisterUser } from '../interfaces/api/auth/IRegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILoginUser } from '../interfaces/api/auth/ILoginUser';
import { IUserDto } from '../interfaces/api/dtos/IUserDto';
import {CookieService} from 'ngx-cookie-service';
import { IValidateToken } from '../interfaces/api/auth/IValidateToken';
import { IResponseSucces } from '../interfaces/api/IResponseSucces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlBase: string = `http://localhost:8080`;
  private url: string = `${this.urlBase}/api/auth`;
  private user = signal<IUserDto | undefined>(undefined);
  private token = signal<string | undefined>(undefined);

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
  ){
    this.token.set(cookieService.get('token'));
  }


  public registerUser(body: {email: string, password: string, name: string}): Observable<IRegisterUser>{
    return this.http.post<IRegisterUser>(`${this.url}/register`, body)
      .pipe(
        tap(this.saveData)
      );
  }

  public loginUser(body: {email: string, password: string}): Observable<ILoginUser>{
    return this.http.post<ILoginUser>(`${this.urlBase}/login`, body)
      .pipe(
        tap(this.saveData),
      );
  }

  public get getUser(): IUserDto | undefined{
    if( !this.user() ) return undefined;
    return structuredClone(this.user());
  }

  public checkAuth(): Observable<Boolean>{
    if( !this.token() ) return of(false);
    return this.validateToken()
      .pipe(
        map( data => !!data.data )
      )
  }

  private validateToken(): Observable<IValidateToken>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token()}`
    });

    return this.http.get<IValidateToken>(`${this.url}/validate-token`, {headers})
      .pipe(
        tap(this.saveData),
        tap( data => {
          if( data.data.id !== this.user()?.id ){
            console.log('El usuario no coincide con los datos proporcionados');
            this.logout();
          }
        })
      );
  }

  public updateUser(){}

  public getUserByParams(){}

  public verifyAccount(){}

  public verifyCodeAuth(){}

  public updatePasswordOrEmail(){}

  public delete(){}


  private saveData( data: IResponseSucces<IUserDto> ){
    this.user.set(data.data);
    this.token.set(data.token!);

    if(data.token){
      this.cookieService.set('token', data.token);
    }
  }

  public logout(){
    this.user.set(undefined);
    this.token.set(undefined);
    this.cookieService.delete('token');
  }


}
