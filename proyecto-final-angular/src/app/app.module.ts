import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { myRoutes } from "./app.routing";

import { AppComponent } from './app.component';
import { InicioComponent } from "./inicio/inicio.component";
import { NosotrosComponent } from "./nosotros/nosotros.component";
import { ProductosComponent } from "./productos/productos.component";
import { EmpleadoComponent } from './empleado/empleado.component';

import { EmpleadoService } from "./empleado/empleado.service";
import { ContactoComponent } from './contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    ProductosComponent,
    AppComponent,
    EmpleadoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes,
    ReactiveFormsModule
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
