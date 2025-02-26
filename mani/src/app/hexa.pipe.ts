import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexaaa'
})
export class HexaPipe implements PipeTransform {

  transform(val: number) {
    return val.toString(16);
  }

}
