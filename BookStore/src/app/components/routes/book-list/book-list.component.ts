import { Component, OnInit } from '@angular/core';
import { Book } from '../../../interfaces/book';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { FilterService } from 'src/app/services/filter.service';
import { Product } from 'src/app/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  filteredBooks: Book[];

  private books: Book[] = [];

  constructor(
    private productService: ProductsService,
    private shoppingCartService: ShoppingCartService,
    private filterService: FilterService,
    private route: ActivatedRoute
  ) {
    this.books = this.route.snapshot.data.books;
    this.filteredBooks = this.route.snapshot.data.books;

    this.filterService.filterValue$.subscribe(
      value => {
        this.produceFilterList(value);
      }
    );
  }

  ngOnInit() {
  }

  getBooks() {
    combineLatest(
      this.filterService.filterValue$,
      this.productService.getBooks(true)
    ).pipe(
      first()
    ).subscribe(([filterValue, books]) => {
      this.books = books;
      this.filteredBooks = this.books;
      this.produceFilterList(filterValue);
    });
  }

  addBookToCart(book: Book): void {
    this.shoppingCartService.sendProductToCart(book);
  }

  clickSort(value) {
    switch (value) {
      case ('name'):
        this.filteredBooks.sort(this.sortByNameAsc);
        break;
      case ('rating'):
        this.filteredBooks.sort(this.sortByRatingDesc);
        break;
      case ('author'):
        this.filteredBooks.sort(this.sortByAuthor);
        break;
      default:
        this.filteredBooks.sort(this.sortByNameAsc);
    }
  }

  private produceFilterList(filterValue: string): void {
    filterValue = filterValue.toLocaleLowerCase();
    this.filteredBooks = this.books.filter(
      book => book.title.toLocaleLowerCase().indexOf(filterValue) !== -1
    );
  }

  private sortByNameAsc(b1: Book, b2: Book) {
    return b1.title.localeCompare(b2.title);
  }

  private sortByRatingDesc(p1: Product, p2: Product) {
    return p2.review - p1.review;
  }

  private sortByAuthor(p1: Book, p2: Book) {
    return p1.author.localeCompare(p2.author);
  }
}
