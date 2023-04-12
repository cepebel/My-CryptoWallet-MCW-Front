import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ToNumberPipe } from './pipe/to-number.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToNumberPipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule 
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ToNumberPipe
  ]
})
export class ShareModule { }
