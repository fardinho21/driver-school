import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userstuff',
  templateUrl: './userstuff.component.html',
  styleUrls: ['./userstuff.component.css']
})
export class UserstuffComponent implements OnInit {

  selected: string = "account";

  constructor() { }

  ngOnInit(): void {
  }

  select(value : string) {
    this.selected=value;
  }

}
