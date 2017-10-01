import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  private form: FormGroup;
  private erros:any[] = [];
  private status = true;  
  
    user  = {
      name:"",
      email:"",
      password:"",
      confirmPassword:"",
      id:""     
  }   

  constructor(private router: Router) {  }

   ngOnInit() {    
   }
   submit() { 

    //  this.dataService.createUser(this.user).subscribe(result => {
      
    //     if(result.success){       
    //       this.status = result.success;
    //       document.getElementById('contentModal').innerHTML = result.data ;
    //       var element = document.getElementById('buttonModal');         
    //       element.click();
    //       this.clear();
    //     }
    //     else {

    //      this.status = result.success;
    //      this.erros = result.error;
    //      var element = document.getElementById('buttonModal');
    //      element.click();         
    //     }       
        
    //   });
   }

   clear(){
    this.user.confirmPassword = "";
    this.user.password = "";
    this.user.name = "";
    this.user.email = "";
   }

   login(){
      this.router.navigateByUrl("/login");
   }
}
