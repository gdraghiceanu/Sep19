import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { CartProduct } from '../interfaces/cart-product';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class ShoppingCartService {
    private products: CartProduct[] = [];

    private productSubject: BehaviorSubject<string>;
    productObs$: Observable<any>;

    totalPrice: number = 0;
    totalQuantity: number = 0;

    constructor() {
      this.productSubject = new BehaviorSubject<string>('');
      this.productObs$ = this.productSubject.asObservable();
    }

    addProduct(product: Product): void {
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

      this.totalQuantity = 0;
      this.totalPrice = 0;

      for (const item of this.products) {
        this.totalPrice += item.price * item.quantity;
        this.totalQuantity += item.quantity;
      }

      const response = `All price: ${this.totalPrice}, Nb of items: ${this.totalQuantity}`;

      this.productSubject.next(response);
    }
}
