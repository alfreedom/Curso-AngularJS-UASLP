
import { Component, OnInit } from "@angular/core";
import { Persona } from "./persona";
import { PersonaService } from "./personas.service";

@Component({
  selector: "personas-component",
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PersonaComponent {
  personas: Persona[];
  selectedPerson: Persona;

  constructor(private perService: PersonaService ){
    this.personas =  new Array<Persona>();
  }

  ngOnInit(){
    this.getPersonas();
  }

  getPersonas():void{

    this.perService.getPersonas().then((personasList) => {
      this.personas = personasList;
    });
  }


}