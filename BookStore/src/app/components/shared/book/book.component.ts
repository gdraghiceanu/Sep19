import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnChanges {
  @Input() book: Book;
  @Input() showImage: boolean;

  sizeWidth = 50;
  marginSize = 5;
  starMessage: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onStarEvent(val: string) {
    this.starMessage = val;
  }

}
