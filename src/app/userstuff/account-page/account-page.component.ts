import { Component, OnInit } from '@angular/core';
import { UiManagerService } from "../../shared/ui-manager.service";

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  constructor(private uiManager: UiManagerService ) { }

  ngOnInit(): void {
  }

  onLinkClick(s:string) {
    this.uiManager.showDialog(s);
  }

}
