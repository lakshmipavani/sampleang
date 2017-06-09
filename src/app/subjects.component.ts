import { Component,OnInit } from '@angular/core';
import {Subject} from './subject';
import {SubjectService} from './subject.service';

export class Subject1{
	 id:number;
	 name:string;
}

@Component({
  //selector: 'app-root',
  selector: 'my-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
  providers:[SubjectService]
})

export class SubjectsComponent implements OnInit{
  //title = "It's okay fine continue";
   object = {
    link: "../assets/web-page.jpg"
  }
  subject1: Subject1 = {
      id:1001,
      name:'balaguruswamy'
  };
  subjects : Subject[];
  selectedSubject: Subject;
  constructor(private subjectService:SubjectService){}
  getSubjects():void {
    this.subjectService.getSubjects().then(subjects => this.subjects = subjects);
  }
  ngOnInit():void{
  this.getSubjects();
  }
  onSelect(subject: Subject): void{
      this.selectedSubject = subject;
  }
}
