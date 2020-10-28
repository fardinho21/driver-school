import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ManagerService } from "../manager.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild("drawer", {static: false}) sideNavDrawer : MatDrawer;

  constructor(private manager : ManagerService, private router: Router) { }

  ngOnInit(): void {
    
  }

  toggleDrawer(){
    this.sideNavDrawer.toggle()
  }

  onNavigate(path : string) {
    const p = "/"+path;
    this.router.navigate([p]);
  }



}
