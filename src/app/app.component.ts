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
  private isInstructor : boolean = false;


  constructor(private rotuer: Router, private authService: AuthService) {
    
  }

  ngOnInit() {
    this.authService.authSubject.subscribe((isAuthed : {msg:string,ins?:boolean} )=> {
      this.loggedIn = isAuthed.msg === "authed" ? true : false;
      this.inProg = isAuthed.msg === "inprogress" ? true : false;
      this.isInstructor = isAuthed.ins
      this.sidenav.close();

      if (isAuthed.msg === "authed") {
        this.onNavigate("userContent")
      } else if (isAuthed.msg === "logout") {
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
