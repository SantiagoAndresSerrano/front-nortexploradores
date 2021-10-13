import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public usuarioLogin: any = [];
  public idUsuario!:number;
  
  public nombreUser!:string;
  constructor(
    private usuarioSer: UsuarioService,
    private tokenS: TokenService
  ) {}

  ngOnInit(): void {

    this.nombreUser=this.tokenS.getUserName();
    this.inicializarUsuario();
    
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
