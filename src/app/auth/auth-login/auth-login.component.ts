import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { InformacionService } from 'src/app/services/informacion.service';
import { TokenService } from 'src/app/services/token.service';
// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  @Input() dataEntrante:any;
  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private informacion: InformacionService
    // private toastr:ToastrService
  ) { }

  ngOnInit() {
   
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
      this.dataEntrante = this.nombreUsuario;
      this.informacion.disparador.emit({
        data:this.dataEntrante
      })
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        // this.toastr.success('Bienvenido ' + data.nombreUsuario, 'OK', {
        //   timeOut: 3000, positionClass: 'toast-top-center'
        // });
        this.router.navigate(['/']);
      },
      err => {
        this.isLogged = false;
        this.errMsj = err.error.message;
        // this.toastr.error(this.errMsj, 'Fail', {
        //   timeOut: 3000,  positionClass: 'toast-top-center',
        // });
        // console.log(err.error.message);
      }
    );
  }

}
