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
  empleadoSel: Empleado;
  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    
    this.empleadoService.getEmpleadoList().then((respuesta) => {
      this.empleados=respuesta;
    });
  }

  showEmpleado(id:number){
    this.empleadoService.getEmpleado(id).then( respuesta => {
      
      this.empleadoSel = respuesta;
    })
  }

}
