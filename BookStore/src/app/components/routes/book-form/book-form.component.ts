import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CurrencyEnum } from '../../../constants/currency.enum';
import { LanguageEnum } from '../../../constants/language.enum';
import { Book } from '../../../interfaces/book';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  isLoading = true;
  book: Book;

  currencies = [{
    value: CurrencyEnum.ron,
    label: CurrencyEnum.ron
  },
  {
    value: CurrencyEnum.usd,
    label: CurrencyEnum.usd
  },
  {
    value: CurrencyEnum.euro,
    label: CurrencyEnum.euro
  },
  ];
  languages = [{
    value: LanguageEnum.English,
    label: LanguageEnum.English
  },
  {
    value: LanguageEnum.Romanian,
    label: LanguageEnum.Romanian
  }
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prodServ: ProductsService
  ) { }

  ngOnInit() {
    const bookId = +this.route.snapshot.params.id;

    if (bookId) {
      this.prodServ.getBook(bookId).subscribe(book => {
        this.book = book;
        this.isLoading = false;
      });
    } else {
      this.book = {
        id: 0,
        author: '',
        coverUrl: '',
        currency: CurrencyEnum.ron,
        language: LanguageEnum.Romanian,
        price: 0,
        publicationDate: new Date(),
        publisher: '',
        review: 1,
        title: ''
      };
      this.isLoading = false;
    }
  }

  saveBook() {
    this.prodServ.updateBook(this.book)
      .pipe(mergeMap(resp => this.prodServ.getBooks(true)))
      .subscribe(resp => {
        this.router.navigate(['/books']);
      });
  }
}
