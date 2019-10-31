import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  countCart = 0;
  cartItems: any = 0;
  constructor( private productsCart: ShoppingCartService) {
    this.countCart = productsCart.getCartNumber;

   }

  ngOnInit() {
    this.productsCart.productsRef.subscribe((items) => {
      this.cartItems = items;
    });
  }

}
