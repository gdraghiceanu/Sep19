import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { books } from 'src/app/constants/books.seed';
import { Book } from 'src/app/interfaces/book';
import { StarComponent } from '../shared/star.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Book Store';
  imageSize = 50;
  showImage = true;
  starLabel: string;
  @Input() searchKey: string;

  @ViewChild(StarComponent, {static: false }) childStar: StarComponent;

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

  ngOnChanges(changes: SimpleChanges): void {
    const changeSearch = changes['searchKey'];
    const c = changeSearch.currentValue;

    this.filteredBooks = c ? this.produceFilterList(c) : this.books;
}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.starLabel = this.childStar.rating.toString();
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  produceFilterList(keyValue: string ): Book[] {
    keyValue = keyValue.toLocaleLowerCase();
    return this.books.filter(book => book.title.toLocaleLowerCase().indexOf(keyValue) !== -1 );
  }

  onReviewClicked(val) {
    this.starLabel = val;
  }

}
