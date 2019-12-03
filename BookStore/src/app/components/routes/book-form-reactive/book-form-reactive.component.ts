import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CurrencyEnum } from '../../../constants/currency.enum';
import { LanguageEnum } from '../../../constants/language.enum';
import { Book } from '../../../interfaces/book';
import { mergeMap } from 'rxjs/operators';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

const coverUrlPropName = 'coverUrl';

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.scss']
})
export class BookFormReactiveComponent implements OnInit {
  isLoading = true;
  bookForm: FormGroup = this.formBuilder.group({
    id: 0,
    author: [''],
    [coverUrlPropName]: [''],
    currency: [CurrencyEnum.ron],
    language: [LanguageEnum.Romanian],
    price: [0],
    publicationDate: [new Date()],
    publisher: [''],
    review: [1],
    title: ['']
  });

  get author(): string {
    return this.bookForm.get('author').value;
  }

  get authorFC(): FormControl {
    return this.bookForm.get('author') as FormControl;
  }

  get coverUrl(): string {
    return this.bookForm.get(coverUrlPropName).value;
  }

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
  }];

  languages = [{
    value: LanguageEnum.English,
    label: LanguageEnum.English
  },
  {
    value: LanguageEnum.Romanian,
    label: LanguageEnum.Romanian
  }];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prodServ: ProductsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    const bookId = +this.route.snapshot.params.id;

    if (bookId) {
      this.prodServ.getBook(bookId).subscribe(book => {
        this.bookForm.setValue(book);
        this.isLoading = false;
      });
    } else {
      this.isLoading = false;
    }
  }

  saveBook() {
    this.prodServ.updateBook(this.bookForm.value as Book)
      .pipe(mergeMap(resp => this.prodServ.getBooks(true)))
      .subscribe(resp => {
        this.router.navigate(['/books']);
      });
  }
}
