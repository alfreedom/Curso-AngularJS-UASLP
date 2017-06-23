import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grados'
})
export class GradosPipe implements PipeTransform {

  transform(value: any, args?: any): any {

 
    if (value) {
      return (value * 9 / 5) + 32;
    }
    return null;
  }

}
