import { Component, OnInit, Output } from '@angular/core';

import { Persona } from './persona';
import { PersonaService } from './persona.service';

import { Usuario } from "./usuario";
import { UsuarioService } from "./usuario.service";

@Component({
  selector: 'lista-component',
  templateUrl: './lista.component.html',
  styleUrls:  ['./lista.component.css'],
})

export class ListaComponent {
  @Output() per:Persona;
  personas:Persona[];
  users:Usuario[];
  persona:Persona;

  constructor(private personaServicio:PersonaService,
              private usuarioServicio:UsuarioService){
  }

  onSelectPersona(per:Persona):void{
    this.per = per;
  }
  
  getPersonas():void {
     this.personaServicio.getPersonas().then((personas)=>{
        this.personas=personas;
     });
  }

  getUsuarios(): void {
    this.usuarioServicio.getUsuarios().then( (usuarios) =>{
        this.users = usuarios;
    });
  }

  ngOnInit(): void{
    this.getPersonas();
    this.getUsuarios();
  }
}