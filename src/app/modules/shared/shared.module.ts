import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeadbarComponent } from './headbar/headbar.component';
import { FooterComponent } from './footer/footer.component';
import { AddressComponent } from './address/address.component';
import { AlbunsPhotosComponent } from './albuns-photos/albuns-photos.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeadbarComponent,
    FooterComponent, 
    AddressComponent, 
    AlbunsPhotosComponent, 
    CarouselComponent
  ],
  exports:[HeadbarComponent]
  
})
export class SharedModule { }
