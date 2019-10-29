import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { Router } from '@angular/router';
import { RouterCommunicationService } from 'src/app/Services/router-communication.service';
import { PreFetchService } from "src/app/Services/pre-fetch-service";
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
    private routeCommunication: RouterCommunicationService,
    private preFetch: PreFetchService
  ) { }

  ngOnInit() { }
}