import { Component, OnInit } from '@angular/core';
import {RouterCommunicationService} from 'src/app/Services/router-communication.service';
import { books } from 'src/app/Constants/books.seed';
import { notebooks } from 'src/app/Constants/notebooks.seed';

@Component({
  selector: 'app-cart-data',
  templateUrl: './cart-data.component.html',
  styleUrls: ['./cart-data.component.scss']
})
export class CartDataComponent implements OnInit {

  cartItems = [];

  constructor(
    private routeCommunication : RouterCommunicationService
  ) { }

  ngOnInit() {
    this.routeCommunication.viewCartData().subscribe(cartData =>{
      console.log("dsasd")
      for (let item in cartData) {
        books.forEach(book => {
          if (book.id === item) {
            const bookToPush = book;
            bookToPush.Qty = cartData[item];
            this.cartItems.push(bookToPush);
          }
        })
      }

    });
    console.log(this.cartItems)
  }

  ObjectKeys(item:any) {
    return Object.keys(item);
  }
}
