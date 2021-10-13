import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  uri="http://localhost:8080/paquete";

  constructor(private http: HttpClient) { }

  public listar():Observable<any>{
    return this.http.get<any>(this.uri);
  }

  public encontrar(id:number):Observable<any>{
    return this.http.get<any>(`${this.uri}/${id}`);
  }
  

}
