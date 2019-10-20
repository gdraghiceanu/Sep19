import { Component, OnInit } from '@angular/core';
import { RouterCommunicationService } from 'src/app/Services/router-communication.service';
import { Router } from '@angular/router';

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
    private route: Router
  ) {   }

  ngOnInit() {
    this.routeCommunication.getRoutesData().subscribe(data => {
      this.userData.data = data;
    });
    this.routeCommunication.viewCartData().subscribe(cartData =>{
      this.cartData.items = cartData;
      this.cartData.itemsNo = (()=>{
        let localQty = 0;
        for (let item in cartData) {
          console.log(cartData[item])
          localQty = localQty + cartData[item];
        }
        return localQty;
      })();

    });
  }

  toggleDropdown(): void {
    if (this.activeDropdown === false && location.pathname !== "/(menuOutlet:profile//contentOutlet:items-container)") {
      this.route.navigate([{ outlets: { menuOutlet : ['profile'], contentOutlet: ['items-container'] } }])
    }
    this.activeDropdown = !this.activeDropdown;
  }

  filterProducts(showPreference,show): void {
    this.userData.data.preferences[showPreference] = show;
    this.routeCommunication.setRoutesData(this.userData.data)
  }

  triggerMenuEvent(menuAction) {
    console.log(menuAction)
    switch (menuAction) {
      case "Cart":
          this.activeDropdown = false;
          this.route.navigate([{ outlets: { menuOutlet : ['profile'], contentOutlet: ['cart-data'] } }])
        break;
      case "Profile":
      break;
      default:
        console.log(menuAction, " not implemented.")
    }
  }
}
