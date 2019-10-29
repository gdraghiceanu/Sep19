import { Component, OnInit } from '@angular/core';
import { RouterCommunicationService } from 'src/app/Services/router-communication.service';
import { HttpService } from "src/app/Services/http.service";

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class ItemsContainerComponent implements OnInit {

  private userData: any;
  private displayItems = [];
  private itemsCollection = {};

  constructor(
    private routeCommunication: RouterCommunicationService,
    private http: HttpService
  ) { }
  isHidden = false;
  ngOnInit() {
      this.routeCommunication.getUserData().subscribe(data => {
        this.userData = data;
      });
      this.routeCommunication.getItemsCollection().subscribe(itemsCollection => {
        this.itemsCollection = itemsCollection;
        updateData();
      });
      function updateData() {
        for (let preference in JSON.parse( this.userData.preferences)) {
          this.displayItems.push({
            type: preference,
            shouldDisplay: JSON.parse( this.userData.preferences)[preference]
          });
        }
        this.displayItems[0]["BOOKS"] = this.itemsCollection["Books"];
        console.log(this.displayItems)
        this.displayItems[1]["NOTEBOOKS"] = this.itemsCollection["Notebooks"];
      }
  }

  ObjectKeys(item: any) {
    return Object.keys(item);
  }

  toggleClass(event) {
    event.target.parentElement.getElementsByTagName("img")[0].classList.toggle("hidden");
  }

  filterProducts(filterValue, category) {
    if (this.displayItems[0].type === category) {
      this.displayItems[0].data = this.displayItems[0].BOOKS.filter(item => { return item.title.toLocaleLowerCase().match(filterValue) });
    } else {
      this.displayItems[1].data = this.displayItems[0].NOTEBOOKS.filter(item => { return item.title.toLocaleLowerCase().match(filterValue) });
    }
  }

  addItemsToCart(qty: number, itemId, event) {
    this.routeCommunication.updateCart(qty, itemId);
    if (qty === -1) {
      event.target.nextElementSibling.innerHTML = Number(event.target.nextElementSibling.innerHTML) + qty;
    } else {
      event.target.previousElementSibling.innerHTML = Number(event.target.previousElementSibling.innerHTML) + qty;
    }
  }

  onImageLoad(event) {
    event.target.classList.remove("hidden")
    event.target.parentElement.parentElement.classList.remove("isLoading");
  }
}
