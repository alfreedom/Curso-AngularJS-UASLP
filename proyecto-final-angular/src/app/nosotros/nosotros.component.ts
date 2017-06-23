import { Component, OnInit } from '@angular/core';
import { EmpleadoComponent } from "../empleado/empleado.component";2
import { Router } from "@angular/router";
import { Empleado } from "../empleado/empleado";
import { EmpleadoService } from "../empleado/empleado.service";

@Component({
  selector: 'nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})

export class NosotrosComponent implements OnInit {
  Message:string = "Nosotros Works";
  empleados:Empleado[];

  constructor(private empleadoService: EmpleadoService,
              private route:Router) { }

  ngOnInit() {
    this.empleadoService.getEmpleadoList().then((respuesta) => {
      this.empleados=respuesta;
    });
  }

  clickEmpleado(id:number){
    this.route.navigate(["empleado", id]);
  }

}
