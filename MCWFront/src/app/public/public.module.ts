
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ShareModule } from '../share/share.module';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterMessgComponent } from './components/register-messg/register-messg.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    WelcomeComponent,
    LogInComponent,
    RegisterComponent,
    RegisterMessgComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ShareModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule 
  ],
  providers:[
    FormsModule
  ]
})
export class PublicModule { }
