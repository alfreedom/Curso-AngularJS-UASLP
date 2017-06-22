import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from "./empleado.service";
import { Empleado } from "./empleado";

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent implements OnInit {

  empleados:Empleado[];

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    
    this.empleadoService.getList().then((respuesta) => {

      console.log("Hola " + respuesta.length);
      this.empleados=respuesta;
    });
  }

}
