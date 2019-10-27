import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { Router } from '@angular/router';
import { RouterCommunicationService } from 'src/app/Services/router-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  title = 'BookStore';

  constructor(
    private http: HttpService,
    private route: Router,
    private routeCommunication: RouterCommunicationService
  ) { }

  ngOnInit() {
    Promise.all([
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
      console.log(result)
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