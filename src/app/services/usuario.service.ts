import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = "https://nortexploradores.herokuapp.com/usuario";
  constructor(private http: HttpClient) { }

  public usuarioPorId(idUsuario:number):Observable<any>{
    return this.http.get<any>(`${this.url}/${idUsuario}`);
  }

  public paquetesPorUsuario(idUsuario:number):Observable<any>{
    return this.http.get<any>(`${this.url}/${idUsuario}/paquetesComprados`)
  }

  public reservasPorUsuario(idUsuario:number):Observable<any>{
    return this.http.get<any>(`${this.url}/${idUsuario}/reservas`)
  }

  public clientesPorUsuario(idUsuario:number):Observable<any>{
    return this.http.get<any>(`${this.url}/${idUsuario}/pasajeros`);
  }
}
