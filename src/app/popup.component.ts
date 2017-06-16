import  { ViewChild , Component } from '@angular/core';
import {Popup} from 'ng2-opd-popup';

@Component({
	selector:'popup',
	template:`
	<popup #popup1> something we may add later</popup>
	<h1>
	    {{title}}
	<br>
	//<button (click)="clickButton()"> poptest </button>
	</h1>
	`
})
export class PopupComponent{
       constructor(private popup:Popup) { }

      @ViewChild('popup1') popup1: Popup;
      title="u know it right";

      //ClickButton(){
       //  this.popup1.options={
       //    color:"#5cb85c",
       //    widthProsentage:40,
       //    animationDuration:1,
        //   showButtons:true,
       //    confirmBtnContent:"ok",
       //    cancelBtnContent:"cancel",
       //    confirmBtnClass:"btn btn-default",
       //    cancelBtnClass:"btn btn-default",
       //    animation:"fadeInDown"
       //  };
       //  this.popup1.show(this.popup1.options);
         //this.popup1.show();
      //}
}