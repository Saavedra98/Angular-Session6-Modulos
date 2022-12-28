import { NosotrosModule } from './nosotros/nosotros.module';
import { InicioModule } from './inicio/inicio.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuariosModule,
    InicioModule,
    NosotrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
