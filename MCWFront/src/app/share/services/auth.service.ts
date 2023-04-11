import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../models/user.model';

const AUTH_API = 'http://localhost:3142/api/users/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logIn(mail:string, password:string): Observable<Iuser>{
    console.log('Dentro del authService')
    //return this.http.post<any>(AUTH_API+'login',{mail,password})
    return this.http.post<Iuser>(AUTH_API+'login',{email:mail, password:password})
  }

  saveSession(user: Iuser){
    let stringUser = JSON.stringify(user)
    sessionStorage.setItem("sessionUser", stringUser)
  }

  getUser():Iuser{
    let user: Iuser = {}
    const stringUser= sessionStorage.getItem("sessionUser")
    if(stringUser){
      user = JSON.parse(stringUser)
    }
    return user
  }

  register(user: Iuser): Observable<string|number>{
    console.log(user)
    return this.http.post<string>(AUTH_API+'add',{newUser: user})
  }

  checkSession():string | null{
    return sessionStorage.getItem("sessionUser")
  }

  isLogged():boolean{
    const session = this.checkSession()
    if(session){
      return true
    }
    else{
      return false
    }
  }

  logout(){
    sessionStorage.clear()
  }
  
}
