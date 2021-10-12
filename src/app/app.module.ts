import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// Componentes
import { PayuComponent } from './payu/payu/payu.component';
import { PaqueteComponent } from './paquete/paquete.component';
import { FormPagosComponent } from './forms/form-pagos/form-pagos.component';
import { FooterComponent } from './home/footer/footer.component';
import { RegistroComponent } from './forms/registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';

import { LoginComponent } from './forms/login/login.component';
import { AppComponent } from './app.component';
// Servicios
import { PaqueteService } from './services/paquete/paquete.service';
import { UsuarioService } from './services/usuario/usuario.service';
import { PersonaService } from './services/persona/persona.service';
import { TransaccionService } from './services/transaccion/transaccion.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ListarPaquetesComponent } from './listar-paquetes/listar-paquetes.component';
import { ReservasComponent } from './reservas/reservas.component';



@NgModule({
  declarations: [
    AppComponent, 
    PayuComponent, 
    PaqueteComponent,
    FormPagosComponent,
    LoginComponent,
    FooterComponent,
    RegistroComponent,
    InicioComponent,
    HeaderComponent,
    ListarPaquetesComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FormPagosComponent,
    PaqueteService,
    UsuarioService,
    PersonaService,
    TransaccionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
