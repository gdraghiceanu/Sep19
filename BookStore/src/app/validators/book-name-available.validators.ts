import { Injectable } from '@angular/core';
import { AsyncValidator, ValidationErrors, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';

@Injectable({ providedIn: 'root' })
export class BookNameAvailable implements AsyncValidator {
    constructor(private productsService: ProductsService) { }

    public validate = (control: FormControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        return this.productsService.isBookNameAvailable(control.value).pipe(
            map(isNotTaken => (isNotTaken ? null : { bookNameAvailable: true })),
            catchError(() => null)
        );
    }
}