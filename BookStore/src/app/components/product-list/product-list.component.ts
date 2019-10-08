import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { books } from 'src/app/constants/books.seed';
import { StarComponent } from '../shared/star.component';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  @ViewChild('childStar', { static: false }) childStar: StarComponent;

  books = books;
  filteredBooks: Book[];
  sizeWidth = 50;
  marginSize = 5;
  showImage = false;

  private _filter: string;

  get filter(): string {
    return this._filter;
  }

  set filter(val: string) {
    this._filter = val;
    this.filteredBooks = val ? this.produceFilterList(val) : this.books;
  }

  starMessage: string;

  pageTitle = 'Book Store';

  constructor() {
    this.filteredBooks = this.books;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    //console.log(this.childStar.rating.toString());
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onChangeFilter(val: string) {
    this.filter = val;
  }

  onStarEvent(val: string) {
    this.starMessage = val;
  }

  produceFilterList(keyValue: string): Book[] {
    keyValue = keyValue.toLocaleLowerCase();
    return this.books.filter(
      book => book.title.toLocaleLowerCase().indexOf(keyValue) !== -1
    );
  }
}
