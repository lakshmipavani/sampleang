import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PopupModule} from 'ng2-opd-popup';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { SubjectDetailComponent } from './subject-detail.component';
import { SubjectsComponent } from './subjects.component';
import { SubjectService } from './subject.service';
import { DashboardComponent } from './dashboard.component';
import { AnimateComponent }  from './animate.component';
import { CarouselComponent } from './carousel.component';
import { MapComponent } from './map.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectDetailComponent,
    SubjectsComponent,
    DashboardComponent,
    AnimateComponent,
    CarouselComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    PopupModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBdhFXnP-fAlxTmjPM22QYuMXMtbgn5ybQ'
    }),
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
          component:SubjectDetailComponent
          },{
          path:'animate',
          component:AnimateComponent
          },
          {
          path:'carousel',
          component:CarouselComponent
          },
          {
          path:'map-component',
          component:MapComponent
          }
    ])
  ],
  providers: [SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
