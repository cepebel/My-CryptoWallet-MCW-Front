import { CoinService } from './../../../share/services/coin.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Icoin } from 'src/app/share/models/coin.model';
import { Iuser } from 'src/app/share/models/user.model';
import { FormControl } from '@angular/forms';

export interface Idata{
  operation: number
  coin: Icoin
  user: Iuser
}

@Component({
  selector: 'app-action-messg',
  templateUrl: './action-messg.component.html',
  styleUrls: ['./action-messg.component.scss']
})
export class ActionMessgComponent implements OnInit {
  amount = new FormControl({value: 0})
  coinValue: number = 0
  userBudget: number =  0
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Idata,
    public dialogRef: MatDialogRef<ActionMessgComponent>,
    private coinService: CoinService,
    ) { }
  

  ngOnInit(): void {
    this.amount.setValue(0)
    if(this.data.coin.value){
      this.coinValue= this.data.coin.value
    }
    if(this.data.user.budget){
      this.userBudget = this.data.user.budget
    }
  }

  onBack(){
    this.dialogRef.close(0)
  }

  onBuy(){
    if(this.data.user.userId && this.data.coin.coinId){
      this.coinService.buyCoin(this.data.user.userId, this.data.coin.coinId, this.amount.value).subscribe(res=>
        console.log(res))
    }
    
    this.dialogRef.close(1)
  }
  onSell(){
    if(this.data.user.userId && this.data.coin.coinId){
      this.coinService.buyCoin(this.data.user.userId, this.data.coin.coinId, -this.amount.value).subscribe(res=>
        console.log(res))
    }
    
    this.dialogRef.close(-1)
    
  }

}
