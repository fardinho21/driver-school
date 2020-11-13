import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthService {

    authSubject  = new Subject<{msg:string,ins?:boolean}>();
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

    logIn(email: string, password: string, instructor : boolean=false) {
        this.authSubject.next({msg:'inprogress'})
        setTimeout(() => {
            this.authSubject.next({msg:'authed',ins:instructor});
        }, 1500)
    }
    
    logOut(instructor: boolean=false) {
        this.authSubject.next({msg:'inprogress'})
        setTimeout(() => {
            this.authSubject.next({msg:'logout',ins:instructor});
        }, 1500)
    }

    signUp(userCredentials: UserCredentials) {
        this.authSubject.next({msg:'inprogress'})
        setTimeout(() => {
            this.authSubject.next({msg:'authed'});
        }, 1500)
    }

}