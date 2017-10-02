import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

import { Users } from '../user';
import { Customer } from '../customer';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers:[UserService]
})
export class UserDetailsComponent implements OnInit {

  public user: Users;
  public customer: Customer;
  public showBtnCustomer:boolean = true;
  public showBtnAddress:boolean=false;

  public listAddress = [];
  
    constructor(private serviceUsuario: UserService) { }
    
    ngOnInit() {
      this.getUser();
    }

    getUser() {
      var user = JSON.parse(localStorage.getItem("lafan.user"));
      if (user) {
        this.serviceUsuario.getUser(user.id).subscribe(result => {
          //  console.log(result);
          this.user = new Users();
          this.user.dateChange = result.data.dateofChange;
          this.user.dateRegister = result.data.registrationDate;
          this.user.name = result.data.name;
          this.user.id = result.data.id;
          this.user.email = result.data.email;
          this.user.profile = result.data.profile;
          this.user.profileTxt = result.data.profileTxt;        
        })
      }  
    } 

    getCustomer(){
      var user = JSON.parse(localStorage.getItem("lafan.user"));
      if(user){
        this.serviceUsuario.getCustomer(user.id).subscribe( result => {
         if(result.success){
          this.customer = result.data;
          this.showBtnCustomer = false;
          this.showBtnAddress = true;
         } else {
           console.log(result)
         }                     
        });
      }
    }

    getAddress(){      
     
       this.serviceUsuario.getAddress(this.customer.customerId).subscribe( result => {
         // console.log(result);
          this.listAddress = result.data
          this.showBtnAddress = false
      })
    }
}
