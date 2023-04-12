import { CoinService } from './../../../share/services/coin.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Icoin } from 'src/app/share/models/coin.model';
import { Iuser } from 'src/app/share/models/user.model';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/share/services/user.service';
import { ActionWarningComponent } from '../action-warning/action-warning.component';
import { AuthService } from 'src/app/share/services/auth.service';

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
  update: boolean = false

  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Idata,
    public dialogRef: MatDialogRef<ActionMessgComponent>,
    private coinService: CoinService,
    private userService: UserService,
    public dialog: MatDialog,
    private authService: AuthService
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
    this.dialogRef.close({coins:this.coinService.getAllCoins()})
  }

  onBuy(){
    if(this.data.user.userId && this.data.coin.coinId){
      /*this.userService.updateUserBudget(this.data.user.userId, this.userBudget-this.amount.value).subscribe(res=>{
        console.log(res)
      })*/
      this.coinService.buyCoin(this.data.user.userId, this.data.coin.coinId, +this.amount.value).subscribe(res=>{
        console.log(res)
        if(res=='impossible'){
          this.dialog.open(ActionWarningComponent, {data:'impossible'})
        }else if(res=='negative'){
          this.dialog.open(ActionWarningComponent, {data:'negative'})
        }else{
            let newBudget: number = Number(this.userBudget)-Number(this.amount.value*this.coinValue)
            this.update = true
            console.log('Ignoro el if-else')
            if(newBudget<0){
              this.dialog.open(ActionWarningComponent, {data:'redNumber'})
            }
            else{
              this.userService.updateUserBudget(this.data.user.userId || '', Number(this.userBudget)-Number(this.amount.value*this.coinValue)).subscribe(res=>{
                console.log(res)
                this.data.user.budget = this.userBudget
                this.authService.saveSession(this.data.user)
                this.dialogRef.close({coins: this.coinService.getAllCoins(), newBudget: Number(this.userBudget)-Number(this.amount.value*this.coinValue), update: this.update})
              })
            }
        }
      })
      
    }
 
    
  }
  onSell(){
    if(this.data.user.userId && this.data.coin.coinId){
      this.coinService.buyCoin(this.data.user.userId, this.data.coin.coinId, -this.amount.value).subscribe(res=>{
        console.log(res)
        if(res=='impossible'){
          this.dialog.open(ActionWarningComponent, {data:'impossible'})
        }else if(res=='negative'){
          this.dialog.open(ActionWarningComponent, {data:'negative'})
        }else{
            let newBudget: number = Number(this.userBudget)-Number(this.amount.value*this.coinValue)
            this.update = true
            console.log('Ignoro el if-else')
            if(newBudget<0){
              this.dialog.open(ActionWarningComponent, {data:'redNumber'})
            }
            else{
              this.userService.updateUserBudget(this.data.user.userId || '', Number(this.userBudget)-Number(this.amount.value*this.coinValue)).subscribe(res=>{
                console.log(res)
                this.data.user.budget = this.userBudget
                this.authService.saveSession(this.data.user)
                this.dialogRef.close({coins: this.coinService.getAllCoins(), newBudget: Number(this.userBudget)-Number(this.amount.value*this.coinValue), update: this.update})
              })
            }
        }
      })
    }
  }

}
