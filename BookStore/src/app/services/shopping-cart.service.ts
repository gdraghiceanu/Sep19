import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable()
export class ShoppingCartService {
    private products: Product[] = [];

    constructor() { }

    addProduct(product: Product): void {
        this.products.push(product);
        console.log(this.products);
    }
}