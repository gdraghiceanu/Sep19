import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @Output() filterUpdate = new EventEmitter<string>();
  @ViewChild('x', { static: false }) inputFilter: ElementRef<HTMLInputElement>;

  filter: string;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.inputFilter.nativeElement.addEventListener('keyup', this.filterChange);
  }

  ngOnDestroy(): void {
    this.inputFilter.nativeElement.removeEventListener(
      'keyup',
      this.filterChange
    );
  }

  filterChange = () => {
    this.filterUpdate.emit(this.filter);
  };
}
