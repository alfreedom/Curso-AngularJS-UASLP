import { Directive } from "@angular/core";
import { Input } from "@angular/core";
import { HostListener } from "@angular/core";
import { ElementRef } from "@angular/core";

@Directive({
  selector: '[remarca]'
})

export class RemarcaDirective{
  // @Input NOMBRE = selector    ALIAS: TIPO
  @Input('remarca') color:string;
  is_selected:boolean = false;
  constructor(private er: ElementRef){}

  @HostListener('mouseenter') onmouseenter(){
    this.er.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') onmouseleave() {
    
    if(!this.is_selected)
      this.er.nativeElement.style.backgroundColor = null;
  }

  @HostListener('click') onclick(){
    this.is_selected = !this.is_selected;
  }

  private remarcar(color:string) {
  }

}