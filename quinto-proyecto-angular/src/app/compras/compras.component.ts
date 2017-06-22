import { Component, OnInit } from "@angular/core";
import { ComprasService } from "./compras.service";
import { Compra } from "./compra";

@Component({
  selector: 'compras-component',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})

export class ComprasComponent {
  compras: Compra[];
  constructor(private comprasService: ComprasService){

  }

  ngOnInit(){
    this.getCompras();
  }

  getCompras():void{
    this.comprasService.getCompras().then((comprasList) => {
      this.compras =  comprasList;
    })
  }
  
}