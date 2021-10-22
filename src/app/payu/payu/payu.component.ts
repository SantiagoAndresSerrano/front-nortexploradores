import { Component, OnInit } from '@angular/core';
import * as crypto from "crypto-js";

@Component({
  selector: 'app-payu',
  templateUrl: './payu.component.html',
  styleUrls: ['./payu.component.css']
})
export class PayuComponent implements OnInit {
  referenciaUnic = this.generarReferencia();
  iva = 0.19;
  moneda = "COP";
  apikey = "jR9INc85abuxxkcn1Xn1hqZe5P";
 
  idCuenta = "957106";
   idMercado = "949518";

  email = "genesisd@gmial.com"
  nombrePersona = "Genesis";
  idUsuario = "116";

  url = `https://nortexploradores.herokuapp.com/pagos/confirmacion`;

  total = 80000;
  
  firmaElectronica = `${this.apikey}~${this.idMercado}~${this.referenciaUnic}~${this.total}~${this.moneda}`;
  firmaElectronicaMD5 = crypto.MD5(this.firmaElectronica).toString();

// test =================================================================
  idCuentaTest = "512321";
  apikeyTest= "4Vj8eK4rloUd272L48hsrarnUA";

  firmaElectronicaTest = `${this.apikeyTest}~508029~${this.referenciaUnic}~${this.total}~${this.moneda}`;
  firmaElectronicaMD5Test = crypto.MD5(this.firmaElectronicaTest).toString();

  constructor() { }

  ngOnInit() {

  }
  
  generarReferencia():string{
    const fecha = new Date();
    return Math.round((Math.random()*25544))+""+Math.round(fecha.getMilliseconds());
  }


  
  

  

}
