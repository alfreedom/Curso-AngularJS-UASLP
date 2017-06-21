import { Directive } from "@angular/core";
import { Input } from "@angular/core";
import { HostListener } from "@angular/core";
import { ElementRef } from "@angular/core";

@Directive({
  selector: '[remarca]'
})

export class RemarcaDirective{
  // @Input NOMBRE = selector    ALIAS: TIPO
  @Input('remarca') param:string;
  @Input() color:string;

  constructor(private er: ElementRef){}

  @HostListener('mouseenter') onmouseenter(){
    
    this.remarcar(this.param || "red");
 
  }

  @HostListener('mouseleave') onmouseleave() {
    this.remarcar(null);
    
  }

  private remarcar(color:string) {
    this.er.nativeElement.style.backgroundColor = color;
  }

}