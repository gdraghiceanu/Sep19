import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Product } from '../interfaces/product';
import { Observable, of } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { catchError } from 'rxjs/operators';
import { ProductTypeEnum } from '../constants/product-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<Product[]> {

  constructor(private productService: ProductsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> | any {
    switch (route.data.productType) {
      case ProductTypeEnum.book:
        return this.productService.getBooks().pipe(catchError(err => of(err)));

      case ProductTypeEnum.notebook:
        return this.productService.getNotebooks().pipe(catchError(err => of(err)));
    }
  }
}
