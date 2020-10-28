import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'driver-school';

  constructor(private rotuer: Router) {
    
  }

  onNavigate(path: string) {
    this.rotuer.navigate(['/'+path])
  }
}
