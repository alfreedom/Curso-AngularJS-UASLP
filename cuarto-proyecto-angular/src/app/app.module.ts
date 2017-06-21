import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from "./formulario/formulario.component";

import { RemarcaDirective } from "./remarcado.directive";

@NgModule({
  declarations: [
    FormComponent,
    AppComponent,
    RemarcaDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [FormComponent]
})

export class AppModule { }
