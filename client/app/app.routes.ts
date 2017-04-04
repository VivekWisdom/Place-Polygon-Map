import {Routes} from '@angular/router';
import {Login} from './login/login';
import {Home} from './home/home';
import {Account} from './account/account';
import {SignUp} from './signup/signup';

/**
   * Constant to define global route configurations
   * @parameters
   * @response
   */

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'home', component: Home },
    { path: 'account', component: Account },
    { path: 'signup', component: SignUp }
];
