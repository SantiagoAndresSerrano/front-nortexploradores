import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPagosComponent } from './forms/form-pagos/form-pagos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListarPaquetesComponent } from './listar-paquetes/listar-paquetes.component';
import { PaqueteComponent } from './paquete/paquete.component';
import { PayuComponent } from './payu/payu/payu.component';
import { ReservasComponent } from './reservas/reservas.component';

const routes: Routes = [
  {path: 'paquetes',component: PaqueteComponent},
  {path: 'inicio', component: InicioComponent },
  {path: 'pagos/:idPaq',component: FormPagosComponent},
  {path: 'pagos',component: FormPagosComponent},
  {path: '',component: InicioComponent},
  {path: 'misPaquetes',component: ListarPaquetesComponent},
  {path:'reservas',component:ReservasComponent},
  {path:'payu',component:PayuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
