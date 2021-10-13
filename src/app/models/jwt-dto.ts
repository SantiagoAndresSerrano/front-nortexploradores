export class JwtDto {
    token: string;
    type: string;
    nombreUsuario: string;
    authorities: string[];

    constructor(token: string, type: string, password: string,nombreUsuario:string,authorities:string[]) {
       this.authorities = authorities;
       this.nombreUsuario = nombreUsuario;
       this.token=token;
       this.type=type;
    }
}
