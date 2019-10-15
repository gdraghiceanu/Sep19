import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { CartProduct } from '../interfaces/cart-product';

@Injectable()
export class ShoppingCartService {
    private products: CartProduct[] = [];

    constructor() { }

    addProduct(product: Product): void {
        let existingProduct = this.products.find(element => element.title === product.title) as CartProduct;

        if (!existingProduct) {
            const newProduct = <CartProduct>{ ...product };
            newProduct.quantity = 1;
            this.products.push(newProduct);
        } else {
            existingProduct.quantity++;
        }
        console.log(this.products);
    }

    getProducts(): CartProduct[] {
        return this.products;
    }
}