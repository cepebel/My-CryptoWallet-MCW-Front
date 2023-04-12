import { AuthService } from 'src/app/share/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/share/models/user.model';
import { Icoin, Ijoin } from 'src/app/share/models/coin.model';
import { CoinService } from 'src/app/share/services/coin.service';
import { MatDialog} from '@angular/material/dialog';
import { ActionMoneyComponent } from '../action-money/action-money.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  sessionUser: Iuser = {}
  myCoins: Icoin[] = []
  coinsTotalValue: number = 0
  userJoin: Ijoin = {}
 

  constructor(
    private authService: AuthService,
    private coinService: CoinService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    document.body.className = "selector";
    this.sessionUser = this.authService.getUser()
    console.log('Inicio página de usuario'+this.sessionUser.userId)
    this.coinService.getUserCoins(this.sessionUser.userId||'').subscribe(res=>{
      console.log('Las monedas de mi usuario')
      this.myCoins = res
      console.log(this.myCoins)
    })
  }
  ngOnDestroy():void{
    document.body.className = "";
  }

  addMoney(){
    this.dialog.open(ActionMoneyComponent).afterClosed().subscribe(res=>{
      this.sessionUser.budget = res
      this.authService.saveSession(this.sessionUser)
      console.log('Sesión guardada')
    })
  }
  getJoinById(userId:string, coinId: string): Observable<Ijoin>{
    console.log('Buscando join')
    return this.coinService.getJoinById(userId,coinId)
  }

}
