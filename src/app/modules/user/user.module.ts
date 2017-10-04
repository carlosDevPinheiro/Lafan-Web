import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserNewComponent } from './user-new/user-new.component';
import { UserRoutingModule } from './user.routing';
import { SharedModule } from '../shared/shared.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [UserNewComponent, UserEditComponent, UserDetailsComponent, CustomerNewComponent]
})
export class UserModule { }
