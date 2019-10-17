import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  listCart: Product[];
  product: Product;
  totalProducts = 0;
  totalSuma = 0;

  constructor(
    private productsCart: ShoppingCartService
  ) {
    this.listCart = productsCart.getCartProducts();
    this.totalProducts = productsCart.getCartNumber;
    this.totalSuma = productsCart.sumCart;
  }

  ngOnInit() {
  }
  deleteToCart(productCart) {
    // this.product = productCart;
    // console.log(this.product);
    this.productsCart.deleteCartProduct(productCart);
    this.listCart = this.productsCart.getCartProducts();
    this.totalProducts = this.productsCart.getCartNumber;
    this.totalSuma = this.productsCart.sumCart;
  }
}
