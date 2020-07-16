import { BaseComponent } from './../components/base/base.component';
import { NotificationService } from './../services/notification.service';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CartCompleteComponent } from '../components/cart-complete/cart-complete.component';

@Injectable({
  providedIn: 'root'
})
export class PageCompletedGuard implements CanDeactivate<BaseComponent> {
  constructor(private notificationService:NotificationService){

  }
  canDeactivate(
    component: BaseComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      //let result = component.cartCompleteForm.dirty;
      this.notificationService.error("Sayfa tamamlanmamış");
      return false;
  }
  
}
