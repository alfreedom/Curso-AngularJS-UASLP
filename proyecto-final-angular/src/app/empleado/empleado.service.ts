import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Empleado } from "./empleado";

import 'rxjs/add/operator/toPromise';


@Injectable()
export class EmpleadoService {
  private url:string = "https://jsonplaceholder.typicode.com/users";
  
  constructor(private http:Http){
  }

  getEmpleadoList(): Promise<Empleado[]>{
    return this.http.get(this.url)
    .toPromise()
    .then( response => response.json())
    .catch( this.error);
  }

  getEmpleado(id:number): Promise<Empleado>{
    return this.http.get(this.url+"/"+id)
    .toPromise()
    .then( (response) => {
      return response.json()})
    .catch( this.error);
  }

  error(){
    console.log("Error al obtener datos de empleado");
  }
}