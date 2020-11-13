import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { isThisSecond } from 'date-fns';
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

  signupForm1 : FormGroup;
  signupForm2 : FormGroup;

  private userCredentials : UserCredentials;


  constructor(private authService : AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.signupForm1 = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      birthday: [null, Validators.required]
    });
    this.signupForm2 = this.fb.group({
      parentfirst: [null, Validators.required],
      parentlast: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password1: [null, [Validators.required, Validators.minLength(6)]],
      password2: [null, [Validators.required, Validators.minLength(6)]]

    }, {
      validator: this.mustMatch('password1','password2')
    })

    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 14)
    this.minDate = new Date;
    this.minDate.setFullYear(this.minDate.getFullYear() - 60)
  }

  ngOnDestroy() {

  }

  onSubmit() {

    

    if (this.isMinor) {
      this.userCredentials.parentFirstName = this.signupForm2.controls.parentfirst.value;
      this.userCredentials.parentLastName = this.signupForm2.controls.parentlast.value;
    }

    this.userCredentials.registeredEmail = this.signupForm2.controls.email.value;
    this.userCredentials.password = this.signupForm2.controls.password.value;
    this.authService.authenticateUser("SIGNUP", this.userCredentials);

    console.log(this.userCredentials)

  }

  onNext() {

    

    const birthdate : Date = this.signupForm1.controls.birthday.value;
    this.isMinor = this.now.getFullYear() - birthdate.getFullYear() < 18;
    this.message = this.isMinor ? "Parent's email" : "Your email";
    this.next = true;

    this.userCredentials = {
      firstName : this.signupForm1.controls.firstname.value,
      lastName : this.signupForm1.controls.lastname.value,
      birthDate : birthdate,
      isMinor : this.isMinor,
      registeredEmail : "",
      password: ""
    }


    console.log(this.userCredentials)

  }

  onBack() {
    this.next = false;
    this.signupForm1.controls.firstname.setValue(this.userCredentials.firstName);
    this.signupForm1.controls.lastname.setValue(this.userCredentials.lastName);
    this.signupForm1.controls.birthday.setValue(this.userCredentials.birthDate);
    
  }

  mustMatch(password1: string, password2: string) : {[s:string]:boolean} {
    try {
      const p1 = this.signupForm2.controls[password1].value
      const p2 = this.signupForm2.controls[password2].value
      if (p1.value == p2.value) {
        return null;
      } 
      return {'mismatch':true};
    } catch (err) {
      console.log(err)
    }


  }

}
