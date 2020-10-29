import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  maxDate;
  minDate;

  constructor() { }

  ngOnInit(): void {

    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 14)
    this.minDate = new Date;
    this.minDate.setFullYear(this.minDate.getFullYear() - 60)

  }

}
