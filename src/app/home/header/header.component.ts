import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from '../../services/usuario.service';
import * as global from 'global'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public usuarioLogin: any;
  public idUsuario!:number;
  public usuario:any;
  public isLogged!:boolean;
  public seleccionado!:string;
  public url_front!:string;
  
  public nombreUser!:string;
  constructor(
    private usuarioSer: UsuarioService,
    private tokenS: TokenService
  ) {}

  ngOnInit(): void {
    this.nombreUser=this.tokenS.getUserName(); 
    this.cargarUsuario();

    this.url_front = global.url_front;
    if (this.tokenS.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    } 
  }

  onLogOut(): void {
    this.tokenS.logOut();
    window.location.reload();
    
  }

  cargarUsuario(){
    this.usuarioSer.usuarioPorUsername(this.nombreUser).subscribe(usuario=>{
      this.usuario=usuario;
    })
  }

  public cambiarSeleccionado(){

  }

  public inicializarUsuario() {
    this.usuarioSer
      .usuarioPorId(this.idUsuario)
      .subscribe((usuario) => {
        this.usuarioLogin = usuario;
        console.log(this.usuarioLogin);
      });
  }
}
