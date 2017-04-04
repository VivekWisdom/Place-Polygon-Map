import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Services} from '../shared/services';
import {Md5} from 'ts-md5/dist/md5';
import {Observable} from 'rxjs/Observable';


/**
   * Define Component Metadata
   * selector 'login'
   */
@Component({
    selector: 'login',
    styleUrls: ['./login.css'],
    templateUrl: './login.html',
    providers: [Services],
})

/**
   * Export Component Class
   * Class Name 'Login'
   */

export class Login implements OnInit {
    dbUser: Observable<Object>;
    user: any = {};
    showError: any = false;
    showSuccess: any = false;
    constructor(private _services: Services, private router: Router, private route: ActivatedRoute) {
        this.user = {
            "email": "",
            "password": ""
        }
        this.showError = undefined;
        if (localStorage.getItem('sessionId')) {
            this.router.navigate(['home']);
        }

    }

    ngOnInit() {
        this.showError = this.route.queryParams.map(params => params['showError']);
        this.showSuccess = this.route.queryParams.map(params => params['showSuccess']);
    }

    /**
       * Method to get authorization
       * @parameters username, password
       * @response Object
       */
    getAuth() {
        this._services.getAuth(this.user.email, this.user.password).subscribe((res) => {
            this.dbUser = res;
            if (this.dbUser['status'] == 'success') {
                localStorage.setItem('sessionId', this.dbUser['sessionId']);
                localStorage.setItem('name', this.dbUser['name']);
                this.router.navigate(['home']);
            } else {
                this.showError = true;
                this.user.email = "";
                this.user.password = "";
            }
        });
    }

    /**
       * Method to be invoked after form submit calls getAuth with parameters
       * and generated md5 hash of password.
       * @parameters
       * @response
       */

    onSubmit() {
        this.user.password = Md5.hashStr(this.user.password);
        this.getAuth();
    }

}
