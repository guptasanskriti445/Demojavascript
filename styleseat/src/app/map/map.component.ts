import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat =19.0760;
  lng = 72.8777;
  constructor() { }

  ngOnInit() {
  }

}
