import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Customer } from '../customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
 
  public erros = [];
  public customer: Customer
  public inscription:Subscription

  constructor(private _routerParam:ActivatedRoute) { }

  ngOnInit() {
    this.inscription = this._routerParam.queryParams.subscribe((queryParam:Customer) => {
       console.log(queryParam);
    })
  }

}
