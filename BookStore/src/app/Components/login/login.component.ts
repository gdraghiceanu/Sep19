import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/Services/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  
  username: string;
  password: string;
  loggedInUser: any;

  constructor(
    private http: HttpServiceService,
    private route: Router,
    private activeRoute : ActivatedRoute
    ) { }

  ngOnInit() { }

  getUser() {
    this.http.doRequest(
      "GET","login",{
        "username" : this.username,
        "password" : this.password
      }
    )
    .then(result =>{
      this.loggedInUser = JSON.parse(result);
      if (this.loggedInUser !== false) {
        this.route.navigate(["loggedin/profile"]);
      } else {
        console.log("Username or password are incorrect.");
      }
    });
  }
}
