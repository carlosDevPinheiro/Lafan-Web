import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppDataService } from '../../../app.data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  private form: FormGroup;
  private erros: any[] = [];
  private status = true;

  user = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    id: ""
  }

  constructor(private _router: Router, private _dataService: AppDataService, private _toastr: ToastrService) { }

  ngOnInit() {
   
  }
  submit() {

    this._dataService.createUser(this.user).toPromise()

      .then((result: any) => {
        console.log(result);
        if (result.success) {
          this.status = result.success;
          document.getElementById('contentModal').innerHTML = result.data;
          var element = document.getElementById('buttonModal');
          element.click();
          this.clear();
          
        }
        else if (!result.success) {
          if (typeof result.data === "undefined") {
            console.log('Lista de erros');
            this.status = result.success;
            this.erros = result.error;
            var element = document.getElementById('buttonModal');
            element.click();
          }
          else if (typeof result.error === "undefined") {
            this._toastr.warning(`${result.data}`, 'Atenção !!');
          }
          else {
              return;
          }
        }
      })
      .catch((erro: any) => {
        //console.log(erro);        
        this._toastr.error(`${erro._body}`, `Erro: ${erro.status} - ${erro.statusText}`);
      });
  }

  clear() {
    this.user.confirmPassword = "";
    this.user.password = "";
    this.user.name = "";
    this.user.email = "";
  }

  login() {
    this._router.navigateByUrl("/login");
  }
}
