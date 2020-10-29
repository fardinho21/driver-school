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

  private userCredentials : UserCredentials;


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
    if (this.isMinor) {
      this.userCredentials.parentFirstName = f.controls.pfirst.value,
      this.userCredentials.parentLastName = f.controls.plast.value,
      this.userCredentials.registeredEmail = f.controls.email.value,
      this.userCredentials.password = f.controls.password.value
    }

    this.authService.authenticateUser("SIGNUP", this.userCredentials);

  }

  onNext(f : NgForm) {
    const birthdate : Date = f.controls.bdate.value;
    this.isMinor = this.now.getFullYear() - this.birthDate.getFullYear() < 18;
    this.message = this.isMinor ? "Parent's email" : "Your email";
    this.next = true;

    this.userCredentials = {
      firstName : f.controls.fname.value,
      lastName : f.controls.lname.value,
      birthDate : f.controls.bdate.value,
      isMinor : this.isMinor,
      registeredEmail : "",
      password: ""
    }

  }

}
