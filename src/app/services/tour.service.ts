import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as global from 'global'

@Injectable({
  providedIn: 'root'
})
export class TourService {

  uri =`${global.url}/tour/`;
  constructor(private http: HttpClient) { }

  public listarTour():Observable<any>{
    return this.http.get<any>(this.uri)
  }

  public listarTourActivo():Observable<any>{
   return this.http.get<any>(this.uri+"activos")
  }

  public encontrarTour(idTour:any):Observable<any>{
    return this.http.get<any>(this.uri+idTour)
  }

  public post(tour:any):Observable<any>{
    return this.http.post<any>(this.uri, tour)
  }
}