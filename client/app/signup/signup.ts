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
    selector: 'signup',
    templateUrl: './signup.html',
    styleUrls: ['./signup.css'],
})

/**
   * Export Component Class
   * @Class Name 'SignUp'
   * @Implements OnInit
   */

export class SignUp implements OnInit {

    sessionId: string;
    user: any = {};
    dbUser:any={};
    showError:boolean=false;
    showSuccess:boolean=false;

    constructor(private _services: Services, private router: Router) {

    }
    /**
       * Method to execute on view init
       * @parameters
       * @response
       */
    ngOnInit() {
        console.log('SignUp View');
        this.user = {
            "name":"",
            "email": "",
            "password": ""
        }
    }

    signUp(){
      this._services.signUp(this.user.name,this.user.email, this.user.password).subscribe((res) => {
          this.dbUser = res;
          if (this.dbUser['status'] == 'success') {
              this.showSuccess=true;
              this.router.navigate(['login',{'showError':this.showError,'showSuccess':this.showSuccess}]);
          } else {
              this.showError = true;
              this.ngOnInit();
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
        this.signUp();
    }
}
