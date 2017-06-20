import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista.component';
import { DetalleComponent } from './detalle.persona.component';

import { PersonaService } from './persona.service';
import { UsuarioService } from './usuario.service';

@NgModule({
  declarations: [
    ListaComponent,
    DetalleComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PersonaService, UsuarioService],
  bootstrap: [ListaComponent]
})


export class AppModule { }
