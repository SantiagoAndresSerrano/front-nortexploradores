import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-listar-paquetes',
  templateUrl: './listar-paquetes.component.html',
})
export class ListarPaquetesComponent implements OnInit {
  compras: any = [];
  idUsuario!:number;
  username!:string;
  constructor(
    private usuario: UsuarioService,
    private token: TokenService
    ) {}

  ngOnInit(): void {
    this.username = this.token.getUserName();
    console.log(this.username);
    this.cargarUsuario();
    
  }

  public cargarUsuario(){
    console.log(this.username);
    this.usuario.usuarioPorUsername(this.username).subscribe( usuario=>{
      console.log(usuario);
      this.idUsuario = usuario.id_Usuario;
      this.cargarPaquetes();
    });
  }

  public cargarPaquetes(){
    this.usuario.paquetesPorUsuario(this.idUsuario).subscribe((paquetesComprados) => {
      this.compras = paquetesComprados;
    });
    
  }

}
