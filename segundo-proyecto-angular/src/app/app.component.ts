import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  nombres: Array<string> = ["Alfredo", "José", "Pedor", "Arnold"];
  title = 'Hola Mundo';
}

