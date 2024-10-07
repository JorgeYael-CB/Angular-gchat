import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { IJoinRandomServer } from '../interfaces/api/server/IJoinRandomServer';
import { IServerDto } from '../interfaces/api/dtos/IServerDto';
import { IGetServerById } from '../interfaces/api/server/IGetServerById';


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

  getServerById( id: number ):Observable<IServerDto> {
    let server = this.servers.get(id);
    if( server ){
      console.log('Si viene de memoria');
      return of(server)
    };

    return this.http.get<IGetServerById>(`${this.url}/${id}`)
      .pipe(
        tap( data => this.servers.set(id, data.data)),
        map( data => data.data )
      );
  }

}
