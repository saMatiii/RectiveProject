import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { CounterComponent } from './counter/counter.component';
import { ListLessonsComponent } from './list-lessons/list-lessons.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    CounterComponent,
    ListLessonsComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
