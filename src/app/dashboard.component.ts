import {Component,OnInit }  from '@angular/core';
import {Subject} from './subject';
import {SubjectService} from './subject.service';

export class Subject2{
	id:number;
	name:string;
}

const SUBJECTS:Subject2[]=[
           {id:1001,name:'balaguruswamy'},
           {id:1002,name:'ritchie'},
           {id:1003,name:'ramaswamy'},
           {id:1004,name:'palatie'},
           {id:1005,name:'sanjeev babu'},
           {id:1006,name:'vignesh kapoor'}
];
@Component({
	selector:'my-dashboard',
	templateUrl:'./dashboard.component.html',
	styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  subjects2=SUBJECTS;
  subjects3 : Subject[];
  constructor(private subjectService:SubjectService){}
  ngOnInit():void{
      this.subjectService.getSubjects().then(subjects => this.subjects3 = subjects.slice(0,4));
  }
}
