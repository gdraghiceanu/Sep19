import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  listCard: Product[];
  totalProducts = 0;
  totalSuma = 0;
  
  constructor(
    private productsCard: ShoppingCartService
  ) { 
    this.listCard = productsCard.getCardProducts();
    this.totalProducts = productsCard.getCardNumber;
    this.totalSuma = productsCard.sumCard;
  }

  ngOnInit() {
  }


}
