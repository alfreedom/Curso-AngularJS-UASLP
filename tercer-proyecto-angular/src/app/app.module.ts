import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaComponent } from './producto/lista.component';
import { CarritoComponent } from './carrito/carrito.component';

import { ProductoService } from "./producto/producto.service";

@NgModule({
  declarations: [
    ListaComponent,
    CarritoComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductoService],
  bootstrap: [ListaComponent]
})
export class AppModule { }
