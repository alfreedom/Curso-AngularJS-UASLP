import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'productos',
  templateUrl: 'productos.component.html',
  styleUrls: ['productos.component.css']
})
export class ProductosComponent implements OnInit {

  Message:string = "Productos Works!"
  constructor() { }

  ngOnInit() {
  }

}
