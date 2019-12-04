import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CurrencyEnum } from '../../../constants/currency.enum';
import { LanguageEnum } from '../../../constants/language.enum';
import { Book } from '../../../interfaces/book';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { FormBuilder, Validators, FormGroup, FormControl, ValidationErrors } from '@angular/forms';
import { NameNotAllowedValidator } from 'src/app/validators/name-not-allowed.validator';
import { BookNameAvailable } from 'src/app/validators/book-name-available.validators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.scss']
})
export class BookFormReactiveComponent implements OnInit {
  isLoading = true;
  bookForm: FormGroup;

  get author(): FormControl {
    return this.bookForm.get('author') as FormControl;
  }

  get coverUrl(): FormControl {
    return this.bookForm.get('coverUrl') as FormControl;
  }

  get currency(): FormControl {
    return this.bookForm.get('currency') as FormControl;
  }

  get language(): FormControl {
    return this.bookForm.get('language') as FormControl;
  }

  get price(): FormControl {
    return this.bookForm.get('price') as FormControl;
  }

  get publicationDate(): FormControl {
    return this.bookForm.get('publicationDate') as FormControl;
  }

  get publisher(): FormControl {
    return this.bookForm.get('publisher') as FormControl;
  }

  get review(): FormControl {
    return this.bookForm.get('review') as FormControl;
  }

  get title(): FormControl {
    return this.bookForm.get('title') as FormControl;
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
    private formBuilder: FormBuilder,
    private bookNameAvailable: BookNameAvailable,
  ) {
    this.bookForm = this.formBuilder.group({
      id: 0,
      author: ['', [Validators.required, NameNotAllowedValidator(['ceva'])]],
      coverUrl: ['', Validators.required],
      currency: [CurrencyEnum.ron, Validators.required],
      language: [LanguageEnum.Romanian, Validators.required],
      price: [0, Validators.required],
      publicationDate: [''],
      publisher: [''],
      review: [1, Validators.required],
      title: ['', Validators.required, this.validate.bind(this)]
    });
  }

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

  public validate(control: FormControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.prodServ.isBookNameAvailable(control.value).pipe(
      map(isNotTaken => (isNotTaken ? null : { bookNameAvailable: true })),
      catchError(() => null)
    );
  }

  saveBook() {
    this.prodServ.updateBook(this.bookForm.value as Book)
      .pipe(mergeMap(resp => this.prodServ.getBooks(true)))
      .subscribe(resp => {
        this.router.navigate(['/books']);
      });
  }
}
