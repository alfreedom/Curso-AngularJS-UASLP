import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { Empleado } from "./empleado";
@Injectable()
export class EmpleadoService {
  private url:string = "https://jsonplaceholder.typicode.com/users";
  constructor(private http:Http){}

  getEmpleadoList(): Promise<Empleado[]>{
    return this.http.get(this.url)
    .toPromise()
    .then( response => response.json())
    .catch( this.error);
  }

  getEmpleado(id:number): Promise<Empleado>{
    return this.http.get(this.url+"/"+id)
    .toPromise()
    .then( response => response.json())
    .catch( this.error);
  }

  error(){

  }
}