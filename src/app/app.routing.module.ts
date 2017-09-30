
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router"

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';



const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'store', component: StoreComponent },
    { path: 'cart', component: CartComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);