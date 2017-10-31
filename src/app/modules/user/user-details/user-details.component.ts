import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

import { Users } from '../user';
import { Customer } from '../customer';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [UserService]
})
export class UserDetailsComponent implements OnInit {

  public user: Users = new Users();
  public customer: Customer;
  public showBtnCustomer: boolean = true;
  public showBtnAddress: boolean = false;
  public listAddress = [];

  constructor(private serviceUsuario: UserService, private toastr: ToastrService, private route: Router) { }

  ngOnInit() {
    this.getUser();    
  }

  getUser() {
    var user = JSON.parse(localStorage.getItem("lafan.user"));
    if (user) {
      var result = this.serviceUsuario.getUser(user.id)
        .then((result: any) => {
          if (result.status == 401) {
            console.log(result.statusText);
            // redirecionar para a tela de login
          } else {
            //console.log(result.data);
            this.user.name = result.data.name;
            this.user.email = result.data.email;
            this.user.dateRegister = result.data.registrationDate;
            this.user.dateChange = result.data.dateofChange;
            this.user.profileTxt = result.data.profileTxt
            this.user.id = result.data.id;           
          }
        })
    }
  }

  getCustomer() {
    // var user = JSON.parse(localStorage.getItem("lafan.user"));

    this.serviceUsuario.getCustomer(this.user.id).subscribe(result => {
      if (result.success) {
        this.customer = result.data;
        this.showBtnCustomer = false;
        this.showBtnAddress = true;
        console.log(result);
      } else {
         console.log(result);         
        this.toastr.error("Nao ha registros de Informações adicionais, 'Op's");
       // this.route.navigate(['/customer-new']);
      }
    });

  }

  getAddress() {
    this.serviceUsuario.getAddress(this.customer.customerId).subscribe(result => {
      // console.log(result);
      this.listAddress = result.data
      this.showBtnAddress = false
    })
  }
}
