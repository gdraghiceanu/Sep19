import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CurrencyEnum } from '../../../constants/currency.enum';
import { LanguageEnum } from '../../../constants/language.enum';
import { Book } from '../../../interfaces/book';
import { mergeMap } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.scss']
})
export class BookFormReactiveComponent implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
 
}
