import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  userId:string;
  selectedValue:boolean = false;
  
  constructor() { }

  ngOnInit() {
     this.loadUser();    
  }

  loadUser(){
    let user = JSON.parse(localStorage.getItem('lafan.user'));
    if(!user){return; }
    this.userId = user.id
  }

  teste(){
    console.log(this.selectedValue);
  }

  getAddress(event){
    console.log(event);
  }

}
