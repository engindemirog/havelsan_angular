import { AuthService } from './../services/auth.service';
import { NotificationService } from './../services/notification.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private notificationService: NotificationService,
    private authService: AuthService,
    private router:Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    let isAuthenticated = this.authService.isAuthenticated();
    if(isAuthenticated===true){
      return true;
    }else{
      this.router.navigate(["login"]);
      this.notificationService.error('Önce sisteme giriş yapmanız gerekiyor?');
      return false;
    }
    
    
  }
}
