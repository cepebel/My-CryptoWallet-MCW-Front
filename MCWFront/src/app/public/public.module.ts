
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ShareModule } from '../share/share.module';
import {MatButtonModule} from '@angular/material/button'



@NgModule({
  declarations: [
    WelcomeComponent,
    LogInComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ShareModule,
    MatButtonModule
  ]
})
export class PublicModule { }
