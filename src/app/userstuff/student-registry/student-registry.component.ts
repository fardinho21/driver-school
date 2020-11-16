import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatRow, MatTableDataSource } from "@angular/material/table";
import { UiManagerService } from 'src/app/shared/ui-manager.service';
@Component({
  selector: 'app-student-registry',
  templateUrl: './student-registry.component.html',
  styleUrls: ['./student-registry.component.css']
})
export class StudentRegistryComponent implements OnInit, AfterViewInit {

  data = [
    {
      "firstName": "Emma",
      "lastName": "Thompson",
      "phoneNumber": "(945) 426-2962",
      "registeredEmail": "emmathompson@overplex.com",
      "isMinor": false
    },
    {
      "firstName": "Lina",
      "lastName": "Adams",
      "phoneNumber": "(990) 540-2574",
      "registeredEmail": "linaadams@overplex.com",
      "isMinor": false
    },
    {
      "firstName": "Burris",
      "lastName": "Jordan",
      "phoneNumber": "(843) 527-2951",
      "registeredEmail": "burrisjordan@overplex.com",
      "isMinor": true
    },
    {
      "firstName": "Earline",
      "lastName": "Golden",
      "phoneNumber": "(938) 439-3797",
      "registeredEmail": "earlinegolden@overplex.com",
      "isMinor": true
    },
    {
      "firstName": "Snow",
      "lastName": "Mcfadden",
      "phoneNumber": "(882) 594-3382",
      "registeredEmail": "snowmcfadden@overplex.com",
      "isMinor": true
    }
  ]
  @ViewChild(MatPaginator) paginator : MatPaginator
  dataSource = new MatTableDataSource<StudentInfo>(this.data);
  columnsToDisplay = ["name","phone","email"]

  constructor(private uiManager: UiManagerService) { }

  doFilter( filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

  onClickStudent(row: MatRow) {
    this.uiManager.showDialog("studentInfo",row)
  }
}
