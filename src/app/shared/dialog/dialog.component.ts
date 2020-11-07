import { AfterViewInit, Component, EmbeddedViewRef, Inject, OnInit, TemplateRef, ViewChild, ViewContainerRef, Input} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, AfterViewInit{

  @ViewChild("container",{read: ViewContainerRef, static: false}) ctr: ViewContainerRef;
  @ViewChild("changeEmail",{read: TemplateRef, static: false}) changeEmailTmpl : TemplateRef<any>;
  @ViewChild("changePassword",{read: TemplateRef, static: false}) changePassTmpl : TemplateRef<any>;
  @ViewChild("deleteAccount",{read: TemplateRef, static: false}) deleteAccTmpl : TemplateRef<any>;
  @ViewChild("shareLink",{read: TemplateRef, static: false}) shareLinkTmpl : TemplateRef<any>;
  view : EmbeddedViewRef<any>;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data : {display:string}) { }

  ngOnInit(): void {

  
  }

  ngAfterViewInit() {

    try {
      if (this.data.display==="changeEmail") {
        this.view = this.changeEmailTmpl.createEmbeddedView(null);
      } else if (this.data.display==="changePassword") {
        this.view = this.changePassTmpl.createEmbeddedView(null);
      } else if (this.data.display==="deleteAccount") {
        this.view = this.deleteAccTmpl.createEmbeddedView(null)
      } else if (this.data.display==="shareLink") {
        this.view = this.shareLinkTmpl.createEmbeddedView(null)
      }

      this.ctr.insert(this.view);
    } catch (err) {
      console.log(err)
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
