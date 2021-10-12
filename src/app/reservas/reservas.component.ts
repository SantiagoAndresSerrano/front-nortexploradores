import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../services/reserva/reserva.service';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
})
export class ReservasComponent implements OnInit {

  reservas:any = [];
  paquetes:any = [];
  idUsuario=116;

  constructor(
    private usuario:UsuarioService  ) { }

  ngOnInit(): void {
    this.cargarReservas();
  }

  public cargarReservas(){
    this.usuario.reservasPorUsuario(this.idUsuario).subscribe(reservas=>{
      this.reservas = reservas;
      console.log(reservas);
    })
  }




}
