import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Producto } from "../producto/producto";

@Component({
    selector: 'carrito-component',
    templateUrl: 'carrito.component.html'
})

export class CarritoComponent {
    @Input() prodIn: Producto;
    prods:Producto[];

    constructor(){
        this.prods = new Array<Producto>();
    }
    
    ngOnChanges(changes){
        if (this.prodIn) {
            this.prods.push(this.prodIn);
        }
    }

}