import { Component, OnInit, Injectable } from '@angular/core';
import  {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/share/services/auth.service';


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
    private router: Router
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
      console.log(res)
      this.authService.saveSession(res)
      this.router.navigate(['/private/dashboard'])
    },
    err=>{
      console.log('Holi')
      console.log(err.error.message)
    })
  }

  ngOnDestroy():void{
    document.body.className = "";
  }

}
