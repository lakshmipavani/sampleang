import {Component} from '@angular/core';
import {CarouselComponent} from './carousel.component';
@Component({
	selector:'app-root',
	template:`
	<a routerLink ='/subjects'> Subjects</a>
	<a routerLink ='/dashboard'>Dashboard</a>
	<a routerLink ='/animate'> Animation</a>
	<a routerLink ='/mapping'>MapComponent</a>
	<a routerLink ='/carousel'>CarouselComponent</a>
	<a routerLink ='/popup'>PopupComponent</a>
	<a routerLink ='/map-component'>MapComponent</a>
	<router-outlet></router-outlet>
	`
	
})
export class AppComponent{
	title = 'something interesting';
}