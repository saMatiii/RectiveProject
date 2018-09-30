import {Component, OnInit} from '@angular/core';
import {Lesson} from "../shared/Model/lesson";
import {Observable} from "rxjs/index";
import {DataServiceService} from "../shared/Services/data-service.service";

@Component({
  selector: 'app-list-lessons',
  templateUrl: './list-lessons.component.html',
  styleUrls: ['./list-lessons.component.css']
})
export class ListLessonsComponent implements OnInit {
  dataSource: Lesson[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


  constructor(private dataservice: DataServiceService) {
    console.log(" get data form list");
    this.dataservice.getdata((data:any) => {this.dataSource=data;});
  }

  ngOnInit() {
  }


}



