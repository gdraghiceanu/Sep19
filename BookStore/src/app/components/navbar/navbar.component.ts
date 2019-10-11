import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  countCard = 0;
  constructor( private productsCard: ShoppingCartService) {
    this.countCard = productsCard.getCardNumber;
   }

  ngOnInit() {
  }

}
