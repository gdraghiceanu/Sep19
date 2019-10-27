import { Component, OnInit } from '@angular/core';
import { RouterCommunicationService } from 'src/app/Services/router-communication.service';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-user-logged-in',
  templateUrl: './user-logged-in.component.html',
  styleUrls: ['./user-logged-in.component.scss']
})
export class UserLoggedInComponent implements OnInit {


  private userData = {
    menuTemplate: [["Profile"], ["Shop", "Books", "Notebooks"], ["Cart"], ["Sign Out"]],
    data: null
  }
  private cartData = {
    items : null,
    itemsNo : 0
  };

  activeDropdown: Boolean = true;
  constructor(
    private routeCommunication: RouterCommunicationService,
    private route: Router,
    private activatedRoute : ActivatedRoute,
    private http: HttpService
  ) {   }

  ngOnInit() {
    this.routeCommunication.getUserData().subscribe(data => {
      this.userData.data = data;
    });
    this.routeCommunication.viewCartData().subscribe(cartData =>{
      this.cartData.items = cartData;
      this.cartData.itemsNo = (()=>{
        let localQty = 0;
        for (let item in cartData) {
          localQty = localQty + cartData[item];
        }
        return localQty;
      })();
    });
  }

  triggerMenuEvent(menuAction) {
    if (menuAction === "Sign Out") {
      console.log("signing out")
    } else if (menuAction === "Shop") {
      console.log(menuAction)
      if (this.activatedRoute.snapshot["_routerState"] !== "/loggedin/shop") {
        this.route.navigate(["loggedin/shop"]);
      }
        this.activeDropdown = true;
    } else {
      this.route.navigate(["/loggedin",menuAction.toLowerCase()]);
      this.activeDropdown = !this.activeDropdown;
    }
  }
}
