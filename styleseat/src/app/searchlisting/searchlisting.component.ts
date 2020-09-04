import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-searchlisting',
  templateUrl: './searchlisting.component.html',
  styleUrls: ['./searchlisting.component.css']
})
export class SearchlistingComponent implements OnInit {

  constructor( private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle( "Listing | StyleSheet");
  }

}
