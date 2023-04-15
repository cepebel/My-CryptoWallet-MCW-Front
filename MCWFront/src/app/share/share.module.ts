import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ToNumberPipe } from './pipe/to-number.pipe';
import { FilterNamePipe } from './pipe/filter-name.pipe';
import { ToEurosPipe } from './pipe/to-euros.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToNumberPipe,
    FilterNamePipe,
    ToEurosPipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule 
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ToNumberPipe,
    FilterNamePipe
  ]
})
export class ShareModule { }
