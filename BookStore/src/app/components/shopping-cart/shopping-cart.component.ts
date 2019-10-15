import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { CartProduct } from 'src/app/interfaces/cart-product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartProducts: CartProduct[];
  totalPrice: number = 0;

  constructor(
    private shoppingCartService: ShoppingCartService
    ) { 
      this.cartProducts = this.shoppingCartService.getProducts();
      this.cartProducts.forEach(element => {
        this.totalPrice += element.price * element.quantity;
      });
      this.totalPrice = Math.round(this.totalPrice * 100)/100;
    }

  ngOnInit() {
  }

}
