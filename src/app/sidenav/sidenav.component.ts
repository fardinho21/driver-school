import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ManagerService } from "../manager.service";
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild("drawer", {static: false}) sideNavDrawer : MatDrawer;

  constructor(private manager : ManagerService) { }

  ngOnInit(): void {
    
  }

  toggleDrawer(){
    this.sideNavDrawer.toggle()
  }



}
