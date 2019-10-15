import { Product } from './../interfaces/product';
import { Injectable } from '@angular/core';


@Injectable()
export class ShoppingCartService {
  private products: Product[] = [];
  private emptyCard: Product[] = [];
  public getCardNumber = 0;
  public sumCard = 0;

  constructor() { }

  addProduct(product: Product): void {
    this.products.push(product);
    this.getCardNumber++;
    this.sumCard = this.sumCard + product.price;
    console.log(this.products);
  }

  getCardProducts(): Product[] {
    if (this.products && this.products.length) {
      return this.products;
    } else {
      return this.emptyCard;
    }
  }
  deleteCardProduct(product: Product): void {
    const index: number = this.products.indexOf(product);

    this.getCardNumber--;
    this.sumCard = this.sumCard - product.price;
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    // console.log(this.getCardNumber);
  }
}
