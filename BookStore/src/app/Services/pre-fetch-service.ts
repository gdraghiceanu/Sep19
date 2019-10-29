import { Injectable } from '@angular/core';
import { HttpService } from "src/app/Services/http.service";
import { RouterCommunicationService } from "src/app/Services/router-communication.service";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PreFetchService {

  constructor(
    private http: HttpService,
    private routeCommunication: RouterCommunicationService,
    private route: Router,
  ) { }

  preFetchData(): Promise<any> {
    return Promise.all([
      new Promise(res => {
        this.http.serverGetRequest("", {})
          .then(r => {
            if (r !== null) {
              res(r);
              // this.routeCommunication.updateCart(r, "");
            } else {
              res("Incorrect passssss")
            }
          });
      }),
      new Promise(res => {
        this.http.serverGetRequest("get-items-collection", {})
          .then(result => {
            res(result);
          });
      })
    ])
    .then((result) => {
      this.routeCommunication.setUserData(result[0]);
      this.routeCommunication.setItemsColection(result[1]);
      if (this.route.url === "/login") {
        this.route.navigate(["/loggedin", "profile"]);
      } else {
        console.log("dasdas")
      }
    });
  }

}