import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  Message:string = "Nosotros Works";
  constructor() { }

  ngOnInit() {
  }

}
