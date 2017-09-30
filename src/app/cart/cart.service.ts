import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class CartService {
  
      public products:any[]=[];
      cartChange:Observable<any>;
      cartChangeObserver:Observer<any>; // na classe desejada "Inscrita"  atraves do metodo next recebe a lista
  
      constructor(){
          this.cartChange =  new Observable((obsever: Observer<any>)=>{
                  this.cartChangeObserver = obsever;
               });
      }
  
     getItems():any[]{
          var cartItems = localStorage.getItem('lafan.cart');
          if(cartItems){ this.products = JSON.parse(cartItems);}
          this.cartChangeObserver.next(this.products);
          return this.products;
     }
  
      addProduct(prod){
          //console.log(prod.productId);
          this.getItems();
         
          if(this.hasItem(prod.productId)){
              this.updateQuantity(prod.productId,1);
          } else {
              this.products.push(prod);
          }       
          this.save();
          this.cartChangeObserver.next(this.products);
      }
  
      save(){
          localStorage.setItem('lafan.cart', JSON.stringify(this.products));
      }
  
      hasItem(id):boolean {
          for(let item of this.products){
              if(item.productId == id){
                  return true;
              }
          }
          return false;
      }
  
      updateQuantity(id,quant){
         // console.log("Id "+id," Quantidade" + quant)
          for(let p of this.products){
              if(p.productId == id){
                  p.quant += +quant;
              }
              this.cartChangeObserver.next(this.products);
          }
      }
      
      load(){
          var cart = localStorage.getItem("lafan.cart");
         if(cart){
             this.products = JSON.parse(cart);
         }
  
         this.cartChangeObserver.next(this.products);      
      }
      
  }
