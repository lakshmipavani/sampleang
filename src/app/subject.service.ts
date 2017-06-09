import {Injectable} from '@angular/core';
import {Subject} from './subject';
import {SUBJECTS} from './mock-subjects'
@Injectable()
export class SubjectService{
	getSubjects():Promise<Subject[]>{        
        return Promise.resolve(SUBJECTS);
	}//stub
}