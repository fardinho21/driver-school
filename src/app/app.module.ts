import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { HomePageComponent } from "./home-page/home-page.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { OffersComponent } from "./offers/offers.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";


declare global {
  export interface UserCredentials {
    firstName: string,
    lastName: string,
    birthDate: Date,
    isMinor: boolean,
    registeredEmail: string,
    password: string,
    parentFirstName?: string,
    parentLastName?: string,
    
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OffersComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
