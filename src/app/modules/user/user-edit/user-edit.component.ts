import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { UserService } from '../user.service';
import { Users } from '../user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService]
})
export class UserEditComponent implements OnInit {

      constructor(
        private _router: Router,
        private _routeAcitve: ActivatedRoute,
        private userService: UserService,
        private _toastr: ToastrService
      ) { }

  private form: FormGroup;
  private erros: any[] = [];
  inscription: Subscription;

  public user = { userId: '', name: '', email: '', password: '', confirmPassword: '' }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.inscription = this._routeAcitve.queryParams.subscribe((queryParam: Users) => {
      this.user.userId = queryParam.id;
      this.user.name = queryParam.name;
      this.user.email = queryParam.email;
    })
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }

  clear() {
    this.user.name = "";
    this.user.email = "";
  }

  UpdateUser() {
    // console.log(this.user);
    this.userService.editUser(this.user).subscribe(result => {
      console.log(result);
      if (result.success == true) {
          this._toastr.success('Atualização efetuada com sucesso, entre novamnente com login e senha','Sucesso !!');
          this.clear();
          localStorage.removeItem('lafan.user');     
          this._router.navigate(['home']);
      } else if( result.success == false) {
        this._toastr.error('Atualização não efetuada, corriga os erros e tente novamente','Op´s');        
      }

    })
  }


}
