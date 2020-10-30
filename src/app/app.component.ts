import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from './shared/auth.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'driver-school';
  loggedIn: boolean = true;
  inProg : boolean = false;

  authSubscription : Subscription;

  constructor(private rotuer: Router, private authService: AuthService) {
    
  }

  ngOnInit() {
    this.authService.authSubject.subscribe((isAuthed : string )=> {
      this.loggedIn = isAuthed === "authed" ? true : false;
      this.inProg = isAuthed === "inprogress" ? true : false;

      if (isAuthed === "authed") {
        this.onNavigate("userContent")
      } else if (isAuthed === "logout") {
        this.onNavigate("home")
      }
    })
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe()
  }

  onNavigate(path: string) {
    this.rotuer.navigate(['/'+path])
  }

  logOut() {
    this.authService.logOut();
  }
}
