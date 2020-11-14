import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from "./dialog/dialog.component";

@Injectable({
  providedIn: 'root'
})
export class UiManagerService {

  accountType: string="student";
  isMinor: boolean=false;

  constructor(public dialog: MatDialog) { }


  showDialog(s:string) {
    if (s) {
      const dialogRef = this.dialog.open(DialogComponent,{data:{display:s}})
    }
  }

  setAccountType(instructor: boolean){
    this.accountType = instructor ? "instructor" : "student";
  }

  setIsMinor(isMinor: boolean) {
    this.isMinor = isMinor;
  }
}
