import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isLogged: boolean = false

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLogged=this.authService.isLogged()
  }

}
