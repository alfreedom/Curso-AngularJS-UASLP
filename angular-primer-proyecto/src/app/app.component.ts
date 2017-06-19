import { Component, Input } from '@angular/core';
import { Persona } from './lista.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  @Input() per:Persona;
  @Input() id:Number;
  title = 'Hello World!';
}
