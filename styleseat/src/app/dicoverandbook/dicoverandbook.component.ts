import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dicoverandbook',
  templateUrl: './dicoverandbook.component.html',
  styleUrls: ['./dicoverandbook.component.css']
})
export class DicoverandbookComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToMapSearch(cityname : string){
    this.router.navigate(['/search']);
    console.log(cityname);
  }

}
