import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css'],
  providers:[UserService]
})
export class CustomerNewComponent implements OnInit {

  userId: string;
  selectedValue: boolean = false;

  public customer = {
    cep: "",
    city: "",
    complement: "",
    district: "",
    number: 0,
    street: "",
    state: "",
    dateBirthday: "",
    document: "",
    gender: false,
    phone: "",
    userId: this.userId
  }
  constructor(private _toastr: ToastrService, private _userService: UserService, private _route: Router) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    let user = JSON.parse(localStorage.getItem('lafan.user'));
    if (!user) { return; }
    this.userId = user.id
  }

  getAddress(event) {
    console.log(event);
    this.customer.cep = event.cep;
    this.customer.street = event.street;
    this.customer.complement = event.complement;
    this.customer.number = event.number;
    this.customer.district = event.district;
    this.customer.city = event.city;
    this.customer.state = event.state;
  }

  submitCstomer() {
    this.customer.userId = this.userId;
   // console.log(this.customer);
    if (this.customer.number < 1 || isNaN(this.customer.number)) {
      this._toastr.error('Favor informe o o endereco ;)', 'Op´s');
      return;
    } else {

       this._userService.postCustomer(this.customer).subscribe((resp:any) => {

        if(resp.success == true){
          this._toastr.success('Sucesso !!','Seu cadastro esta completo');
          this._route.navigate(['/user-details']);
        } else {
          this._toastr.error('Ops','Seu formulario contem erros');
        }         
         console.log(resp);      
       });
    }
  }

  clear() {
   
    this.customer.cep = "";
    this.customer.city = "";
    this.customer.complement = "";
    this.customer.district = "";
    this.customer.number = 0;
    this.customer.street = "";
    this.customer.state = "";
    this.customer.dateBirthday = ""
    this.customer.document = "0";
    this.customer.gender = false;
    this.customer.phone = "";
  };
}


