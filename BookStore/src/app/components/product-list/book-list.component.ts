import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { FilterService } from 'src/app/services/filter.service';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  filteredBooks: Book[];

  private books: Book[] = [];
  private lastFilterValue: string;
  constructor(
    private productService: ProductsService,
    private shoppingCartService: ShoppingCartService,
    private filterService: FilterService
  ) {
    // this.getBooks();
    // this.filterService.filterValue$.subscribe(
    //   value => {
    //     console.log('book filter change', value);

    //     this.produceFilterList(value);
    //   }
    // );

    // Metoda II
    combineLatest(
      this.filterService.filterValue$,
      this.productService.getBooks()
      .pipe(tap(books => {
        this.books = books;
        this.filteredBooks = this.books;
      }))
    )
    .subscribe(
      ([value, books]) => {
        console.log('notebook filter change', value);
        this.lastFilterValue = value;

        this.produceFilterList(value);
      });
  }

  ngOnInit() {
  }

  addBookToCart(book: Book): void {
    this.shoppingCartService.addProduct(book);
  }

  private produceFilterList(filterValue: string): void {
    filterValue = filterValue.toLocaleLowerCase();
    this.filteredBooks = this.books.filter(
      book => book.title.toLocaleLowerCase().indexOf(filterValue) !== -1
    );
  }

  getBooks() {
    this.productService.getBooks()
      .subscribe(books => {
        this.books = books;
        this.filteredBooks = this.books;
      });
  }
}
