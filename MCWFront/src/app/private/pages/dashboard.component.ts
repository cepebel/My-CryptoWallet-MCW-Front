import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/share/services/auth.service';
import { CoinService } from 'src/app/share/services/coin.service';
import { Iuser } from 'src/app/share/models/user.model';
import { Icoin } from 'src/app/share/models/coin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sessionUser: Iuser = {}
  showContent: boolean = false

  constructor(
    private authService: AuthService,
    private coinService: CoinService,
    private router: Router) { }

  ngOnInit(): void {
    if(this.authService.isLogged()){
      this.showContent = true
      this.sessionUser = this.authService.getUser()
      console.log(this.sessionUser)
    }
  }

}
