import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterValue$: Observable<string>;

  private filterBehaviorSubject: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {
    this.filterValue$ = this.filterBehaviorSubject.asObservable();
  }

  changeFilter(value: string): void {
    console.log('filter service change');

    this.filterBehaviorSubject.next(value);
  }
}
