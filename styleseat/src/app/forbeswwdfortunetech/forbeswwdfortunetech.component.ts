import { Component, OnInit,ElementRef ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-forbeswwdfortunetech',
  templateUrl: './forbeswwdfortunetech.component.html',
  styleUrls: ['./forbeswwdfortunetech.component.css']
})
export class ForbeswwdfortunetechComponent implements OnInit {


  public isCollapsed = false;
 
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }
  showcollapse(targetcollapseid){ 

    var hElement: HTMLElement = this.el.nativeElement;
    //now you can simply get your elements with their class name
    var allcollapse = hElement.getElementsByClassName('collapse');
    for (var i = 0; i < allcollapse.length; i++) {
        this.el.nativeElement.querySelector('#'+allcollapse[i].id).classList.remove('show');
    }
    this.el.nativeElement.querySelector("#"+targetcollapseid).classList.add('show');
  }

}
