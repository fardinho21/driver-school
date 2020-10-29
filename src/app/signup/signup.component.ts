import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  maxDate: Date;
  minDate: Date;
  now : Date = new Date();
  isMinor : boolean = false;
  next : boolean = false;
  message: string = "";
  @Input() birthDate: Date;


  constructor() { }

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 14)
    this.minDate = new Date;
    this.minDate.setFullYear(this.minDate.getFullYear() - 60)
  }

  onSubmit(f : NgForm) {

  }

  onNext(f : NgForm) {
    const birthdate : Date = f.controls.bdate.value;
    this.isMinor = this.now.getFullYear() - this.birthDate.getFullYear() < 18;
    this.message = this.isMinor ? "Parent's email" : "Your email";
    this.next = true;
  }

}
