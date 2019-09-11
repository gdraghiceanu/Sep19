import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  @Input() rating: number;
  starWidth: number;

  childLabel = 'Star message!';

  @Output() reviewClicked: EventEmitter<string>;

  constructor() {
    this.reviewClicked = new EventEmitter<string>();
   }

  ngOnInit() {
    this.starWidth = this.rating * 75 / 5;
  }

  ngOnChanges(): void {
  }

  onClick() {
    this.reviewClicked.emit(`The rating: ${this.rating} was clicked`);
  }
}
