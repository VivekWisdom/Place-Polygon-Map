import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {Login} from './login/login';
import {Home} from './home/home';
import {Account} from './account/account';
import {SignUp} from './signup/signup';
import {Services} from './shared/services'
import { AgmCoreModule } from 'angular2-google-maps/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


/**
   * Root Module to configuare global dependencies
   * @parameters
   * @response
   */
@NgModule({
    declarations: [AppComponent, Login, Home, Account, SignUp],
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig), AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCookqxn13MwqJcbMQTGIsaTnqvXGT05NA'
    })],
    providers: [Services, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule {

}
