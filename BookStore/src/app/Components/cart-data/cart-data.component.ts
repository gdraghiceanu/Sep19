import { Component, OnInit } from '@angular/core';
import {RouterCommunicationService} from 'src/app/Services/router-communication.service';
import { books } from 'src/app/Constants/books.seed';
import { notebooks } from 'src/app/Constants/notebooks.seed';
import { HttpServiceService} from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-cart-data',
  templateUrl: './cart-data.component.html',
  styleUrls: ['./cart-data.component.scss']
})
export class CartDataComponent implements OnInit {

  private userDataToSend = {};

  constructor(
    private routeCommunication : RouterCommunicationService,
    private http: HttpServiceService
  ) { }

  ngOnInit() {
    this.routeCommunication.getRoutesData().subscribe(userData =>{
      this.userDataToSend = userData;
    });
    console.log(this.userDataToSend)
    this.routeCommunication.viewCartData().subscribe(cartData =>{
      for (let item in cartData) {
        books.forEach(book => {
          if (book.id === item) {
            const bookToPush = book;
            bookToPush.Qty = cartData[item];
            this.userDataToSend["orderDetails"].cartData.push(bookToPush);
          }
        })
      }
    });
  }

  ObjectKeys(item:any) {
    return Object.keys(item);
  }
  
  updateCartBackEnd() {
    console.log(this.userDataToSend)
    this.http.doRequest(
      "POST","http://localhost:8080/updateCart",{
        "userData" : this.userDataToSend,
      }
    )
    .then(result =>{
      console.log("was ok",result)
    });
  }
}
