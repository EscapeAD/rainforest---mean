import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {
isLoggedIn: boolean

  constructor(private http: Http){

  }
  authenticateUser(cred: any){
    this.isLoggedIn = false;
    let header = new Headers();
    let loginInfo  = `username=${cred.username}&password=${cred.password}`;
    header.append('Content-Type', 'application/X-www-form-urlencoded');
    return this.http.post('/api/auth', JSON.stringify(loginInfo), {headers: header})
                    .map((res)=>{
                      res.json();
                    })
  }
}
