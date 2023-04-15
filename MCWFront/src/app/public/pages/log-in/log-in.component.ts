import { Iuser } from './../../../share/models/user.model';
import { Component, OnInit, Injectable } from '@angular/core';
import  {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/share/services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import { LoginMessgComponent } from '../../components/login-messg/login-messg.component';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})

export class LogInComponent implements OnInit {
  email: string =''
  password: string =''
  
  constructor(
    private authService: AuthService,
    private router: Router,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    document.body.className = "selector";
  }


  logIn(f: NgForm){
    this.email = f?.value?.email
    this.password = f.value.password
    console.log(this.email)
    console.log(this.password)
    this.authService.logIn(this.email, this.password).subscribe(
    res=>{
      if(res=='no-match'){
        this.matDialog.open(LoginMessgComponent, {data:'no-match'})
        console.log('Contraseña erronea')
      }
      else if(res=='no-data-base'){
        this.matDialog.open(LoginMessgComponent, {data:'no-data-base'})
        console.log('El usuario no se encuentra registrado en nuestra aplicación')
      }
      else{
        if (typeof res !== 'string') {
        console.log(res)
        this.authService.saveSession(res)
        this.router.navigate(['/private/dashboard'])
        }
      }
    },
    err=>{
      console.log('Holi')
      console.log(err.error.message)
    })
  }

  ngOnDestroy():void{
    document.body.className = "";
  }

  toRegister(){
    this.router.navigate(['/public/register'])
  }
  toWelcome(){
    this.router.navigate(['/public/welcome'])
  }

}
