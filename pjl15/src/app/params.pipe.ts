import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'params'
})
export class ParamsPipe implements PipeTransform {

  transform(value: number, a1:number, a2:number,a3:number): number {
    return value*(a1+a2+a3);
  }

}
