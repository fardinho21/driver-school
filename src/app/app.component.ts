import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'driver-school';
  loggedIn: boolean = false;

  constructor(private rotuer: Router, private authService: AuthService) {
    
  }

  onNavigate(path: string) {
    this.rotuer.navigate(['/'+path])
  }

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }
}
