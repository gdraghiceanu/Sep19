import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SubjectSubscriber } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class RouterCommunicationService {
  private data = new Subject();
  private _cartDataDummy = {};
  private cartData = new Subject();
  constructor() { }

  getRoutesData() : any {
    return this.data;
  }

  setRoutesData(data:any) {
    this.data.next(data);
  }

  updateCart(operand:string, itemId:string) {
    if (this._cartDataDummy[itemId]) {
      if (operand === "+") {
        this._cartDataDummy[itemId] = this._cartDataDummy[itemId] + 1;
      } else {
        this._cartDataDummy[itemId] = this._cartDataDummy[itemId] - 1;
      }
      this.cartData.next(this._cartDataDummy);
    } else if (operand === "+") {
      this._cartDataDummy[itemId] = 1;
      this.cartData.next(this._cartDataDummy);
    } else {
      console.log("cannot do dis")
    }
  }

  viewCartData() : any {
    console.log(this.cartData)
    return this.cartData;
  }
}
