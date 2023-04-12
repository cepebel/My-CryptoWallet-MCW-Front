import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './pages/dashboard.component';
import { ShareModule } from '../share/share.module';
import { MatTableModule} from '@angular/material/table';
import { CoinsTableComponent } from './components/coins-table/coins-table.component';
import { MatButtonModule } from '@angular/material/button';
import { ActionMessgComponent } from './components/action-messg/action-messg.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UserAccountComponent } from './components/user-account/user-account.component';
@NgModule({
  declarations: [
    DashboardComponent,
    CoinsTableComponent,
    ActionMessgComponent,
    UserAccountComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ShareModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule 
  ]
})
export class PrivateModule { }
