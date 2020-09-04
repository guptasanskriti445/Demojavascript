import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dhSearch:boolean=true;
  constructor(private router: Router,private titleService: Title,private route: ActivatedRoute) { }

  ngOnInit() {
   
    this.router.url==='/search'?this.dhSearch=false:this.dhSearch=true;
        console.log(this.router.url);
  }

  // navigateToMapSearch(cityname : string){
  //   this.router.navigate(['/mapsearch']);
  //   console.log(cityname);
    navigateToMapSearch(cityname : string){
      this.router.navigate(['/search']);
      console.log(cityname);
  }

}
