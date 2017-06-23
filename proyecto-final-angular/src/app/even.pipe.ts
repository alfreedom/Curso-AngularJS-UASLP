import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'even'
})
export class EvenPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      if(value.id % 2 === 0){
        return value.name;
      }
    }
    return null;
  }

}
