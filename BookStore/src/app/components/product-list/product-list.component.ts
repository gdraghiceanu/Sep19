import { Component, OnInit } from '@angular/core';
import { books } from 'src/app/constants/books.seed';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Book Store';
  imageSize = 50;
  showImage = true;

  _filterList: string;
  get filterList() {
    return this._filterList;
  }
  set filterList(value: string) {
    this._filterList = value;
    this.filteredBooks = value ? this.produceFilterList(value) : this.books;
  }

  filteredBooks: Book[];
  books = books;

  constructor() { 
    this.filteredBooks = this.books;
  }

  ngOnInit() {
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  produceFilterList(keyValue: string ): Book[] {
    keyValue = keyValue.toLocaleLowerCase();
    return this.books.filter(book => book.title.toLocaleLowerCase().indexOf(keyValue) !== -1 );
  }

}
