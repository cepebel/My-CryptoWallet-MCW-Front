import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-login-messg',
  templateUrl: './login-messg.component.html',
  styleUrls: ['./login-messg.component.scss']
})
export class LoginMessgComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string){}

  ngOnInit(): void {
  }

}
