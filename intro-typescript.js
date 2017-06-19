var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var numero = 10;
var nombre = "Hola";
var arreglo = ['Hola', 'Mundo'];
function saludo(nombre) {
    return 10;
}
var Empleado = (function () {
    function Empleado(nombre, edad) {
        this.Nombre = nombre;
        this.Edad = edad;
    }
    return Empleado;
}());
var Persona = (function (_super) {
    __extends(Persona, _super);
    function Persona() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Persona.prototype.registro = function () {
    };
    return Persona;
}(Empleado));
var empleado = new Empleado("Alfredo", 29);
var i = 0;
for (var i_1 = 0; i_1 < 5; i_1++) {
    // Code here
}
//console.log(i);
var numeros = ["Uno", "Dos", "Tres", "Cuatro"];
numeros.forEach(function (e, i) {
});
var suma = function (a, b) { return a + b; };
var salute = function () { console.log("Hola"); };
console.log(suma(10, 5));
salute();
