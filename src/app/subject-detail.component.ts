import {Component,Input,OnInit} from '@angular/core';
import {ActivatedRoute,Params} from  '@angular/router';
import {Location } from '@angular/common';

import {Subject} from './subject';
import {SubjectService } from './subject.service';

@Component({
	selector:'subject-detail',
	templateUrl:'./subject-detail.component.html',
    styleUrls: ['./subject-detail.component.css']
})

export class SubjectDetailComponent{
   //subject:Subject;
   @Input() subject:Subject;
   constructor(
    private subjectService:SubjectService,
    private route:ActivatedRoute,
    private location:Location
   ){}
   

}