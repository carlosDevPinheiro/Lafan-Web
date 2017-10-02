import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

    private serviceUrl: string = "http://localhost:58618/api/"
    constructor(private http: Http) { }


    getUser(id: string) {
        let user = localStorage.getItem('lafan.user');
        if (!user) { return; }

        let token = localStorage.getItem('lafan.token');
        let header = new Headers({ 'Content-Type': 'application/json' });
        header.append('Authorization', `Bearer ${token}`); Headers
        let optinos = new RequestOptions({ headers: header });

        return this.http.get(this.serviceUrl + `v1/users/${id}`, optinos)
            .map((resp: Response) => resp.json());
    }

    editUser(obj:any){
        let token = localStorage.getItem('lafan.token');
        let header = new Headers({'Content-Type':'application/json'});
        header.append('Authorization',`Bearer ${token}`); Headers
        let options = new RequestOptions({ headers: header});

        return this.http.put(this.serviceUrl+'v1/users',obj,options)
        .map((resp: Response) => resp.json());
    }

    getCustomer(id:string){
        let token = localStorage.getItem('lafan.token');
        if(!token) { return;}

        let header = new Headers({'Content-Type':'application/json'});
        header.append('Authorization',`Bearer ${token}`); Headers
        let options = new RequestOptions({ headers: header});
       
        return this.http.get(this.serviceUrl +`v1/customer/${id}/user`,options )
            .map((resp:Response) => resp.json());
    }

    getAddress(id:string){
        let token = localStorage.getItem('lafan.token');
        if(!token){ return;}

        let header = new Headers({'Content-Type':'application/json'});
        header.append('Authorization',`Bearer ${token}`); Headers
        let options = new RequestOptions({ headers: header});
        return this.http.get(this.serviceUrl + `v1/customer/${id}/address-list`, options)
                .map((resp:Response) => resp.json());
    }
}
