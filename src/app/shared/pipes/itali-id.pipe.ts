import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'italId'
})
export class ItaliIdPipe implements PipeTransform {

  transform(value: number): any {
    return {
      'font-style': 'italic'
    };
  }
}
