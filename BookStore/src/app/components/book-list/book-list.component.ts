import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  filteredBooks: Book[];

  private books: Book[];

  constructor(
    private productService: ProductsService,
    private shoppingCartService: ShoppingCartService
  ) {
    this.getBooks();
  }

  ngOnInit() {
    console.log('productList onInit');
  }

  onChangeFilter(val: string) {
    this.filteredBooks = this.produceFilterList(val);
  }

  addBookToCart(book: Book): void {
    this.shoppingCartService.addProduct(book);
  }

  private produceFilterList(filterValue: string): Book[] {
    filterValue = filterValue.toLocaleLowerCase();
    return this.books.filter(
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
