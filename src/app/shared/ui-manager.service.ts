import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from "./dialog/dialog.component";

@Injectable({
  providedIn: 'root'
})
export class UiManagerService {

  accountType: string="instructor";
  isMinor: boolean=false;
  dialogRef : MatDialogRef<DialogComponent>;

  constructor(public dialog: MatDialog) { }


  showDialog(s:string, data?: any) {
    if (s) {
      if (data) {
        this.dialogRef = this.dialog.open(DialogComponent,{data:{display:s,extra:data}})
      } else {
        this.dialogRef = this.dialog.open(DialogComponent,{data:{display:s}})
      }
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  setAccountType(instructor: boolean){
    this.accountType = instructor ? "instructor" : "student";
  }

  setIsMinor(isMinor: boolean) {
    this.isMinor = isMinor;
  }
}
