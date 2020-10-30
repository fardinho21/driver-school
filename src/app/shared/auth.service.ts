import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthService {

    authSubject  = new Subject<string>();
    private userCredentials : UserCredentials;

    constructor() {
        
    }

    //this function simulates a backend request to authenticate the user
    authenticateUser (mode : string, userCredentials?: UserCredentials) {

        this.userCredentials = userCredentials;

        
        
        switch(mode) {
            case "LOGIN":
                this.logIn("","")
                break;
            case "LOGOUT":
                this.logOut()
                break;
            case "SIGNUP":
                this.signUp(userCredentials)
                break;
            default:
                break;
        }

    }

    logIn(emai: string, password: string) {
        this.authSubject.next("inprogress")
        setTimeout(() => {
            this.authSubject.next("authed");
        }, 1500)
    }
    
    logOut() {
        this.authSubject.next("inprogress")
        setTimeout(() => {
            this.authSubject.next("logout");
        }, 1500)
    }

    signUp(userCredentials: UserCredentials) {
        this.authSubject.next("inprogress")
        setTimeout(() => {
            this.authSubject.next("authed");
        }, 1500)
    }

}