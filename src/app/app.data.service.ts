import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppDataService {

  private serviceUrl: string = "http://localhost:58618/api/v1/";
  
      constructor(private http: Http) { } 
     
  
      authenticate(obj: any) {
          // console.log(obj);
  
          var dt = "grant_type=password&email=" + obj.email + "&password=" + obj.password;
          let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
          let options = new RequestOptions({ headers: headers });
  
          return this.http.post(this.serviceUrl + "authenticate", dt, options)
              .map((res: Response) => res.json());
      }
  
      getProducts(skip:number,take:number){
          return  this.http.get(this.serviceUrl + "product/"+ skip +"/"+take+"/"+true)
                  .map((res: Response) => res.json());
      }

}
