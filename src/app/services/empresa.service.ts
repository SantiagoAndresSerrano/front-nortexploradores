import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  uri = "http://localhost:8080/empresa";
  constructor(private http: HttpClient) { }

  public listarEmpresa():Observable<any>{
    return this.http.get<any>(this.uri);
  }
  

}
