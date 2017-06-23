import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})

export class ContactoComponent implements OnInit {

  formulario:FormGroup;
  text:string;
  constructor(private route:Router) { 

    this.formulario =  new FormGroup({
      nombre: new FormControl('', [
          Validators.required
      ]),
    
      email: new FormControl('', [
        Validators.required
      ])

    });
  }

  ngOnInit() {
  }

  enviarForm(form: FormGroup) {
    let nombre:string = form.controls['nombre'].value;
    let email:string = form.controls['email'].value;
    this.text = nombre + " - " +email;
  }

}
