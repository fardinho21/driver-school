import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  @Input() birthDate: Date;
  maxDate: Date;
  minDate: Date;
  now : Date = new Date();
  isMinor : boolean = false;
  next : boolean = false;
  message: string = "";

  


  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 14)
    this.minDate = new Date;
    this.minDate.setFullYear(this.minDate.getFullYear() - 60)


  }

  ngOnDestroy() {

  }

  onSubmit(f : NgForm) {
    /*
      trigger a timeout that will set flags for logged in users
      UI will update, hiding login, signup buttons, and revealing
      your stuff button and courses button
    */
  }

  onNext(f : NgForm) {
    const birthdate : Date = f.controls.bdate.value;
    this.isMinor = this.now.getFullYear() - this.birthDate.getFullYear() < 18;
    this.message = this.isMinor ? "Parent's email" : "Your email";
    this.next = true;
  }

}
