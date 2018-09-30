import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../shared/Services/data-service.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
counter:number=0;


  constructor(private dataService:DataServiceService) {
  }

  ngOnInit() {
    console.log(" get data form counter");

    this.dataService.getdata(element => {
        this.counter=element.length;

      }
    );
  }

}
