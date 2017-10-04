import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserNewComponent } from './user-new/user-new.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';

const routes: Routes = [
  { path: 'user-new', component: UserNewComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'customer-new', component: CustomerNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }

