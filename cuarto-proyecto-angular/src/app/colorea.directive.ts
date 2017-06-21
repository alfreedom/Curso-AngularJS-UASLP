import { Directive, HostListener, ElementRef, Input } from "@angular/core";

@Directive({
  selector: '[colorea]'
})

export class ColoreaDirective {

  @Input('colorea') color:string;

  constructor(private er: ElementRef){}

  @HostListener('click') onClick(){
    this.er.nativeElement.style.backgroundColor = this.color;
  }


}