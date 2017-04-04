import {Component} from '@angular/core';
import {Services} from './shared/services';
import {Router} from '@angular/router';

/**
   * Define Component Metadata
   * selector 'app'
   * Root Component
   */

@Component({
    selector: 'app',
    templateUrl: './app.html',
    styleUrls: ['./app.css'],
})

/**
   * Export Component Class
   * @Class Name 'AppComponent'
   *
   */
export class AppComponent {
    isLogged: any;
    name: string;
    sessionId: string;

    constructor(private _services: Services, private router: Router) {
        this.name = localStorage.getItem('name');
        this.sessionId = localStorage.getItem('sessionId');
        this.isLogged = this.isLoggedIn();
    }

    /**
       * Method to check if user is loggedIn
       * @parameters
       * @response boolean
       */
    isLoggedIn() {
        if (this.sessionId) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }

    /**
       * Method to logout
       * @parameters
       * @response
       */

    onLogout() {
        this._services.onLogout(this.sessionId).subscribe((res) => {
            if (res.status == 'success') {
                localStorage.removeItem('sessionId');
                localStorage.removeItem('name');
                this.isLogged = false;
                this.name = undefined;
                this.router.navigate(['login']);
            }
        });
    }

}
