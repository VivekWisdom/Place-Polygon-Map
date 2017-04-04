import {Component, OnInit, ElementRef, QueryList, ViewChildren} from '@angular/core';
import { SebmGoogleMap, LatLngLiteral, SebmGoogleMapPolygon } from 'angular2-google-maps/core';
import {Router} from '@angular/router';
import {Services} from '../shared/services';
import {Observable} from 'rxjs/Observable';

/**
   * Define Component Metadata
   * selector 'videos'
   */

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})

/**
   * Export Component Class
   * @Class Name 'Home'
   * @Implements OnInit
   */

export class Home implements OnInit {

    sessionId: string;
    query: any = {};
    places: any;
    lat:number=0;
    lng:number=0;
    zoom:number=12;
    paths:Array<LatLngLiteral>=[];

    constructor(private _services: Services, private router: Router) {
        this.sessionId = localStorage.getItem('sessionId');
    }
    /**
       * Method to execute on view init
       * @parameters
       * @response
       */
    ngOnInit() {
        if (this.sessionId) {
            console.log('Load Home View');
        } else {
            console.log('Session Not Found !! Redirect to login page.');
            this.router.navigate(['login']);
        }
    }

    onSubmit() {
        this._services.searchPlaces(this.query.q).subscribe((res) => {
            this.places = res;
            if (this.places['status'] == 'OK') {
                this.places.results.forEach((result)=>{
                  let loc ={'lat':result.geometry.location.lat,'lng':result.geometry.location.lng}
                  this.paths.push(loc);
                });
                this.lat=this.paths[0].lat;
                this.lng=this.paths[0].lng;
            } else {
                console.log('Error in Text Search API');
            }
        });
    }
}
