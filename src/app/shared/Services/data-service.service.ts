import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {listdata} from "../data";
import * as _ from 'lodash';
import {BehaviorSubject, Observable} from "rxjs/index";
import {Data} from "@angular/router";
import {Lesson} from "../Model/lesson";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService implements OnInit{
  private  store = new  EventEmitter();
  private listLessons = [];

  private lessonlistSubject = new BehaviorSubject([]);
  public lessonList$ :Observable<Lesson[]> =this.lessonlistSubject.asObservable();


  constructor() {
    //this.listLessons=listdata;
  }

  inisializeLessonList(newList:Lesson[]){
    this.lessonlistSubject.next(newList);
  }


    ngOnInit(){
      //this.listLessons=listdata;
  }

    notifyforDate(){
      this.store.next(this.listLessons);
    }

    getdata(data: any){
      this.store.subscribe(data);
    }

    addLesson(value:any){
      console.log("the value : "+value)
       this.listLessons.push({
         position: 12, name: value, weight: 1.0079, symbol: 'M'
       });
        this.notifyforDate();
      }


}

