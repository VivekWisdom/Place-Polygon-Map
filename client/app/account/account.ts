import {Component, OnInit, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {Router} from '@angular/router';
import {Services} from '../shared/services';
import {Md5} from 'ts-md5/dist/md5';
import {Observable} from 'rxjs/Observable';

/**
   * Define Component Metadata
   * selector 'videos'
   */

@Component({
    selector: 'account',
    templateUrl: './account.html',
    styleUrls: ['./account.css'],
})

/**
   * Export Component Class
   * @Class Name 'Videos'
   * @Implements OnInit, AfterViewInit
   */

export class Account implements OnInit {

    user: any = {};
    dbUser:any;
    showSuccess:boolean;
    showError:boolean;
    sessionId: string;

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
            this.getUserDetails(this.sessionId);
        } else {
            this.router.navigate(['login']);
        }
    }

    /**
       * Method to get all videos
       * @parameters sessionId
       * @response Object
       */

    getUserDetails(sessionId) {
        this._services.getUserDetails(sessionId)
            .subscribe((res) => {
                this.user = res;
            });
    }

    updateUser(){
      this._services.updateUser(this.user.name, this.user.email, this.user.password).subscribe((res) => {
          this.dbUser = res;
          if (this.dbUser['status'] == 'success') {
              this.showSuccess=true;
              this.router.navigate(['home']);
          } else {
              this.showError = true;
              this.ngOnInit();
          }
      });
    }

    onSubmit(){
      this.user.password = Md5.hashStr(this.user.password);
      this.updateUser();
    }

}
