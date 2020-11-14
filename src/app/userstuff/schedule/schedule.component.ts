import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit, AfterViewInit {

  schedule : SessionElement[] = 
  [
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
    },
    {
      "name": "Carney",
      "price": 479,
      "date": "11/5/2020",
      "type": "Cherry"
    },
    {
      "name": "Cathy",
      "price": 913,
      "date": "11/5/2020",
      "type": "Lori"
    },
    {
      "name": "Tammi",
      "price": 850,
      "date": "11/5/2020",
      "type": "Hanson"
    },
    {
      "name": "Katy",
      "price": 804,
      "date": "11/5/2020",
      "type": "Moore"
    },
    {
      "name": "Carpenter",
      "price": 685,
      "date": "11/5/2020",
      "type": "Floyd"
    },
    {
      "name": "Hunt",
      "price": 109,
      "date": "11/5/2020",
      "type": "Diane"
    },
    {
      "name": "Wilder",
      "price": 584,
      "date": "11/5/2020",
      "type": "Chapman"
    },
    {
      "name": "Mckenzie",
      "price": 950,
      "date": "11/5/2020",
      "type": "Penelope"
    },
    {
      "name": "Fay",
      "price": 525,
      "date": "11/5/2020",
      "type": "Wilkinson"
    },
    {
      "name": "Walters",
      "price": 264,
      "date": "11/5/2020",
      "type": "Roth"
    },
    {
      "name": "Ingram",
      "price": 218,
      "date": "11/5/2020",
      "type": "Belinda"
    },
    {
      "name": "Noemi",
      "price": 120,
      "date": "11/5/2020",
      "type": "Harriett"
    },
    {
      "name": "Rosanne",
      "price": 865,
      "date": "11/5/2020",
      "type": "Whitney"
    },
    {
      "name": "Kim",
      "price": 658,
      "date": "11/5/2020",
      "type": "Leslie"
    }
  ]

  selectedPage : string = "sessions";
  otherPage : string = "materials"
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<SessionElement>(this.schedule);
  columnsToDisplay = ["name", "date", "price"]

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

  doFilter( filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  togglePage() {

    //change data source for table

    if (this.selectedPage === "sessions" ) {
      this.selectedPage = "materials"
      this.otherPage = "sessions"
    } else  {
      this.selectedPage = "sessions"
      this.otherPage = "materials"
    }
  }
}
