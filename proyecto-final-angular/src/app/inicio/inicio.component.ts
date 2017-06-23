import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  Message:string = "Inicio Works!"
  temp:number = 35;

  constructor() { }

  ngOnInit() {
  }

  guardaTemp(){
    localStorage.setItem('temperatura', ""+this.temp);
  }

  leeTemp(){
    let temp = localStorage.getItem('temperatura');
    console.log(temp);
    
  }

}
