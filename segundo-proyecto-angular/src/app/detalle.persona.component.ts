import { Component, Input } from "@angular/core";
import { Persona } from "./persona";

@Component({
    selector: 'detalle-component',
    templateUrl: 'detalle.persona.component.html'
})

export class DetalleComponent {
    @Input() persona:Persona;
}