import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class InformacionService {
@Output() disparador: EventEmitter<any>= new EventEmitter();
  public nombreUsuario!:string;

  constructor() {

  }

  public setNombreUsuario(nombre:string):void{
    this.nombreUsuario = nombre;
  }
}
