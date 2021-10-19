import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as global from 'global'

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  uri=`${global.url}/paquete/`;
  constructor(private http: HttpClient) { }

  public listarEmpresa():Observable<any>{
    return this.http.get<any>(this.uri);
  }


}
