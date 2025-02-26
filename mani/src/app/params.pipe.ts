import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'params'
})
export class ParamsPipe implements PipeTransform {

  transform(val:any, p1:number, p2:number, p3:number): unknown {
    return val* (p1+p2+p3);
  }

}
