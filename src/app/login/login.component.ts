import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(f : NgForm) {
    const asInstructor : boolean = f.controls['asInstructor'].value
    this.authService.logIn("","",asInstructor)
  }

}