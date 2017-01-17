import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {
isLoggedIn: boolean

  constructor(private http: Http){

  }
  authenticateUser(cred: any){
    let header = new Headers();
    let creds  = 'username';
    header.append('Content-Type', 'application/json')
    return this.http.post('/api/auth', JSON.stringify(creds), {headers: header})
                    .map((res)=>{
                      res.json();
                    })
  }
}
