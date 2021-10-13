import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  uri="http://localhost:8080/transaccion";

  constructor(private http: HttpClient) { }

  public listarTransacciones():Observable<any>{
    return this.http.get<any>(this.uri);

  }
}
