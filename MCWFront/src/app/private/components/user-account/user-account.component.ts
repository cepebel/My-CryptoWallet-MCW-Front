import { AuthService } from 'src/app/share/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/share/models/user.model';
import { Icoin } from 'src/app/share/models/coin.model';
import { CoinService } from 'src/app/share/services/coin.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  sessionUser: Iuser = {}
  myCoins: Icoin[] = []

  constructor(
    private authService: AuthService,
    private coinService: CoinService) { }

  ngOnInit(): void {
    document.body.className = "selector";
    this.sessionUser = this.authService.getUser()
    console.log('Inicio página de usuario'+this.sessionUser.userId)
    this.coinService.getUserCoins(this.sessionUser.userId||'').subscribe(res=>{
      console.log('Las monedas de mi usuario')
      this.myCoins = res
    })

  }
  ngOnDestroy():void{
    document.body.className = "";
  }

}
