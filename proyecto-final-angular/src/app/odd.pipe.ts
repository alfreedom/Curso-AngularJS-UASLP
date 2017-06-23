import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'odd'
})
export class OddPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if (value) {
      if(value.id % 2){
        return value.name;
      }
    }
    return null;
  }

}
