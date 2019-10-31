import { Product } from './../interfaces/product';
import { Injectable } from '@angular/core';
import { CartProduct } from '../interfaces/cart-product';
import { BehaviorSubject } from 'rxjs/';


@Injectable()
export class ShoppingCartService {
  private products: CartProduct[] = [];
  private emptyCart: CartProduct[] = [];
  public getCartNumber = 0;
  public sumCart = 0;
  private infoCart = [];

  productsRef = new BehaviorSubject<any>([]);

  constructor() {
    this.productsRef.next(this.infoCart);
  }

  addProduct(product: Product): void {
    const existingProduct = this.products.find(element => element.title === product.title);
    if (!existingProduct) {
      const newProduct: CartProduct = { ...product, quantity: 1 };
      this.products.push(newProduct);
      this.getCartNumber++;
    } else {
        existingProduct.quantity++;

    }
    this.sumCart = this.sumCart + product.price;
    this.sumCart = Math.round(this.sumCart * 100) / 100;
    this.infoCart['suma'.toString()] = this.sumCart;
    this.infoCart['nr'.toString()] = this.getCartNumber;
    this.productsRef.next(this.infoCart);
    console.log(this.products);
  }

  getCartProducts(): CartProduct[] {
    if (this.products && this.products.length) {
      return this.products;
    } else {
      return this.emptyCart;
    }
  }
  deleteCartProduct(product: CartProduct): void {
    const index: number = this.products.indexOf(product);

    this.getCartNumber--;
    this.sumCart = this.sumCart - (product.price * product.quantity);
    this.sumCart = Math.round(this.sumCart * 100) / 100;
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    this.infoCart['suma'.toString()] = this.sumCart;
    this.infoCart['nr'.toString()] = this.getCartNumber;
    this.productsRef.next(this.infoCart);
    // console.log(this.getCartNumber);
  }
}
