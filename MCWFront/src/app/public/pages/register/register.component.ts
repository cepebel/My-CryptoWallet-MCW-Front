import { Component, OnInit } from '@angular/core';
import  {NgForm} from '@angular/forms';
import { Iuser } from 'src/app/share/models/user.model';
import { AuthService } from 'src/app/share/services/auth.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegisterMessgComponent } from '../../components/register-messg/register-messg.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: Iuser = {}
  success: boolean=false

  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    document.body.className = "selector";
  }

  register(f: NgForm){
    this.user.username = f.value.username
    this.user.name = f.value.name
    this.user.surname = f.value.surname
    this.user.email = f.value.email
    this.user.password = f.value.password

    if(this.user.username==''){
      this.user.username=undefined
    }
    if(this.user.email==''){
      this.user.email=undefined
    }
    if(this.user.password==''){
      this.user.password=undefined
    }

    this.authService.register(this.user).subscribe(
      res=>{
        if(res!=-1){
          this.success= true
          this.dialog.open(RegisterMessgComponent,{data: this.success})
          this.router.navigate(['/public/welcome'])
        }else{
          this.success=false
          this.dialog.open(RegisterMessgComponent, {data:this.success})
        }
        
        console.log(res)
        
      }
    )

  }
  ngOnDestroy():void{
    document.body.className = "";
  }

  toLogIn(){
    this.router.navigate(['/public/login'])
  }
  toWelcome(){
    this.router.navigate(['/public/welcome'])
  }

}
