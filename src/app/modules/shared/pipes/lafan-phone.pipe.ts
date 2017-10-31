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
        var result = value.concat(
          '(', value.substring(0, 2), ')', value.substr(3, 5), '-', value.substring(value.length - 4));
        result = result.slice(10);
        result = result.replace(')', ') ');

        console.log(result);
        return result;

      } else if (value.length == 11) {
        // celular
        var result = value.concat(
          '(', value.substring(0, 2), ')', value.substr(2, 5), '-', value.substring(value.length - 4));
        result = result.slice(11);
        result = result.replace(')', ') ')
        
        return result;
      }
    }
    return value;
  }

} 
