import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PaqueteService } from '../services/paquete.service';
import { ReservaService } from '../services/reserva.service';
import { TokenService } from '../services/token.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
})
export class ReservasComponent implements OnInit {

  reservas:any = [];
  idUsuario!:number;
  
  constructor(
    private usuario:UsuarioService,
    private token:TokenService
    ){}

  ngOnInit(): void {
    this.cargarUsuario();
    
  }

  public cargarUsuario(){
    let nombreUsuario:string= this.token.getUserName();
    
    this.usuario.usuarioPorUsername(nombreUsuario).subscribe(usuario=>{
      this.idUsuario = usuario.id_Usuario;
      this.cargarReservas();
    })
  }


  public cargarReservas(){
    this.usuario.reservasPorUsuario(this.idUsuario).subscribe(reservas=>{
      this.reservas = reservas;
    })
  }



}


