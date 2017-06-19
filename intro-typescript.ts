
var numero: number = 10
var nombre: string = "Hola";
var arreglo: Array<String> = ['Hola', 'Mundo'];


function saludo(nombre:string): number {
    return 10;
} 

class Empleado {
    Nombre: string;
    Edad: number;
    Genero: string;

    constructor(nombre:string, edad:number) {
        this.Nombre = nombre;
        this.Edad = edad;
    }
}

class Persona extends Empleado{

    registro():void {

    }
}

var empleado: Empleado =  new Empleado("Alfredo", 29);


var i = 0;

for (let i = 0; i < 5; i++) {
    // Code here
}

//console.log(i);

var numeros: Array<string> = ["Uno","Dos","Tres","Cuatro"];

numeros.forEach( (e, i) => {

});

var suma = (a, b) => {return a+b};
var salute = () => {console.log("Hola")};
console.log(suma(10,5));
salute();