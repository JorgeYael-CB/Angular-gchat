import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IJoinRandomServer } from '../interfaces/api/server/IJoinRandomServer';
import { IServerDto } from '../interfaces/api/dtos/IServerDto';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private url: string = `http://localhost:8080/api/servers`;
  private servers: Map<number, IServerDto> = new Map<number, IServerDto>();


  constructor(
    private http: HttpClient,
  ){}


  joinRandomServer(): Observable<IJoinRandomServer>{
    return this.http.get<IJoinRandomServer>(`${this.url}/join-random`)
      .pipe(
        tap( data => this.servers.set(data.data.id, data.data))
      );
  }

  getServerById( id: number ){}

}
