import { Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { HarcodedAuthenticationService } from './harcoded-authentication.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{
  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardCodedAuth.isUserLoggedIn()){
      return true;
    }
    this.router.navigate(['login']);
   return false;
  }

  constructor(private hardCodedAuth:HarcodedAuthenticationService, private router: Router) { }
}
