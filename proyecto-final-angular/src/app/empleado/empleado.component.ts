import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Empleado } from "./empleado";
import { EmpleadoService } from "./empleado.service";

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent implements OnInit {

  empleadoSel: Empleado;
  constructor(private route:ActivatedRoute,
              private empleadoService: EmpleadoService) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params['id'];
    this.showEmpleado(id);
  }

  showEmpleado(id:number){
    this.empleadoService.getEmpleado(id).then( respuesta => {
      this.empleadoSel = respuesta;
    });
  }

}
