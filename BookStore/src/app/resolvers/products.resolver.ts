import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Product } from '../interfaces/product';
import { Observable, of } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<Product[]> {

  constructor(private prodServ: ProductsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> | any {
    return this.prodServ.getBooks()
      .pipe(catchError(err => of(err)));
  }

}
