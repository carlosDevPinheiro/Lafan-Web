import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { FormGroup } from '@angular/forms';


import { Address } from './address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  
  public _address: Address = new Address();
  @Output('address') addressVaue = new EventEmitter();
  
  constructor(private _service: Http) { }

  ngOnInit() {
  }

  exportAddress(){   
    this.addressVaue.emit(this._address);
  }

  getAddress(){
   
    let cep = this._address.cep;    
      return this._service.get(`https://viacep.com.br/ws/${cep}/json/`)
        .toPromise()
        .then( response => {
          //console.log(response.json());
          let temp:any = response.json();
          this._address.cep = temp.cep;
          this._address.street = temp.logradouro;
          this._address.complement = temp.complemento;
          this._address.district = temp.bairro;
          this._address.city = temp.localidade;
          this._address.state = temp.uf;
        }).catch( error => {
          console.log(error);
        });
      }
        
}
