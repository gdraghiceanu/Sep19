import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Book } from 'src/app/interfaces/book';


@Component({
  selector: 'app-book-detailed',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailedComponent implements OnInit {

  book: Book;
  constructor(private router: ActivatedRoute, private prodServ: ProductsService) { }

  ngOnInit() {
    const bookId = +this.router.snapshot.params.id;

    this.prodServ.getBooks().subscribe(books => {
      const result = books.filter(book => book.id === bookId)[0];
      this.book = result;
    });
  }
}
