import { Component } from "@angular/core";

@Component({
  selector: 'formulario-component',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormComponent {
  correos:Array<string> = new Array<string>();
  correo:string="";
  clase:string="";
  unSelectClass:string="";
  selectClass:string="";
  color:string="orange";

  enviar():void{

    if(this.correo === "") {
      alert("Correo vacío");
      return;
    }

    this.correos.push(this.correo);
    this.correo="";
    
      
  }

  select():void{
    this.unSelectClass="selected";
  }

  getStyle(){
    let styles = {
      "background-color": "#cfdbdc",
      "color": "#000"
    }
    return styles;

  }
  getClass(){
    let clases = {
      unSelected: this.unSelectClass ? "selected":"unSelected",
      selected: this.selectClass
    };

    return clases;
  }
  

}

