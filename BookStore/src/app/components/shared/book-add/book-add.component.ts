import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {
  addBook: Book;


  constructor(private router: Router , private productService: ProductsService ) { }

  ngOnInit() {
  }
  addBookForm(bookForm: NgForm) {
    console.log('Am datele', bookForm);
    const idnou = 8 ;
    if (bookForm && bookForm.valid) {
      alert(bookForm.form.value.title);
      // this.addBook.id = idnou;
      // this.addBook.title = bookForm.form.value.title;
      // this.addBook.author = bookForm.form.value.author;
      // this.addBook.coverUrl = bookForm.form.value.coverUrl;
      // this.addBook.price = bookForm.form.value.price;
      // this.addBook.currency = bookForm.form.value.currency;
      // this.addBook.review = bookForm.form.value.review;
      // this.addBook.language = bookForm.form.value.language;
      // this.addBook.publisher = bookForm.form.value.publisher;
      // this.addBook.publicationDate = bookForm.form.value.publicationDate;
      this.addBook = bookForm.form.value;
      this.addBook.id = idnou;
      console.log(this.addBook);

      this.addBookdatabase( this.addBook);
      this.router.navigate(['/books']);

    }
  }

  addBookdatabase(addBook: Book) {
    this.productService.updateBook(addBook).subscribe(
      () => {
         console.log('am dat subscribe');
      }
    );

  }

}
