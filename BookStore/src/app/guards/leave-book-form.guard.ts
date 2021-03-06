import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { BookFormComponent } from '../components/routes/book-form/book-form.component';

@Injectable({
  providedIn: 'root',
})
export class LeaveBookFormGuard implements CanDeactivate<BookFormComponent> {

  canDeactivate(
    component: BookFormComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return window.confirm('are you sure you want to leave this page?');
  }
}
