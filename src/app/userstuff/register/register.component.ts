import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  sessionOne : SessionElement[] = [
    {
      "name": "Rosalie",
      "price": 667,
      "date": "11/5/2020",
      "type": "Phillips"
    },
    {
      "name": "Bryant",
      "price": 745,
      "date": "11/5/2020",
      "type": "Stephenson"
    },
    {
      "name": "Elvia",
      "price": 661,
      "date": "11/5/2020",
      "type": "Jacobs"
    }
  ]
  sessionTwo : SessionElement[] = [
    {
      "name": "Murphy",
      "price": 975,
      "date": "11/5/2020",
      "type": "Valencia"
    },
    {
      "name": "Martha",
      "price": 683,
      "date": "11/5/2020",
      "type": "Case"
    },
    {
      "name": "Lacy",
      "price": 778,
      "date": "11/5/2020",
      "type": "Hutchinson"
    }
  ]
  driverTests : SessionElement[] = [
    {
      "name": "Foley",
      "price": 347,
      "date": "11/5/2020",
      "type": "Pennington"
    },
    {
      "name": "Norman",
      "price": 661,
      "date": "11/5/2020",
      "type": "Alicia"
    },
    {
      "name": "Alexander",
      "price": 766,
      "date": "11/5/2020",
      "type": "Dionne"
    }
  ]
  dataSource = new MatTableDataSource<SessionElement>(this.sessionOne);
  columnsToDisplay = ["name", "date", "price"]
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  setDataSource(ds:string) {
    if (ds === "sessionOne") {
      this.dataSource.data = this.sessionOne
    } else if (ds === "sessionTwo") {
      this.dataSource.data = this.sessionTwo
    } else if (ds === "driverTests") {
      this.dataSource.data = this.driverTests
    }
  }

}
