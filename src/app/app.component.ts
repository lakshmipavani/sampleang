import {Component} from '@angular/core';
@Component({
	selector:'app-root',
	template:`
	<a routerLink ='/subjects'> Subjects</a>
	<a routerLink ='/dashboard'>Dashboard</a>
	<a routerLink ='/animate'> Animation</a>
	<a routerLink ='/mapping'>MapComponent</a>
	<router-outlet></router-outlet>
	`
})
export class AppComponent{
	title = 'something interesting';
}