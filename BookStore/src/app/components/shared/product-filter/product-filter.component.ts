import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('x', { static: false }) inputFilter: ElementRef<HTMLInputElement>;

  filter: string;

  private filterChangeSubscription: Subscription;

  constructor(private filterService: FilterService) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.filterChangeSubscription = fromEvent(this.inputFilter.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        map(event => (event.target as HTMLInputElement).value)
      )
      .subscribe(filterValue => {
        console.log('product filter change');
        this.filterService.changeFilter(filterValue);
      });
  }

  ngOnDestroy(): void {
    this.filterChangeSubscription.unsubscribe();
  }
}
