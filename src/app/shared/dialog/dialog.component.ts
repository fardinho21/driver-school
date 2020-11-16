import { AfterViewInit, Component, EmbeddedViewRef, Inject, OnInit, TemplateRef, ViewChild, ViewContainerRef, ChangeDetectorRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, AfterViewInit{


  headerMessage : string;
  @ViewChild("container",{read: ViewContainerRef, static: false}) ctr: ViewContainerRef;
  @ViewChild("changeEmail",{read: TemplateRef, static: false}) changeEmailTmpl : TemplateRef<any>;
  @ViewChild("changePassword",{read: TemplateRef, static: false}) changePassTmpl : TemplateRef<any>;
  @ViewChild("deleteAccount",{read: TemplateRef, static: false}) deleteAccTmpl : TemplateRef<any>;
  @ViewChild("changePhone",{read: TemplateRef, static: false}) changePhoneTmpl : TemplateRef<any>;
  @ViewChild("shareLink",{read: TemplateRef, static: false}) shareLinkTmpl : TemplateRef<any>;
  @ViewChild("linkPaypal",{read: TemplateRef, static: false}) linkPaypalTmpl : TemplateRef<any>;
  @ViewChild("studentInfo", {read: TemplateRef, static: false}) clickStudentTmpl : TemplateRef<any>;
  view : EmbeddedViewRef<any>;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : {display:string, extra?: any}, 
    private chgDetectRef: ChangeDetectorRef) { 

    }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.headerMessage = this.data.display;
    try {
      if (this.data.display==="changeEmail") {
        this.view = this.changeEmailTmpl.createEmbeddedView(null);
      } else if (this.data.display==="changePassword") {
        this.view = this.changePassTmpl.createEmbeddedView(null);
      } else if (this.data.display==="deleteAccount") {
        this.view = this.deleteAccTmpl.createEmbeddedView(null)
      } else if (this.data.display==="shareLink") {
        this.view = this.shareLinkTmpl.createEmbeddedView(null)
      } else if (this.data.display==="changePhone") {
        this.view = this.changePhoneTmpl.createEmbeddedView(null)
      } else if (this.data.display==="linkPaypal") {
        this.view = this.linkPaypalTmpl.createEmbeddedView(null)
      } else if (this.data.display==="studentInfo") {
        this.view = this.clickStudentTmpl.createEmbeddedView(null)
      }

      this.ctr.insert(this.view);
    } catch (err) {
      console.log(err)
    }

    this.chgDetectRef.detectChanges();
  }

  onSubmit(f : NgForm){
    console.log(f.controls)
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
