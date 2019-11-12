import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/interfaces/book';
import { CurrencyEnum } from 'src/app/constants/currency.enum';
import { LanguageEnum } from 'src/app/constants/language.enum';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  pageTitle = 'Book Edit';
  book: Book;

  constructor() { }

  ngOnInit() {
    this.book = this.initializeBook();
  }

  saveBook(bookForm: NgForm) {

  }


  initializeBook(): Book {
    const b: Book = {
      id: 0,
      author: '',
      coverUrl: '',
      currency: CurrencyEnum.ron,
      language: LanguageEnum.Romanian,
      price: 0,
      publicationDate: new Date(),
      publisher: '',
      review: 0,
      title: ''
    };
    return b;
  }

}
