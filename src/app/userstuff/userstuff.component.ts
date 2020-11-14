import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { UiManagerService } from '../shared/ui-manager.service';

@Component({
  selector: 'app-userstuff',
  templateUrl: './userstuff.component.html',
  styleUrls: ['./userstuff.component.css']
})
export class UserstuffComponent implements OnInit {

  selected: string = "account";

  constructor(public uiManager: UiManagerService) { }

  ngOnInit(): void {

  }

  select(value : string) {
    this.selected=value;
  }

}
