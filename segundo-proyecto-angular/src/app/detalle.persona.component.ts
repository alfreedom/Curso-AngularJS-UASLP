import { Component, Input } from "@angular/core";
import { Persona } from "./persona";

@Component({
    selector: 'detalle-component',
    templateUrl: 'detalle.persona.component.html',
    styleUrls: ["./estilos.css"]
})

export class DetalleComponent {
    @Input() persona:Persona;
}