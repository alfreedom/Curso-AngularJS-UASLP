import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonaComponent } from "./personas/personas.component";
import { ComprasComponent } from "./compras/compras.component";
import { DetalleCompraComponent} from './detalleCompra/detalle.compra.component';

import { PersonaService } from "./personas/personas.service";
import { ComprasService } from "./compras/compras.service";

@NgModule({
  declarations: [
    PersonaComponent,
    ComprasComponent,
    DetalleCompraComponent,
    AppComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  providers: [PersonaService, ComprasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
