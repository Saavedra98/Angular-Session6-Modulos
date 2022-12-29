import { FormularioComponent } from './contactos/formulario/formulario.component';
import { CampeonatosComponent } from './servicios/campeonatos/campeonatos.component';
import { HistoriaComponent } from './nosotros/historia/historia.component';
import { HomeComponent } from './inicio/home/home.component';
import { ContactosModule } from './contactos/contactos.module';
import { ServiciosModule } from './servicios/servicios.module';
import { NosotrosModule } from './nosotros/nosotros.module';
import { InicioModule } from './inicio/inicio.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes:Routes=[

  {path:'', component:HomeComponent },
  {path:'nosotros', component:HistoriaComponent },
  {path:'servicios', component:CampeonatosComponent },
  {path:'contactos', component:FormularioComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuariosModule,
    InicioModule,
    NosotrosModule,
    ServiciosModule,
    ContactosModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
