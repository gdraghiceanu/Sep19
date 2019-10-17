import { Product } from './../interfaces/product';
import { Injectable } from '@angular/core';


@Injectable()
export class ShoppingCartService {
  private products: Product[] = [];
  private emptyCart: Product[] = [];
  public getCartNumber = 0;
  public sumCart = 0;

  constructor() { }

  addProduct(product: Product): void {
    this.products.push(product);
    this.getCartNumber++;
    this.sumCart = this.sumCart + product.price;
    console.log(this.products);
  }

  getCartProducts(): Product[] {
    if (this.products && this.products.length) {
      return this.products;
    } else {
      return this.emptyCart;
    }
  }
  deleteCartProduct(product: Product): void {
    const index: number = this.products.indexOf(product);

    this.getCartNumber--;
    this.sumCart = this.sumCart - product.price;
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    // console.log(this.getCartNumber);
  }
}
