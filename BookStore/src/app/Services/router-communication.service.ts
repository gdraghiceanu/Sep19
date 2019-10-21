import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterCommunicationService {
  private data = new BehaviorSubject([]);
  private _cartDataDummy = {};
  private cartData = new BehaviorSubject({});
  constructor(
  ) { }

  getRoutesData() : any {
    if (this.data.value === []) {
      
    }
    return this.data;
  }

  setRoutesData(data:any) {
    this.data.next(data);
  }

  updateCart(qty:number, itemId:string) {
    if (this._cartDataDummy[itemId]) {
        this._cartDataDummy[itemId] = this._cartDataDummy[itemId] + qty;
      this.cartData.next(this._cartDataDummy);
    } else if (qty === 1) {
      this._cartDataDummy[itemId] = 1;
      this.cartData.next(this._cartDataDummy);
    } else {
      console.log("cannot do dis")
    }
  }

  viewCartData() : any {
    return this.cartData;
  }
}