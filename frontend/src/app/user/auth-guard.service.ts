import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import {LoginService} from './login.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isAllowedOnState(state.url);
  }

  isAllowedOnState(url: string): boolean {
    const isLoggedIn = this.loginService.loggedIn();

    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    else {
      return true;
    }
  }
}
