import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lafanPhone'
})
export class LafanPhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(value){
      value = value.toString();
      if(value.length === 11){
       var temp:string =  value.concat('(',value.substring(0,2),') ');
       temp += temp.substr(2,5).concat('-') + temp.substr(7,10);
       var result = temp.substring(11,25);
         console.log(result);
         
         return result;
      }
    }    
    return null;
  }

}
