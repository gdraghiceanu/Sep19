import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Input() showImage: boolean;

  @Output() addBookToCart: EventEmitter<Book> = new EventEmitter();
  @Output() bookUpdated: EventEmitter<void> = new EventEmitter();

  sizeWidth = 50;
  marginSize = 5;
  showEdit = false;
  starMessage: string;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
  }

  addToCart() {
    this.addBookToCart.emit(this.book);
  }

  onStarEvent(val: string) {
    this.starMessage = val;
  }

  saveBook(book: Book) {
    this.productService.updateBook(book).subscribe(
      () => {
        this.showEdit = false;
        this.bookUpdated.emit();
      }
    );
  }
}
