import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Iuser } from '../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false
  sessionUser: Iuser = {}

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged()
    this.sessionUser = this.authService.getUser()
  }

  toWelcome(){
    if(this.isLogged){
      this.router.navigate(['private/dashboard'])
    }
    else{
    this.router.navigate(['/public/welcome'])
    }
  }
  logIn(){
    this.router.navigate(['/public/login'])

  }
  logOut(){
    this.authService.logout()
    this.isLogged = false
    this.router.navigate(['/public/welcome'])
  }
  addBudget(){
    this.router.navigate(['/private/account'])
  }

}
