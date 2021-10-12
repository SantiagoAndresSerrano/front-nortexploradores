import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaqueteService } from 'src/app/services/paquete/paquete.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-form-pagos',
  templateUrl: './form-pagos.component.html',
})
export class FormPagosComponent implements OnInit {


  public idUsuario = 116; // Supuestamente el usuario de la sesion
  public paquetes:any = [];
  public total:number= 5; //Total pasajeros
  public maxPasajeros:number[] = [];
  public pasajerosFrec: any=[];
  public publiclistaPasajeros:any;
  public idPaquete:any;
  
  public totalPasajeros = 0;
  public pagosForm!: FormGroup;
  constructor(
    private paqueteService:PaqueteService,
    private usuarioService:UsuarioService,
    private route: ActivatedRoute,
    private fb: FormBuilder    
    ){}

  ngOnInit(): void {
    this.agregarPaquetes();
    this.cargarTotalPasajeros();
    this.agregarPasajerosFrec();
    this.idPaquete = this.route.snapshot.paramMap.get("idPaq");

    if(this.idPaquete ==null) this.idPaquete="paq-1";

    this.pagosForm = this.fb.group(
      {paquetesControl:this.idPaquete}
    
    );
  }

  public agregarPaquetes(){
    this.paqueteService.listar().subscribe(paquetes=>{
      this.paquetes = paquetes; 
    })
  }

  public agregarPasajerosFrec(){
    this.usuarioService.clientesPorUsuario(this.idUsuario).subscribe(pasajeros=>{
      this.pasajerosFrec = pasajeros; 
    })
  }

  public cargarTotalPasajeros(){
    for (let i = 0; i <= this.total; i++) {
      this.maxPasajeros.push(i)
      
    }
  }

  public eliminarHijos(document:any){
    document?.childNodes.forEach((node: any)=>{
      document?.removeChild(node);
    })
  }

  public agregarPasajero(pasajero:any){
    this.totalPasajeros++;

  }

  public actualizar(total:any){
    
    var totalV:number = +total.target.value
    this.total+=totalV;

    var plantilla = document.createElement("div");
    var doc = document.getElementById("listaPasajeros");
    var child = document.createElement("div");
    this.eliminarHijos(doc);
    

    for (let i = 0; i < totalV; i++) {
      
      child.innerHTML+=
      document.createElement("div")
      .innerHTML=
      `<div class="row pasajero-usuario" id="pasajero">
      <div class="mb-2 row">
          <h4 style="color:red" class="col-sm-2 col-form-label">Pasajero ${i+1}</h4>
      </div>
      
      <div class="mb-2 row">
          <div class="col-sm-2"></div>
          <label class="col-sm-2 col-form-label">Nombre</label>
          <div class="col-sm-5">
              <input type="text" name="" class="form-control" placeholder="Ingresa tu nombre">
          </div>
          <div class="col-sm-3"></div>
      </div>

      <div class="mb-2 row">
          <div class="col-sm-2"></div>
          <label class="col-sm-2 col-form-label">Apellidos</label>
          <div class="col-sm-5">
              <input type="text" class="form-control" placeholder="Ingresa tu nombre">
          </div>
          <div class="col-sm-3"></div>
      </div>

      <div class="mb-2 row">
          <div class="col-sm-2"></div>
          <label class="col-sm-2 col-form-label">Fecha nacimiento</label>
          <div class="col-sm-5">
              <input type="text" class="form-control" placeholder="Ingresa tu fecha">
          </div>
          <div class="col-sm-3"></div>
      </div>

      <div class="mb-2 row">
          <div class="col-sm-2"></div>
          <label class="col-sm-2 col-form-label">Sexo</label>
          <div class="col-sm-5">
              <input type="text" class="form-control" placeholder="Ingresa tu sexo">
          </div>
          <div class="col-sm-3"></div>
      </div>

      <div class="mb-2 row">
          <div class="col-sm-2"></div>
          <label class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-5">
              <input type="email" class="form-control" placeholder="Ingresa tu email">
          </div>
          <div class="col-sm-3"></div>
      </div>

      <div class="mb-2 row">
          <div class="col-sm-2"></div>
          <label class="col-sm-2 col-form-label">Número de telefono</label>
          <div class="col-sm-5">
              <input type="number" class="form-control" placeholder="Ingresa tu numero de telefono">
          </div>
          <div class="col-sm-3"></div>
      </div>

      <div class="mb-2 row">
          <div class="col-sm-2"></div>
          <label class="col-sm-2 col-form-label">Direccion</label>
          <div class="col-sm-5">
              <input type="email" class="form-control" placeholder="Ingresa tu Direccion">
          </div>
          <div class="col-sm-3"></div>
      </div>
      </div>`
      plantilla.appendChild(child); 
    }
    doc?.appendChild(plantilla);
  }

  public agregar():void{
    
  }
}


