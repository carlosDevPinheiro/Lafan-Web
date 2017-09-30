import { Component, OnInit } from '@angular/core';

import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products: any[] = []; 
  public descount:number = 0;
  public deliveryFee:number = 0;
  public selectedValue = 8;
  public payments = [{number:0,name:"MasterCard"},{number:1,name:"Maestro"}];

  constructor(private cartService:CartService) {   }
  
  ngOnInit() {    
     this.products = this.cartService.products;
     this.descount = 0;
     this.deliveryFee = 0;
     
     // blockeio do botão se forma de pagamento nao for selecionada
     this.payments.push({number:8,name:"Selecione Forma de Pagamento"});
   }

   checkQuantity(item){
     //console.log(item);
     if(item.quant < 1){
       item.quant = 1;
     }
   }

   removeProduct(prod){
     //console.log(prod);
     for(let i of this.products){
       if(i.productId == prod.productId){         
         var index = this.products.indexOf(i);
         this.products.splice(index,1);       
       }
     }
       
     localStorage.setItem('lafan.cart',JSON.stringify(this.products));
     this.cartService.cartChangeObserver.next(this.products);
   }

  getTotal():number {
    var total = 0;
    for(let i of this.products){
      // +i => tyscript tem um bug com isso eu informo que i.quant é um numero e +i.price 
      var totalUnit = (+i.quant * +i.price)
      total += totalUnit
    }    
    return total;
  }

    checkout(){
      
      console.log(this.selectedValue);
      var data: {

      }
    }

}
