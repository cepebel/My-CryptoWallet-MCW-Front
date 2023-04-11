import { Component, OnInit } from '@angular/core';
import { Icoin } from 'src/app/share/models/coin.model';
import { Iuser } from 'src/app/share/models/user.model';
import { CoinService } from 'src/app/share/services/coin.service';
import {MatDialog} from '@angular/material/dialog';
import { ActionMessgComponent } from '../action-messg/action-messg.component';
import { AuthService } from 'src/app/share/services/auth.service';

@Component({
  selector: 'app-coins-table',
  templateUrl: './coins-table.component.html',
  styleUrls: ['./coins-table.component.scss']
})
export class CoinsTableComponent implements OnInit {
  coins: Icoin[] = []
  displayedColumns: string[] = ['name', 'symbol', 'value', 'amount', 'actions']
  sessionUser: Iuser = {}

  constructor(
    private coinService: CoinService,
    private dialog: MatDialog,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.coinService.getAllCoins().subscribe(res=>{
      this.coins = res
    })
    this.sessionUser = this.authService.getUser()
  }

  openDialog(operation: number, coin: Icoin){
    this.dialog.open(ActionMessgComponent, {data:{operation:operation, coin:coin, user:this.sessionUser}})
    .afterClosed().subscribe(res=>{
      console.log(res)
      
    })
  }

}
