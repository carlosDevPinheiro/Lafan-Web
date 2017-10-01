import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart/cart.service';
import { AppDataService } from '../app.data.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  products: any[] = [];
  
  manipul = 8;
  skip:number = 0;
  take:number = 8; 

  constructor(private service: AppDataService, private cartService:CartService) { }

  ngOnInit() {
    this.loadProducts();
  }
  /**** adicionando produto no carrinho ******/
  
  addToCart(prod){   
    var item = { productId:prod.productId,name:prod.name,quant:1, image:prod.image, price:prod.price, description:prod.description}
   
     // adciono um objeto produto e quantidade seta como 1 
     this.cartService.addProduct(item);
  }

  /*************   Metodos para Paginação e Carregamento dos Produtos ********************/ 

  loadProducts() {
    this.service.getProducts(0, this.manipul).subscribe(result => {
      // console.log(result);
      this.products = result.data;
    });
  }

  getMoreProducts() {
   this.skip += this.manipul;
   this.take = this.manipul;
    // console.log(this.skip, this.take);

    this.atualiza(this.skip, this.take);
  }

  getProductsHome(){
    this.skip = 0;
    this.take = this.manipul;
    //console.log(this.skip,this.take);

    this.atualiza(this.skip, this.take);
  }

  getLessProducts(){
    this.skip = this.skip - this.manipul;
    this.take = this.manipul;
   // console.log(this.skip, this.take);
   this.atualiza(this.skip, this.take);
  }

  atualiza(skip:number, take:number){
    this.service.getProducts(this.skip, this.take)
    .subscribe(result => { 
      this.products = result.data;
    })
  }



}
