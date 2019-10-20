import { Component,OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/Services/http-service.service';
import { Router } from '@angular/router';
import {RouterCommunicationService} from 'src/app/Services/router-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  title = 'BookStore';
  
  constructor(
    private http: HttpServiceService,
    private route : Router,
    private routeCommunication : RouterCommunicationService
    ) { }

    ngOnInit() {
    this.http.doRequest(
      "GET","http://localhost:8080/",{}
    )
    .then(result =>{
      let r = JSON.parse(result);
      if (r !== false) {
        this.routeCommunication.setRoutesData(r);
        this.routeCommunication.updateCart(r,"");
        this.route.navigate([{ outlets: { menuOutlet : ['profile'], contentOutlet: ['items-container'] } }])
      } else {
        console.log("dasdas")
      }
    });
  }
}
