import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service';

import { Usuario } from "./usuario";
import { UsuarioService } from "./usuario.service";

@Component({
  selector: 'lista-component',
  templateUrl: './lista.component.html',
  styleUrls:  ['./lista.component.css'],
  providers: [PersonaService, UsuarioService]
})

export class ListaComponent {
  personas:Persona[];
  users:Usuario[];

  constructor(private personaServicio:PersonaService,
              private usuarioServicio:UsuarioService)
  {
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