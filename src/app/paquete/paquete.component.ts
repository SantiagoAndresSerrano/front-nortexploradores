import { Component, OnInit } from '@angular/core';
import { PaqueteService } from '../services/paquete.service';
import { TourService } from '../services/tour.service';

@Component({
  selector: 'app-paquete',
  templateUrl: './paquete.component.html',
})
export class PaqueteComponent implements OnInit {

  constructor(
    private paqueteService:PaqueteService,
    private tourService:TourService
    ) { }

  paquetes:any =[];
  tours: any= [];

  ngOnInit(): void {
    this.listarPaquetes();
    this.listarTour();
  }


  public listarTour(){
    this.tourService.listarTourActivo().subscribe(tour=>{
      this.tours=tour
    })
  }

  public listarPaquetes(){

    this.paqueteService.listar().subscribe(listaPaquetes=>{
      this.paquetes = listaPaquetes;
    })
  }

}
