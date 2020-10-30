import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from './shared/auth.service';
import { Subscription } from "rxjs";
import { MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  @ViewChild("sidenav", {static: false}) sidenav : MatDrawer;
  authSubscription : Subscription;

  title = 'driver-school';
  loggedIn: boolean = true;
  inProg : boolean = false;


  constructor(private rotuer: Router, private authService: AuthService) {
    
  }

  ngOnInit() {
    this.authService.authSubject.subscribe((isAuthed : string )=> {
      this.loggedIn = isAuthed === "authed" ? true : false;
      this.inProg = isAuthed === "inprogress" ? true : false;
      this.sidenav.close();

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
