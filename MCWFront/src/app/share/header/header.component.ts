import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged()
  }

  toWelcome(){
    this.router.navigate(['/public/welcome'])
  }
  logIn(){
    this.router.navigate(['/public/login'])

  }
  logOut(){
    this.authService.logout()
    this.isLogged = false
    this.router.navigate(['/public/welcome'])
  }

}
