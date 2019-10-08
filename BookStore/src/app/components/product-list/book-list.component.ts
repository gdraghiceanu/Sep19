import { Component, OnInit } from '@angular/core';
import { books } from 'src/app/constants/books.seed';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books = books;
  filteredBooks: Book[];

  constructor() {
    this.filteredBooks = this.books;
  }

  ngOnInit() {
    console.log('productList onInit');
  }

  onChangeFilter(val: string) {
    this.filteredBooks = this.produceFilterList(val);
  }

  private produceFilterList(filterValue: string): Book[] {
    filterValue = filterValue.toLocaleLowerCase();
    return this.books.filter(
      book => book.title.toLocaleLowerCase().indexOf(filterValue) !== -1
    );
  }
}
