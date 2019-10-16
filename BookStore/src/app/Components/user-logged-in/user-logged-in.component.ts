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
    data: ""
  }
  private cartData:any;
  activeDropdown: Boolean = true;
  constructor(
    private routeCommunication: RouterCommunicationService,
    private route: Router
  ) { }

  ngOnInit() {
    this.routeCommunication.getRoutesData().subscribe(data => {
      this.userData.data = data;
    });
    this.routeCommunication.viewCartData().subscribe(cartData =>{
      this.cartData = cartData;
    });
  }

  toggleDropdown(): void {
    this.activeDropdown = !this.activeDropdown;
  }

  filterProducts(preference): void {
    console.log(preference)
  }

  triggerMenuEvent(menuAction) {
    switch (menuAction) {
      case "Cart":
          this.route.navigate([{ outlets: { menuOutlet : ['profile'], contentOutlet: ['cart-data'] } }])
          console.log(this.cartData)
        break;
      default:
        console.log(menuAction, " not implemented.")
    }
  }
}
