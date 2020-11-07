import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from "./dialog/dialog.component";

@Injectable({
  providedIn: 'root'
})
export class UiManagerService {

  constructor(public dialog: MatDialog) { }


  showDialog(n:number) {
    let d = "";
    switch (n) {
      case 1:
        d = "changeEmail";
        break;
      case 2:
        d = "changePassword"
        break;
      case 3:
        d = "deleteAccount"
        break;
      case 4:
        d = "shareLink"
        break;
    }
    if (d) {
      const dialogRef = this.dialog.open(DialogComponent,{data:{display:d}})
    }
    
  }
}
