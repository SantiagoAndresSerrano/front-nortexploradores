import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  uri="https://nortexploradores.herokuapp.com/paquete";

  constructor(private http: HttpClient) { }

  public listar():Observable<any>{
    return this.http.get<any>(this.uri);
  }
  

}
