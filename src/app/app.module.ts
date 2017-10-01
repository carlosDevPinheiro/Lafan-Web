import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule  } from '@angular/http';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { StoreComponent } from './store/store.component';
import { HomeComponent } from './home/home.component';

import { appRouting } from './app.routing.module';
import { CartComponent } from './cart/cart.component';

import { CartService } from './cart/cart.service';
import { AppDataService } from './app.data.service';

@NgModule({
  declarations: [
    AppComponent,   
    LoginComponent,
    StoreComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
    SharedModule
  ],
  providers: [CartService, AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
