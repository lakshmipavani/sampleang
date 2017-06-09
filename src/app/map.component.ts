import {Component} from '@angular/core';
@Component({
	selector:'my-map',
	template:`<sebm-google-map [latitude]="lat" [longitude]="lng">
                <sebm-google-map-marker [latitude]="lat" [longitude]="lng"></sebm-google-map-marker>
               </sebm-google-map>`,
    styles:[
	`sebm-google-map{
	height:10px;
	}
	`]
})
export class MapComponent{
	lat: number = 51.678418;
    lng: number = 7.809007;
}