import { Component, OnInit, Output } from "@angular/core";

import { Producto } from "./producto";
import { ProductoService } from "./producto.service";

@Component({
    selector: 'lista-component',
    templateUrl: 'lista.component.html',
    styleUrls: ['lista.componente.css']
})

export class ListaComponent{
    @Output() prodSel:Producto;
    productos:Producto[];

    constructor(private prodServ:ProductoService){

    }
    
    getProductos(): void {
        this.prodServ.getProductos().then( (prods) => {
            this.productos=prods
        });
    }
    ngOnInit():void {
        this.getProductos();
    }

    onSelectProducto(prod:Producto):void{
        this.prodSel = undefined;
        this.prodSel = prod;
    }
    
}