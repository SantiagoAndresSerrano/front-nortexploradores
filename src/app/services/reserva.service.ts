import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  uri = "https://nortexploradores.herokuapp.com/reserva";

  constructor(private http:HttpClient) { }

  public paqueteDeReserva(idReserva:number):Observable<any>{
    return this.http.get<any>(`${this.uri}/${idReserva}/paquetes`);
  }
}