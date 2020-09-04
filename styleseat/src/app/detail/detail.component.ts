import { Component, OnInit ,TemplateRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import detaildata from '../../assets/detaildata.json';
import wokringdate from '../../assets/workingdate.json';
import Timeing from '../../assets/timeing.json';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'; 
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  modalRef: BsModalRef; 
servicesList:{name:string,price:string,description:string}= detaildata;
workingDate:{day:string,open:string}=wokringdate;
servicesTimeing:{}= Timeing;
rowdata:{};
  constructor(private titleService: Title,private modalService: BsModalService) { }

  ngOnInit() {
    this.titleService.setTitle( " Detail | StyleSheet");
    console.log(this.servicesTimeing);
  }

  openModalWithClass(template: TemplateRef<any>,rowid) {  
    this.modalRef = this.modalService.show(  
      template,  
      Object.assign({}, { class: 'gray' })  
    );  
    this.rowdata=detaildata.filter(rowd=>rowd.id===rowid)[0];
  } 

}
