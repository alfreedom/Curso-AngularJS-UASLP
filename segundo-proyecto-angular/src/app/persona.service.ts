import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Personas } from './personasDB';

@Injectable()
export class PersonaService {
  
  getPersonas():Promise <Persona[]> {
    return Promise.resolve(Personas);
  }

}