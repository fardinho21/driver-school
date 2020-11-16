import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit, AfterViewInit {

  fileList = [];
  @ViewChild('fileupload',{static: false}) fileupload : ElementRef;
  treeControl = new NestedTreeControl<Folder>(folder => folder.contents)
  dataSource = new MatTreeNestedDataSource<Folder>();

  createFileForm : FormGroup;
  selected;

  files : Folder[] = [
    {
      name: "folder0",
      contents: [{name:"file1"},{name:"file2"}]
    },
    {
      name: "folder1",
      contents: [{name:"file1", contents: [
        {name:"file3"},{name:"file4"},{name:"file5"}
      ]}]
    }
  ]

  hasChild = (_: number, folder: Folder) => !!folder.contents && folder.contents.length > 0;

  constructor(private fb: FormBuilder) { 
    this.dataSource.data = this.files;
  }

  ngOnInit(): void {
    this.createFileForm  = this.fb.group({
      fileName: [null],
      file: [null, Validators.required],
      createNewFolder: [false]
    })
  }

  ngAfterViewInit() {
    this.fileupload.nativeElement.addEventListener("change", (event) => {
      try {
        this.fileList = event.target.files;
      } catch (err) {
        console.log(err,event)
      }
    }, false);
  }

  onChooseFile() {
    console.log(this.fileupload.nativeElement.click())
  }

  onSubmit() {
    console.log(this.createFileForm)
  }

  syncFiles() {
    console.log("files synched")
  }

}
