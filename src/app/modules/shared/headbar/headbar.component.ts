import { Component, OnInit } from '@angular/core';

import { CartService } from '../../../cart/cart.service';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css']
})
export class HeadbarComponent implements OnInit {

  user: any = { name: "", email: "",id:"" };
  public totalItems:number = 0;

  constructor(private cartService:CartService ) {
    
   // Inscrição no cartChange =  recebe a lista para atualização quando houver mudança "Fica observando"
    this.cartService.cartChange.subscribe((products) => {
     // console.log(products);
      this.totalItems = products.length;
    });

    this.cartService.load();
  }

  ngOnInit() {
    this.getUser();
  }
  

  getUser() {
  var user = JSON.parse(localStorage.getItem('lafan.user'));
  // console.log(user);
  if(user){
    this.user.name = user.name;
    this.user.email = user.email;
    this.user.id = user.id;
  } else {
    console.log("usuario nao encontrado");
  }
    
  }

  logout(){      
      localStorage.removeItem('lafan.user');
      localStorage.removeItem('lafan.token');     
      window.location.reload();
  }

}
