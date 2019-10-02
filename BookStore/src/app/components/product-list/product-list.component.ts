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
  showImage = false;
  pageTitle = 'Book Store';

  constructor() {
    this.filteredBooks = this.books;
  }

  ngOnInit() {
    console.log('productList onInit')
  }

  ngAfterViewInit() {
    console.log(this.childStar.rating.toString());
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onChangeFilter(val: string) {
    this.filteredBooks = this.produceFilterList(val);
  }


  private produceFilterList(keyValue: string): Book[] {
    keyValue = keyValue.toLocaleLowerCase();
    return this.books.filter(
      book => book.title.toLocaleLowerCase().indexOf(keyValue) !== -1
    );
  }
}
