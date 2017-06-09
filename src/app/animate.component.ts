import {Component,trigger,state,style,transition,keyframes,animate} from '@angular/core';
@Component({
	selector:"my-animation",
	template:`<div class="row">
	           		<div class="columns">
	            	 	<button (click)="toggleMove()">tap me for animation</button>
	           		</div>
	           		<div class="columns">
	           		  <div id="content" [@focusPanel]='state' [@movePanel]>i am animated</div>
	           		</div>
	         </div>`,
	styles:[
	`.button {font-size:1.8em;}
	 #content {padding:30px;background:#eeeeee;}
	`],
	animations:[
      trigger('focusPanel',[
      state('inactive',style({transform:'scale(1)',backgroundColor:"#eee"})),
      state('active',style({transform:'scale(1.1)',backgroundColor:"#cfd"})),
      transition('inactive => active',animate('100ms ease-in')),
      transition('active => inactive',animate('100ms ease-out'))
      ]),
      trigger('movePanel',[
      transition('void => *',[
           style({transform:'translateY(-100%)'}),animate(100)
        ])
      ]),
	]
})
export class AnimateComponent{
     state:string ="inactive";
	 toggleMove(){
          this.state=(this.state === 'inactive'? 'active':'inactive');
	}
}