import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { FilterService } from 'src/app/services/filter.service';
import { Product } from 'src/app/interfaces/product';
import { ActivatedRoute } from '@angular/router';

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
    this.getBooks();
    this.filterService.filterValue$.subscribe(
      value => {
        console.log('book filter change', value);

        this.produceFilterList(value);
      }
    )


  }

  ngOnInit() {
  }

  addBookToCart(book: Book): void {
    // this.shoppingCartService.addProduct(book);
    this.shoppingCartService.sendProductToCart(book);
  }

  private produceFilterList(filterValue: string): void {
    filterValue = filterValue.toLocaleLowerCase();
    this.filteredBooks = this.books.filter(
      book => book.title.toLocaleLowerCase().indexOf(filterValue) !== -1
    );
  }

  getBooks() {
    // this.productService.getBooks()
    //   .subscribe(books => {
    //     this.books = books;
    //     this.filteredBooks = this.books;
    //   });

    let data: Book[] = this.route.snapshot.data['bookedResolved'];
    this.books = data;
    this.filteredBooks = data;
  }

  clickSort(value) {
    if (this.filteredBooks) {

      switch (value) {
        case ('name'):
          this.filteredBooks.sort(sortByNameAsc);
          break;
        case ('rating'):
          this.filteredBooks.sort(sortByRatingDesc);
          break;
        case ('author'):
          this.filteredBooks.sort(sortByAuthor);
          break;
        default:
          this.filteredBooks.sort(sortByNameAsc);
      }
    }
  }
}


function sortByNameAsc(b1: Book, b2: Book) {
  if (b1.title > b2.title) { return 1; }
  else if (b1.title === b2.title) { return 0; }
  else { return -1; }
}

function sortByRatingDesc(p1: Product, p2: Product) {
  return p2.review - p1.review;
}

function sortByAuthor(p1: Book, p2: Book) {
  if (p1.author > p2.author) {
    return 1;
  } else if (p1.author === p2.author) {
    return 0;
  } else {
    return -1;
  }
}
