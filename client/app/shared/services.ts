import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/**
   * Define service 'Services'
   * @methods getAuth, onLogout, getVideos, getVideo, addRatings
   */
@Injectable()
export class Services {

    API_KEY: string;
    TEXT_SEARCH_API: string;
    TYPE: string;
    LOCATION: string;
    RADIUS: string;

    constructor(private http: Http) {
        this.API_KEY = 'AIzaSyCookqxn13MwqJcbMQTGIsaTnqvXGT05NA';
        this.TEXT_SEARCH_API = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
        this.TYPE = 'restaurants';
        this.LOCATION = 'India';
        this.RADIUS = '2000';
    }

    /**
       * Method to get authorization
       * @parameters username, password
       * @response Observable<Response>
       */

    getAuth(email, password) {
        let body = JSON.stringify({
            "email": email,
            "password": password
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/user/auth', body, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    /**
       * Method to logout
       * @parameters sessionId
       * @response Observable<Response>
       */

    onLogout(sessionId) {
        let params = new URLSearchParams();
        params.set('sessionId', sessionId);

        return this.http.get('/user/logout', { search: params })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    /**
       * Method to get all videos
       * @parameters sessionId, skip:optional, limit:optional
       * @response Observable<Response>
       */

    getUserDetails(sessionId) {
        let body = JSON.stringify({
            "sessionId": sessionId
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/user/getuser', body, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    /**
       * Method to signup users
       * @parameters sessionId, skip:optional, limit:optional
       * @response Observable<Response>
       */

    signUp(name, email, password) {
        let body = JSON.stringify({
            "name": name,
            "email": email,
            "password": password
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/user/signup', body, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    /**
       * Method to signup users
       * @parameters sessionId, skip:optional, limit:optional
       * @response Observable<Response>
       */

    updateUser(name, email, password) {
        let body = JSON.stringify({
            "name": name,
            "email": email,
            "password": password
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/user/update', body, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    searchPlaces(query, radius?, location?, type?) {
        let params = new URLSearchParams();
        params.set('query', query);
        params.set('key', this.API_KEY);
        params.set('radius', this.RADIUS);
        params.set('type', this.TYPE);
        params.set('location', this.LOCATION);

        return this.http.get(this.TEXT_SEARCH_API, { search: params })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}
