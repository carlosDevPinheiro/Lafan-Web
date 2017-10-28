import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lafanPhone'
})
export class LafanPhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value) {
      value = value.toString();
      if (value.length == 10) {
        // fixo
        value = value.concat(
          '(', value.substring(0, 2), ')', value.substr(3, 5), '-', value.substring(value.length - 4));
        value = value.slice(10);
        value = value.replace(')', ') ');
        return value;
      } else if (value.length == 11) {
        // celular
        value = value.concat(
          '(', value.substring(0, 2), ')', value.substr(2, 5), '-', value.substring(value.length - 4));
        value = value.slice(11);
        value = value.replace(')', ') ');
        return value;
      }
    }
    return null;
  }

} 
