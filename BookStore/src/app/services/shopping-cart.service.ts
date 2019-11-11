import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { CartProduct } from '../interfaces/cart-product';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class ShoppingCartService {
    private products: CartProduct[] = [];

    private productSubject: BehaviorSubject<string>;
    productObs$: Observable<any>;

    constructor() {
      this.productSubject = new BehaviorSubject<string>('');
      this.productObs$ = this.productSubject.asObservable();
    }

    private addProduct(product: Product): void {
        const existingProduct = this.products.find(element => element.title === product.title);

        if (!existingProduct) {
            const newProduct: CartProduct = { ...product, quantity: 1 };
            this.products.push(newProduct);
        } else {
            existingProduct.quantity++;
        }
        console.log(this.products);
    }

    getProducts(): CartProduct[] {
        return this.products;
    }

    sendProductToCart(prod: Product) {
      this.addProduct(prod);

      let totalQuantity = 0;
      let totalPrice = 0;

      // for (const item of this.products) {
      //   totalPrice += item.price * item.quantity;
      //   totalQuantity += item.quantity;
      // }

      this.products.forEach(function(item){
        totalPrice += item.price * item.quantity;
        totalQuantity += item.quantity;
      });

      const response = totalPrice === 0 ? '' : `(Total price: ${totalPrice}, Total products: ${totalQuantity})`;

      this.productSubject.next(response);
    }
}
