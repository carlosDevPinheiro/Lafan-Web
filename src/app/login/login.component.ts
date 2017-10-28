import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AppDataService } from '../app.data.service';
import { PersonalValidators } from '../app.personalValidators.validators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public erros: any[] = [];
  public user = {};

  constructor(private fb: FormBuilder, private dataService:AppDataService, private router:Router, private toastr:ToastrService) {

    this.form = this.fb.group({
      email:['',Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required,
        PersonalValidators.EmailValidator

       //, CustomerValidators.EmailValidator
      ])],
      password:['',Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(32),
        Validators.required
      ])]
    })
   }
  
   
  SubmitForm(form:NgForm) {
     //console.log(this.form.value);
    this.dataService.authenticate('this.form.value').subscribe(result => {
      if(result.success){
          this.user = {          
            id:result.user.id,
            name:result.user.name,
            email:result.user.email
        }

        localStorage.setItem('lafan.token',result.access_token);
        localStorage.setItem('lafan.user', JSON.stringify(this.user));        
  
        this.router.navigateByUrl('/home');
      } else if(!result.success) {
          var element = document.getElementById('buttonModal');
          element.click();
      } else {
          this.toastr.warning('Houve um problema interno tente novamente mais tarde','Atenção');
      } 
    });
   }

  ngOnInit() {
  }
}
