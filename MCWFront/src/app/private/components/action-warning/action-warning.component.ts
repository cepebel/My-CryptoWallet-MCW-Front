import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-action-warning',
  templateUrl: './action-warning.component.html',
  styleUrls: ['./action-warning.component.scss']
})
export class ActionWarningComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  ngOnInit(): void {
  }

}
