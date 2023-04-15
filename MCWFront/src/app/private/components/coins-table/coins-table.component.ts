import { Component, OnInit } from '@angular/core';
import { Icoin, Ijoin } from 'src/app/share/models/coin.model';
import { Iuser } from 'src/app/share/models/user.model';
import { CoinService } from 'src/app/share/services/coin.service';
import { MatDialog} from '@angular/material/dialog';
import { ActionMessgComponent } from '../action-messg/action-messg.component';
import { AuthService } from 'src/app/share/services/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-coins-table',
  templateUrl: './coins-table.component.html',
  styleUrls: ['./coins-table.component.scss']
})
export class CoinsTableComponent implements OnInit {
  coins: Icoin[] = []
  displayedColumns: string[] = ['name', 'symbol', 'value', 'amount', 'actions']
  displayedColumsMyCoins: string[] = ["name", 'symbol', 'value', 'amount']
  sessionUser: Iuser = {}
  sessionUserCoins: Icoin[] = []
  filterSelection: string = ''
  formCoinControl= new FormControl()
  userJoins: Ijoin[] = []

  constructor(
    private coinService: CoinService,
    private dialog: MatDialog,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
    this.coinService.getAllCoins().subscribe(res=>{
      this.coins = res
    })
    this.sessionUser = this.authService.getUser()
    this.getUserCoins()
    this.getUserJoins()
    this.formCoinControl.setValue('coins')
  }

  openDialog(operation: number, coin: Icoin){
    this.dialog.open(ActionMessgComponent, {data:{operation:operation, coin:coin, user:this.sessionUser}})
    .afterClosed().subscribe(res=>{
      console.log('Cierro Dialog')
      console.log(res.coins)
      this.coins = res.coins
      this.getUserCoins()
      console.log('update value: '+res.update)
      if(res.update){
        console.log('The new budget: '+Number(res.newBudget))
        this.sessionUser.budget = Number(res.newBudget)
        
        this.authService.saveSession(this.sessionUser)
        this.sessionUser = this.authService.getUser()
      }
    })

  }

  getUserCoins(){
    this.coinService.getUserCoins(this.sessionUser.userId||'').subscribe(res=>{
      console.log('User Coins: '+res)
      this.sessionUserCoins = res
    })
  }

  getUserJoins(){
    this.coinService.getUserJoins(this.sessionUser.userId||'').subscribe(res=>{
      this.userJoins = res
    })
  }

  showSellButton(coinId: string) : boolean {
    if(this.sessionUserCoins==null){
      return true
    }
    else{
    return this.sessionUserCoins.filter(coin => coin.coinId == coinId)?.length == 0
    }
  }

  refresh(){
    this.getUserCoins()
    /*this.coinService.getAllCoins().subscribe(res=>{
      this.coins = res
    })*/
  }

  removeColumn() {
    if (this.displayedColumns.length) {
      delete this.displayedColumns[3]
    }
  }


}
