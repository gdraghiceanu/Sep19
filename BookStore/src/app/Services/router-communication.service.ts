import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from 'src/app/Services/http.service';

@Injectable({
  providedIn: 'root'
})
export class RouterCommunicationService {

  private userDataValue$: Observable<Object>;
  private userDataBehaviorSubject: BehaviorSubject<Object> = new BehaviorSubject({});

  private itemsCollection$: Observable<Object>;
  private itemsCollesctionBehaviorSubject: BehaviorSubject<Object> = new BehaviorSubject({});

  private cartData$: Observable<Object>;
  private cartDataBehaviorSubject: BehaviorSubject<Object> = new BehaviorSubject({});

  private _cartDataDummy = {};
  constructor
    (
      private http: HttpService
    ) {
    this.userDataValue$ = this.userDataBehaviorSubject.asObservable();
    this.itemsCollection$ = this.itemsCollesctionBehaviorSubject.asObservable();
    this.cartData$ = this.cartDataBehaviorSubject.asObservable();
  }

  getUserData(): any {
    return this.userDataValue$;
  }

  setUserData(data: Object) {
    this.userDataBehaviorSubject.next(data);
  }

  getItemsCollection() : any {
    return this.itemsCollection$;
  }

  setItemsColection(data : Object) {
    console.log("DATA",data)
    this.itemsCollesctionBehaviorSubject.next(data);
  }

  updateCart(qty:number, itemId:string) {
    if (this._cartDataDummy[itemId]) {
        this._cartDataDummy[itemId] = this._cartDataDummy[itemId] + qty;
      this.cartDataBehaviorSubject.next(this._cartDataDummy);
    } else if (qty === 1) {
      this._cartDataDummy[itemId] = 1;
      this.cartDataBehaviorSubject.next(this._cartDataDummy);
    } else {
      console.log("cannot do dis")
    }
  }

  viewCartData() : any {
    return this.cartData$;
  }
}