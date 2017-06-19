import { Component, Output } from '@angular/core';

@Component({
    selector: 'lista-component',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.css']
})



export class ListaComponent {
    @Output() id:number;
    @Output() persona:Persona;

    nombres: Array<string> = ['Alfredo', 'Manuel', 'José', 'Pedro'];
    colors = ["blue", "blue", "blue", "blue"];
    
    saludar() {
        console.log("Hola Consola");
    }

    alerta(indice: number) {
        alert('Seleccionaste ' + this.nombres[indice]);
    }

    constructor(){
        this.persona = new Persona();
        this.id=35;
    }
}

export class Persona {
    Nombre:string;
    Edad: number;

    constructor(){
        this.Nombre = "Alfredo";
        this.Edad = 29;
    }

}