import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  hoversession:HTMLElement;

  constructor() { }

  ngOnInit() {

    this.hoversession=document.getElementById('circle');
    this.hoversession.addEventListener('mousemove',logMessage);
    this.hoversession.addEventListener('mouseout',logMessage);



  }
  unsubscribe(){
    console.log(" usubscibe colled");
    this.hoversession.removeEventListener('mousemove', logMessage);
  }


}
function logMessage(event:MouseEvent){
  console.log(event);
}
