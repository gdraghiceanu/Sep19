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
    console.log(this.getCardNumber);
  }

  getCardProducts(): Product[] {
    if (this.products && this.products.length) {
      return this.products;
    } else {
      return this.emptyCard;
    }
  }
}
