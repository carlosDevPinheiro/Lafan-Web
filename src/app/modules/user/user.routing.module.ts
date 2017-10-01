import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserNewComponent } from './user-new/user-new.component';

const routes: Routes = [
  { path: 'user-new', component: UserNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }

