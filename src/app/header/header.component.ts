import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public usuarioLogin: any = [];
  public idUsuario = 116;
  constructor(
    private usuarioSer: UsuarioService
  ) {}

  ngOnInit(): void {
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
