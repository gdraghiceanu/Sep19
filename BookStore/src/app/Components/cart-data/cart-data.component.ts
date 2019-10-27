import { Component, OnInit } from '@angular/core';
import { RouterCommunicationService } from 'src/app/Services/router-communication.service';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-cart-data',
  templateUrl: './cart-data.component.html',
  styleUrls: ['./cart-data.component.scss']
})
export class CartDataComponent implements OnInit {

  private userDataToSend = {};

  constructor(
    private routeCommunication: RouterCommunicationService,
    private http: HttpService
  ) {

  }

  ngOnInit() {
    this.routeCommunication.getRoutesData().subscribe(userData => {
      this.userDataToSend = userData;
    });
    if (this.userDataToSend === []) {
      // this.http.dsoRequest(
      //   "GET","",{}
      // )
      // .then(result =>{
      //   let r = JSON.parse(result);
      //   if (r !== false) {
      //     this.routeCommunication.setRoutesData(r);
      //     this.routeCommunication.updateCart(r,"");
      //   } else {
      //     console.log("dasdas")
      //   }
      // });
    } else {
      // this.routeCommunication.viewCartData().subscribe(cartData => {
      //   for (let item in cartData) {
      //     console.log(cartData)
      //     books.forEach(book => {
      //       if (book.id === item) {
      //         const bookToPush = book;
      //         bookToPush.Qty = cartData[item];
      //         if (this.userDataToSend["orderDetails"].cartData.indexOf(bookToPush) === -1) this.userDataToSend["orderDetails"].cartData.push(bookToPush);
      //       }
      //     });
      //   }
      //   console.log(this.userDataToSend)
      // });
    }
  }

  ObjectKeys(item: any) {
    return Object.keys(item);
  }

  updateCartBackEnd() {
    //   this.http.dosRequest(
    //     "GET","updateCart",{
    //       "userData" : JSON.stringify(this.userDataToSend),
    //     }
    //   )
    //   .then(result =>{
    //     console.log("was ok",result)
    //   });
    // }
  }
}
