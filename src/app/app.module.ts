import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { HomePageComponent } from "./home-page/home-page.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { OffersComponent } from "./offers/offers.component";
import { UserstuffComponent } from "./userstuff/userstuff.component";
import { RegisterComponent } from "./userstuff/register/register.component";
import { ScheduleComponent } from "./userstuff/schedule/schedule.component";
import { AccountPageComponent } from "./userstuff/account-page/account-page.component";
import { DialogComponent } from "./shared/dialog/dialog.component";
import { CamelToSpacePipe } from "./shared/pipes/camel-to-space.pipe";
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

  export interface SessionElement {
    name: string;
    date: string;
    price: number;
    type: string;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OffersComponent,
    SignupComponent,
    LoginComponent,
    UserstuffComponent,
    AccountPageComponent,
    RegisterComponent,
    ScheduleComponent,
    DialogComponent,
    CamelToSpacePipe
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
