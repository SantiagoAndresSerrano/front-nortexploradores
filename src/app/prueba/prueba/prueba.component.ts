import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
})
export class PruebaComponent implements OnInit {

  empresas:any= [];

  constructor(private empresaService:EmpresaService) { }

  ngOnInit(): void {
    this.cargarEmpresas();
  }

  public cargarEmpresas(){
    this.empresaService.listarEmpresa().subscribe(empresas=>{
      this.empresas=empresas;
    })
  }

}
