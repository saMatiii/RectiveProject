import {Component, EventEmitter, Output} from '@angular/core';
import {DataServiceService} from "./shared/Services/data-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive-Project';
  @Output() eventEmitter = new EventEmitter();

  constructor(private dataService:DataServiceService){}


  getLessons(){
   this.dataService.notifyforDate();
  }

  addLessen(value:any){
    this.dataService.addLesson(value);
  }

}
