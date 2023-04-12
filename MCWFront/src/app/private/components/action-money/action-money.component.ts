import { UserService } from 'src/app/share/services/user.service';
import { AuthService } from './../../../share/services/auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Iuser } from 'src/app/share/models/user.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-action-money',
  templateUrl: './action-money.component.html',
  styleUrls: ['./action-money.component.scss']
})
export class ActionMoneyComponent implements OnInit {
  userSession: Iuser = {}
  budget: number = 0
  amount = new FormControl()

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    private authService: AuthService,
    private userService: UserService,
    public dialogRef: MatDialogRef<ActionMoneyComponent>,
  ) { }

  ngOnInit(): void {
    this.amount.setValue(0)
    this.userSession = this.authService.getUser()
    if(this.userSession.budget){
      this.budget = this.userSession.budget
    }
  }

  addMoney(budget: number){
    console.log('Cantidad que viene del formulario='+budget)
    this.userService.updateUserBudget(this.userSession.userId || '', budget).subscribe(res=>{
      console.log(res)
      this.dialogRef.close(budget)
    }
    )
  }

}
