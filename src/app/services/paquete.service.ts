import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as global from 'global'

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  uri=`${global.url}/paquete/`;

  constructor(private http: HttpClient) { }

  public listar():Observable<any>{
    return this.http.get<any>(this.uri);
  }

  public encontrar(id:number):Observable<any>{
    return this.http.get<any>(`${this.uri}/${id}`);
  }
  

}
