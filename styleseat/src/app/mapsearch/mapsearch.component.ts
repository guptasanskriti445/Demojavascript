import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mapsearch',
  templateUrl: './mapsearch.component.html',
  styleUrls: ['./mapsearch.component.css']
})
export class MapsearchComponent implements OnInit {
  DateValue: Date;
  lat = 51.678418;
  lng = 7.809007;
  constructor() {  }

  ngOnInit() {
    this.DateValue = new Date();
  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }

}
