import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CurrencyEnum } from '../../../constants/currency.enum';
import { LanguageEnum } from '../../../constants/language.enum';
import { Book } from '../../../interfaces/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

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
  constructor(private router: ActivatedRoute, private prodServ: ProductsService) { }

  ngOnInit() {
    const bookId = +this.router.snapshot.params.id;

    if (bookId) {
      this.prodServ.getBooks().subscribe(books => {
        const result = books.filter(book => book.id === bookId)[0];
        this.book = result;
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
    }


  }

}
