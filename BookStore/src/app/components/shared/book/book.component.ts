import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  AfterViewInit,
  EventEmitter,
  Output,
  ElementRef
} from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('childStar', { static: false }) childStar: StarComponent;

  @Input() book: Book;
  @Input() showImage: boolean;

  @ViewChild('rating', { static: false }) ratingInput: ElementRef<HTMLInputElement>;
  @ViewChild('price', { static: false }) priceInput: ElementRef<HTMLInputElement>;

  @Output() addBookToCart: EventEmitter<Book> = new EventEmitter();

  sizeWidth = 50;
  marginSize = 5;
  starMessage: string;
  showEdit = false;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngAfterViewInit() {
    console.log(this.childStar.rating.toString());
  }
  addToCart() {
    this.addBookToCart.emit(this.book);
  }
  onStarEvent(val: string) {
    this.starMessage = val;
  }
  updateBook() {
    this.book.price = +this.priceInput.nativeElement.value;
    this.book.review = +this.ratingInput.nativeElement.value;
    this.showEdit = false;
  }
}
