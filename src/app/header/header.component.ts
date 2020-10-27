import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ManagerService } from "../manager.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter();

  constructor(private manager: ManagerService) { }

  ngOnInit(): void {
  }

  onToggleSideNav() {
    this.toggleSidenav.emit();
  }

}
