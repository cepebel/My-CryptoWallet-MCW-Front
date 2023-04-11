import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register-messg',
  templateUrl: './register-messg.component.html',
  styleUrls: ['./register-messg.component.scss']
})
export class RegisterMessgComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: boolean) { }

  ngOnInit(): void {
  }

}
