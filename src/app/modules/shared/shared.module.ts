
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeadbarComponent } from './headbar/headbar.component';
import { FooterComponent } from './footer/footer.component';
import { AddressComponent } from './address/address.component';
import { AlbunsPhotosComponent } from './albuns-photos/albuns-photos.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LafanMaskDirective } from './directives/lafan-mask.directive';
import { LafanCpfPipe } from './pipes/lafan-cpf.pipe';
import { LafanPhonePipe } from './pipes/lafan-phone.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,   
    HttpModule
  ],
  declarations: [
    HeadbarComponent,
    FooterComponent, 
    AddressComponent, 
    AlbunsPhotosComponent, 
    CarouselComponent,
    LafanMaskDirective,
    LafanCpfPipe,
    LafanPhonePipe
  ],
  exports:[
    HeadbarComponent,
    FooterComponent,
    CarouselComponent,
    AlbunsPhotosComponent,
    AddressComponent,
    LafanMaskDirective,
    LafanCpfPipe,
    LafanPhonePipe
  ]
  
})
export class SharedModule { }
