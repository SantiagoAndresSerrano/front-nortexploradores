import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaqueteService } from 'src/app/services/paquete.service';
import { PersonaService } from 'src/app/services/persona.service';
import { TipoidService } from 'src/app/services/tipoid.service';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-form-pagos',
  templateUrl: './form-pagos.component.html',
})
export class FormPagosComponent implements OnInit {
  pagosInfo! : FormGroup;
  public paquetes:any = [];
  public total = 0;
  public pasajerosFrec: any=[];
  public tipoId :any= [];
  public pasajerosFrecElegidos : any = [];
  public idPaquete:any;

  public usuario:any;
  public isLogged!:boolean;
  public pagosForm!: FormGroup;
  
  public nombreUser!:string;

  constructor(
    private paqueteService:PaqueteService,
    private usuarioService:UsuarioService,
    private tipoIdService:TipoidService,
    private personaService: PersonaService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private tokenS: TokenService,
    private formBuilder : FormBuilder
    ){}

  ngOnInit(): void {
    this.nombreUser = this.tokenS.getUserName();
    this.cargarUsuario();
    this.agregarPaquetes();
    this.cargarToken();
    this.pagosInfo = this.formBuilder.group({
      paquete : [],
      total : [],
      pasajeros : this.formBuilder.array([])
    })
    this.tipoIdService.getTipoId().subscribe(ids=>{
      this.tipoId = ids
    })
    this.idPaquete = this.route.snapshot.paramMap.get("idPaq");


    if(this.idPaquete ==null) this.idPaquete="paq-1";


  }

  get pasajerosDeGrupos () {
    return this.pagosInfo.get('pasajeros') as FormArray
  }

  agregarPasajero(tipoid = "", documento = "", nombre="", apellido="", sexo="", fechaNac="", celular="",correo=""){
    this.total++;
    let pasajeros = this.pagosInfo.get('pasajeros') as FormArray;
    
    pasajeros.push(this.formBuilder.group({
      idTipo : [tipoid, [Validators.required]],
      idPersona : [documento, [Validators.required]],
      nombre : [nombre, [Validators.required]],
      apellido : [apellido, [Validators.required]],
      sexo : [sexo, [Validators.required]],
      fechaNac : [fechaNac, [Validators.required]],
      cel : [celular, [Validators.required]],
      correo : [correo, [Validators.required]],
    }));
  }

  eliminarPasajero(i:number){
    let pasajeros = this.pagosInfo.get('pasajeros') as FormArray;
    this.total--;
    pasajeros.removeAt(i);
  }

  createpagosInfo(){
    console.log('data is ', this.pagosInfo.value.pasajeros);

    let pasajeros = this.pagosInfo.value.pasajeros;

    //Falta agregar estos pasajeros y hacer una peticion al backend de compra, toca calcular el precio total dependiendo si es niño y tales, tambien recordar la relacion muchos a muchos con compra, 

    // Revisar bien los atributos que voy a mandar.

    this.pagosInfo.markAllAsTouched();
  }

  cargarUsuario(){
    this.usuarioService.usuarioPorUsername(this.nombreUser).subscribe(usuario=>{
      this.usuario=usuario;
      this.agregarPasajerosFrec();
    })
  }

  public cargarToken(){
    if (this.tokenS.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    } 
  }

  public agregarPaquetes(){
    this.paqueteService.listar().subscribe(paquetes=>{
      this.paquetes = paquetes; 
    })
  }

  public agregarPasajerosFrec(){
    this.usuarioService.clientesPorUsuario(this.usuario.id_Usuario).subscribe(pasajeros=>{
      this.pasajerosFrec = pasajeros; 
    })
  }

  public actualizarPasajeros(event:any){ //metodo para agregar un pasajero o eliminarlo si se vuelve a seleccionar
    let pasajeros = this.pagosInfo.get('pasajeros') as FormArray;
    
    console.log(pasajeros.value);
    let cedula = event.target.value;
    let yaResgistrado = false;
    let posEliminar = -1 //posicion del pasajero que se encontro y se va a eliminar.
    for (let i = 0; i < pasajeros.length; i++) {
      if(pasajeros.at(i).value.documento == cedula ){
        yaResgistrado = true;
        posEliminar = i; // la posicion que eliminare del form builder
        break;
      }
    }
    
    if(yaResgistrado){
      pasajeros.removeAt(posEliminar);
      this.total--;
    }else{
      //busco a la persona y cargo sus datos en el form.
      this.total++;
      this.personaService.getPersona(cedula).subscribe(persona=>{
        console.log(persona);
        pasajeros = this.pagosInfo.get('pasajeros') as FormArray;
        
        pasajeros.push(this.formBuilder.group({
          idTipo : [persona.idTipo.idTipo, [Validators.required]],
          idPersona : [persona.idPersona, [Validators.required]],
          nombre : [persona.nombre, [Validators.required]],
          apellido : [persona.apellido, [Validators.required]],
          sexo : [persona.sexo, [Validators.required]],
          fechaNac : [persona.fechaNac, [Validators.required]],
          cel : [persona.cel, [Validators.required]],
          correo : [persona.correo, [Validators.required]],
        }));
      })
    }
    console.log(pasajeros.value);
  }

}

