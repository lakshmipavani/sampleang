import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SubjectDetailComponent } from './subject-detail.component';
import { SubjectsComponent } from './subjects.component';
import { SubjectService } from './subject.service';
import { DashboardComponent } from './dashboard.component';
import {AnimateComponent}  from './animate.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectDetailComponent,
    SubjectsComponent,
    DashboardComponent,
    AnimateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
          {
          path:'subjects',
          component:SubjectsComponent
          },
          {
          path:'dashboard',
          component:DashboardComponent
          },{
          path:'detail/:id',
          component: SubjectDetailComponent
          },{
          path:'animate',
          component: AnimateComponent
          }
    ])
  ],
  providers: [SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
