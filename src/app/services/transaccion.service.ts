import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as global from 'global'

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  uri=`${global.url}/transaccion/`;

  constructor(private http: HttpClient) { }

  public listarTransacciones():Observable<any>{
    return this.http.get<any>(this.uri);

  }
}
