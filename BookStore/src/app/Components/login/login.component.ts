import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/Services/http-service.service';
import { Router } from '@angular/router';

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
    ) { }

  ngOnInit() { }

  getUser() {
    this.http.doRequest(
      "GET","http://localhost:8080/login",{
        "username" : this.username,
        "password" : this.password
      }
    )
    .then(result =>{
      this.loggedInUser = JSON.parse(result);
      if (this.loggedInUser !== false) {
        this.route.navigate([{ outlets: { menuOutlet : ['profile'], contentOutlet: ['items-container'] } }])
      } else {
        console.log("Username or password are incorrect.");
      }
    });
  }
}
