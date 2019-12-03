import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Book } from 'src/app/interfaces/book';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-book-detailed',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailedComponent implements OnInit {
  isAdmin = false;
  book: Book;

  constructor(
    private router: ActivatedRoute,
    private prodServ: ProductsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isAdmin = this.authService.currentUser && this.authService.currentUser.isAdmin;

    const bookId = +this.router.snapshot.params.id;

    this.prodServ.getBooks().subscribe(books => {
      const result = books.find(book => book.id === bookId);
      this.book = result;
    });
  }
}
