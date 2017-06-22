import { Component, OnInit } from "@angular/core";
import { Compra } from './compra';
import { ComprasService } from "./compras.service";

@Component({
  selector: 'compras-component',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})

export class ComprasComponent {
  compras:Compra[];

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