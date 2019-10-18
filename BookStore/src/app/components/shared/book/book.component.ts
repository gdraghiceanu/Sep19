import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnChanges {

  @Input() book: Book;
  @ViewChild('productEdit', { static: false }) productEdit: ProductEditComponent;

  @Output() addBookToCart: EventEmitter<Book> = new EventEmitter();

  sizeWidth = 50;
  marginSize = 5;
  starMessage: string;
  showEdit = false;

  constructor(
    private productService: ProductsService
    ) {

   }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  addToCart() {
    this.addBookToCart.emit(this.book);
  }
  onStarEvent(val: string) {
    this.starMessage = val;
  }
  updateBook() {
    // this.book.price = +this.priceInput.nativeElement.value;
    // this.book.review = +this.ratingInput.nativeElement.value;

    this.showEdit = false;

    this.productEdit.setNewInput();

    this.book.price = this.productEdit.newPriceInput;
    this.book.review = this.productEdit.newRatingInput;

    this.productService.updateBook(this.book)
      .subscribe(
        data => {
          alert('Succesfully Added book' + JSON.stringify(data));
        },
        error => {
          alert('failed while adding book');
        },
        () => {
          console.log('Observer got a complete notification');
        }
      );
  }
}
