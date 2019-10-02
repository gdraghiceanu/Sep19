import { Component, OnInit, Input, EventEmitter, Output, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit {

  ngOnChanges(changes: SimpleChanges): void {
    console.log('StarComponent OnChanges', this.index);
  }

  ngOnInit() {
    this.starWidth = (this.rating * 75) / 5;

    console.log('StarComponent onInit', this.index)
  }

  ngAfterContentInit(): void {
    console.log('StarComponent AfterContentInit', this.index);
  }

  ngAfterViewInit() {
    console.log('StarComponent AfterViewInit', this.index)
  }

  ngDoCheck(): void {
    console.log('StarComponent DoCheck', this.index);
  }

  ngAfterContentChecked(): void {
    console.log('StarComponent AfterContentChecked', this.index);
  }

  ngAfterViewChecked(): void {
    console.log('StarComponent AfterViewChecked', this.index);
  }

  @Input() rating: number;
  @Input() index: number;
  @Output() ratingOut: EventEmitter<string>;
  starWidth: number;

  constructor() {
    this.ratingOut = new EventEmitter();
  }

  onClick() {
    this.ratingOut.emit(`Avem rating: ${this.rating}`);
  }
}
