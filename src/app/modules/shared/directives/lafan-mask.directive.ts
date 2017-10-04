import { Directive, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[lafanMask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,  /* danda esse caracteristica de valuAcessor  */
    useExisting: LafanMaskDirective,  /* a diretiva em si */
    multi: true  /* config padrão */
  }]
})
export class LafanMaskDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;  // atributo 

  // 999.999.999-99
  @Input('lafanMask') lafanMask: string

  constructor() { }

  /*
     assosiando o metodo onKeyup ao @HostiListiner quem vai icar escutando a mudanças e chmando o evento a qual foi declarado
     keyup => evento quando e acionada um tecla
     event => contem inomções do elemento que disparou o evento no casso a tecla pressionada 
     ControlValueAccessor => para ter acesso ao [(ngModel)] ao metodo onChange com ele podemos 
      alterar o ngModel mas precisamos do provider ‘NG_VALUE_ACCESSOR’ para que o codigo funcione
  */
  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {

    // o que NÃO for digitos 0 - 9
    var valor = $event.target.value.replace(/\D/g, '');

    // o que nao for digito 0-9 coloque espaço e substitua po underscore
    var pad = this.lafanMask.replace(/\D/g, '').replace(/9/g, '_');
    
    var valorMask = valor + pad.substring(0, pad.length - valor.length);
 
    // retorna caso pressionado backspace
    if ($event.keyCode === 8) {
      this.onChange(valor);
      return;
    }
 
    if (valor.length <= pad.length) {
      this.onChange(valor);
    }
 
    var valorMaskPos = 0;
    valor = '';
    for (var i = 0; i < this.lafanMask.length; i++) {
      if (isNaN(parseInt(this.lafanMask.charAt(i)))) {
        valor += this.lafanMask.charAt(i);
      } else {
        valor += valorMask[valorMaskPos++];
      }
    }
    
    if (valor.indexOf('_') > -1) {
      valor = valor.substr(0, valor.indexOf('_'));
    }
 
    $event.target.value = valor;
  }

  @HostListener('blur', ['$event'])
  onblur($event: any) {
    if ($event.target.value.length === this.lafanMask.length) {
      return;
    }
    this.onChange('');
    $event.target.value = '';
  }

  // metodos deve ser implementado interface ControlValueAccessor
  writeValue(value: any): void {

  }

  // recebe uma função
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

}

/*
    CPF: <input type="text" lafanMask="999.999.999-99">
    CNPJ: <input type="text" lafanMask="99.999.999/9999-99">
    CEP: <input type="text" lafanMask="99999-999">
*/