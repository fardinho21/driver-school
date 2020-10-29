import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { LoginComponent } from "./login/login.component";
import { OffersComponent } from "./offers/offers.component";
import { SignupComponent } from "./signup/signup.component";
import { UserstuffComponent } from "./userstuff/userstuff.component";
const routes : Routes = [
    {path: '', component: HomePageComponent},
    {path: 'home', component: HomePageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'offers', component: OffersComponent},
    {path: 'userContent', component: UserstuffComponent},

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}