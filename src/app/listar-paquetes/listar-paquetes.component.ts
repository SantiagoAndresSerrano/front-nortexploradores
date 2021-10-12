import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-listar-paquetes',
  templateUrl: './listar-paquetes.component.html',
})
export class ListarPaquetesComponent implements OnInit {
  compras: any = [];
  idUsuario = 116; //el usuario con la sesion iniciada

  constructor(private usuario: UsuarioService) {}

  ngOnInit(): void {
    this.cargarPaquetes();
  }

  public cargarPaquetes(){
    this.usuario.paquetesPorUsuario(this.idUsuario).subscribe((paquetesComprados) => {
      this.compras = paquetesComprados;
    });
    
  }

}
