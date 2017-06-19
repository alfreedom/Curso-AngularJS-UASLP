import { Component } from '@angular/core';

@Component({
    selector: 'lista-component',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.css']
})

export class ListaComponent {
    nombres: Array<string> = ["Alfredo", "Manuel", "Jose", "Pedro"];
}