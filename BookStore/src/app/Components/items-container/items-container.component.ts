import { Component, OnInit } from '@angular/core';
import {RouterCommunicationService} from 'src/app/Services/router-communication.service';
import { books } from 'src/app/Constants/books.seed';
import { notebooks } from 'src/app/Constants/notebooks.seed';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class ItemsContainerComponent implements OnInit {

  private userData:any;
  private displayItems = [];

  constructor(
    private routeCommunication : RouterCommunicationService
    )
    { }
    isHidden = false;
  ngOnInit() {
    this.routeCommunication.getRoutesData().subscribe(data =>{
      this.userData = data;
      for (let preference in data.preferences) {
        this.displayItems.push({
          type : preference,
          data : preference === "books" ? books : notebooks
        }); 
      }
    });
    console.log(this.userData)

  }
  
  ObjectKeys(item:any) {
    return Object.keys(item);
  }

  toggleClass(event) {
    event.target.parentElement.getElementsByTagName("img")[0].classList.toggle("hidden");
  }

  filterProducts(filterValue,category) {
    if (this.displayItems[0].type === category) {
      this.displayItems[0].data = books.filter(item=>{return item.title.toLocaleLowerCase().match(filterValue)});
    } else {
      this.displayItems[1].data = books.filter(item=>{return item.title.toLocaleLowerCase().match(filterValue)});
    }
  }

  addItemsToCart(operand,itemId) {
    this.routeCommunication.updateCart(operand,itemId);
    if (operand === "-") {
      console.log("substract",itemId)
    } else {
      console.log("add",itemId)
    }
  }
}
